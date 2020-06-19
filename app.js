//app.js
App({
  common: {
    // "url": 'https://189.ngrok.orange666.com',
    "url":'http://189.ngrok.jclinx.com',
    // url: 'http://192.168.1.100:8480',
    // url: 'http://192.168.1.181:8881',
    shopid:661,
    "sessionId": "",
    "encryptedData":"",
    "iv":"",
    "telReg":/^1[3456789]{1}[0-9]{9}$/,
    "havePhone":false,
    SDKkey: "IVGBZ-DOPWG-XAWQX-ICSOR-D7G43-BAFYS", //腾讯SDK key（定死）,用的是Andrea的
    "isAttestation":1,    //判断小程序是否认证，0为未认证，1为已认证
    SkinStyle: "normal", //这里
    switchChange:2,
    skintypes:""//皮肤
  },
  onLaunch: function () {
    var that=this;
   // 获取用户信息<！--
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res => {
                // 可以将 res 发送给后台解码出 unionId
                that.globalData.userInfo = res.userInfo
                that.common.iv = res.iv;
                that.common.encryptedData = res.encryptedData;
                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                wx.setStorageSync("nickName", res.userInfo.nickName)
                wx.setStorageSync("avatarUrl", res.userInfo.avatarUrl)
                console.log(res.userInfo.nickName, "33")
                that.getLaunch();
                if (that.userInfoReadyCallback) {
                  that.userInfoReadyCallback(res)
                }
              }
            })
          }
        }
      })
    that.getSkin()
    that.gethairbg()
    that.geteducationbg()
  },
  /**
   * 初始化
   */
  getLaunch:function(){
    var that = this;
    return new Promise(function (resolve, reject) {
      //登录态判断
      wx.checkSession({
        success: function () {
          //console.log("登录态成功")
          if (wx.getStorageSync('3rd_session') == "") {
            that.getLogin(resolve);
          } else {
            wx.request({
              url: that.common.url + "/ShopProgramUser/verifyLogin",
              method: "POST",
              header: {
                'sessionId': wx.getStorageSync('3rd_session'),
                'content-type': 'application/x-www-form-urlencoded'
              },
              success: function (res) {
                console.log(res)
                if (res.data.data == "1") {
                  that.common.sessionId = wx.getStorageSync('3rd_session');
                  resolve(res);
                } else {
                  that.getLogin(resolve);
                }
                
              },
              fail: function () {
                that.getLogin(resolve);
              }
            })
          }

        },
        fail: function () {
          that.getLogin(resolve)   //重新登录
        }
      })
     //-->
      
    })
  },
  /**
   * 登录
   */
  getLogin: function (resolve){
    console.log("登录登录登录登录")
    var that = this;
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          //发起网络请求
          console.log(res.code)
          wx.request({
            url: that.common.url + "/ShopProgramUser/sprogramLogin",
            data: {
              code: res.code,
              shopid: that.common.shopid
            },
            method: "POST",
            header: {
              'content-type': 'application/x-www-form-urlencoded',
            },
            success: function (res) {
              console.log(res)
              that.common.sessionId=res.data.data;
              wx.setStorageSync('3rd_session', res.data.data);
              console.log(res.data.data1,"openid")
              wx.setStorageSync('openid', res.data.data1);
              that.subUsermess();
              resolve(res);
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }

    })
  },
  /**
   * 获取unionid
   */
  subUsermess: function (){
    var that=this;
    var pram = {
      encryptedData: that.common.encryptedData,
      iv: that.common.iv,
      shopid: that.common.shopid
    };
    
    wx.request({
      url: that.common.url + "/ShopProgramUser/getUserInfo",
      data: pram,
      method: "POST",
      header: {
        'sessionId': that.common.sessionId,
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
       
        
      }
    })
  },
  /**
   * 验证手机号码是否存在
   */
  getTelphone:function(origin){
    var that=this;
    return new Promise(function (resolve, reject) {
      wx.request({
        url: that.common.url + "/ShopProgramMy/checkPhone",
        data: {
          shopid: that.common.shopid
        },
        method: "POST",
        header: {
          'sessionId': wx.getStorageSync('3rd_session'),
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          if (res.data.data==1){
            that.common.havePhone=true;
          }else{
            that.common.havePhone = false;
            if(origin!="order"){
              wx.navigateTo({
                url: '/pages/changeNumber/changeNumber'
              })
            }
           
           
          }
          resolve(res);
        }
      })
    })
  },
  globalData: {
    userInfo: null,
    skin: '',//默认健身皮肤
    hairbg:false,//美容
    educationbg:false//教育
    
  },
  appData: {
    // articleId: wx.getStorageSync('shopid')
    // articleId: this.common.shopid
  },
  getSkin: function () {
    // console.log('App getSkin------------------------')
    var that = this
    wx.getStorage({
      key: 'skin',
      success: function (res) {
        that.globalData.skin = res.data
      }
    })
  },

  gethairbg: function () {
    // console.log('App gethairbg------------------------')
    var that = this
    wx.getStorage({
      key: 'hairbg',
      success: function (res) {
        console.log(res, "res")
        that.globalData.hairbg = res.data
      }
    })
  },
  geteducationbg: function () {
    // console.log('App educationbg------------------------')
    var that = this
    wx.getStorage({
      key: 'educationbg',
      success: function (res) {
        console.log(res, "res")
        that.globalData.educationbg = res.data
      }
    })
  },
})