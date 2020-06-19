const app = getApp()
const util = require('../../utils/util.js')
Page({
  data: {
    payLink:"",
    phonecall: '',
    shopimg: "/images/default.png",
    shopName: "",
    isShow:true,
    useCoupon:true,
    truePayNumber: 0.00,
    PayNumber: "",
    nonPay:"",
    remark:"",
    backmess:"",
    focus: false,
    dcode:"",
    payarr: { 
      consumeMoney:0,
      noDiscountMoney:0,
      shopId: app.common.shopid,
      ticketIds:"",
      ticketType:0
    },
    ticketIdss:[],
    ticketTypes:"",
    backmessa:[],
    remarkInfo:"",
    counamesl:"",
    autoFocus: false,
    autoFocuss:false,
    couid:"",
    hairbg: false,//美容美发
    educationbg: false,//教育
    skinStyle: ""
  },
 
  onLoad: function (options) {
    console.log(options,"options")
    if (options != "" || options!=undefined){
      var backmessaq = options.id
      console.log(options.id, "id")
      if (backmessaq != undefined) {
        var backMessaq = backmessaq.split(",")
        console.log(backMessaq.length, "backMessaq")
        this.setData({
          ticketIdss: options.ticketids,
          ticketTypes: options.tickettype,
          backmessa: backMessaq,
          PayNumber: options.truePayNumber,
          nonPay: options.nonPay,
          remarkInfo: options.remarkInfo,
          dcode: options.ucid,
          couid: options.couid
          // isShow: false
        })
      }
      if (options.nonPay != undefined) {
        this.setData({
          isShow: false
        })
      } else {
        this.setData({
          nonPay: ""
        })
      }
      if (options.remarkInfo != undefined) {
      } else {
        this.setData({
          remarkInfo: ""
        })
      }
      options.ticketIds = this.data.ticketIds
      options.ticketType = this.data.ticketType
      options.couname = this.data.backmess
    }
    console.log(this.data.payarr,"shop")
    this.data.payarr.consumeMoney = options.truePayNumber
    // options.truePayNumber = this.data.truePayNumber
    console.log(this.data.tickettype,"33")
    wx.removeStorageSync('payarr');
    // wx.removeStorageSync('backmess');
    wx.removeStorageSync('paymoney');
    wx.setStorageSync('payarr', this.data.payarr);
    this.getShopMess();
    if (this.data.PayNumber == null){
      
    }else{
      this.getGrouPrice()
    }

    this.setData({
      skinStyle: app.globalData.skin,
      hairbg: app.globalData.hairbg,
      educationbg: app.globalData.educationbg
    })
    if (app.globalData.hairbg) {
      wx.setNavigationBarColor({
        frontColor: '#ffffff', //看文档 必须要六位 不能是三位
        backgroundColor: '#FF5E71',
      })

      wx.setTabBarStyle({
        borderStyle: '#F7F7FA',
        backgroundColor: '#FFFFFF',
        color: '#7F8389',
        selectedColor: '#FF5E71'
      })
      wx.setTabBarItem({
        index: 0,
        iconPath: 'images/icHome.png',
        selectedIconPath: 'images/icHomeHover01.png'
      });
      wx.setTabBarItem({
        index: 1,
        iconPath: 'images/icOrder.png',
        selectedIconPath: 'images/icOrderHover01.png'
      });
      wx.setTabBarItem({
        index: 2,
        iconPath: 'images/icMine.png',
        selectedIconPath: 'images/icMineHover01.png'
      });
      wx.setBackgroundColor({
        backgroundColor: '#ffffff', // 窗口的背景色为白色
      })
    } else if (app.globalData.educationbg) {
      wx.setNavigationBarColor({
        frontColor: '#ffffff', //看文档 必须要六位 不能是三位
        backgroundColor: '#F1C40F',
      })

      wx.setTabBarStyle({
        // borderStyle: '#dcdcdc',
        backgroundColor: '#F7F7FA',
        color: '#7F8389',
        selectedColor: '#FEBA46'
      })
      wx.setTabBarItem({
        index: 0,
        iconPath: 'images/icHome.png',
        selectedIconPath: 'images/icHomeHover.png'
      });
      wx.setTabBarItem({
        index: 1,
        iconPath: 'images/icOrder.png',
        selectedIconPath: 'images/icOrderHover.png'
      });
      wx.setTabBarItem({
        index: 2,
        iconPath: 'images/icMine.png',
        selectedIconPath: 'images/icMineHover.png'
      });
      wx.setBackgroundColor({
        backgroundColor: '#ffffff', // 窗口的背景色为白色
      })
    } else {
      wx.setNavigationBarColor({
        frontColor: '#ffffff', //看文档 必须要六位 不能是三位
        backgroundColor: '#242424',
      });
      wx.setBackgroundColor({
        backgroundColor: '#242424' // 窗口的背景色为白色
      })

      // wx.setTabBarStyle({
      //   borderStyle: '#f8f8f8',
      //   backgroundColor: '#00000',
      // })
    }
  },
  onShow:function(){
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1]; //当前页面
    console.log(currPage, "currPage")
    if (currPage.data.mydata!=null){
      if (Number(currPage.data.mydata.tickettype)==4){
      this.setData({
        backmessa: currPage.data.mydata.counames
      })
      console.log(currPage.data.mydata.counames,"counames")
      } else if (Number(currPage.data.mydata.tickettype) == 5){ 
        for (var i = 0; i < currPage.data.mydata.ticketids.length;i++){
          if (currPage.data.mydata.ticketids.length==1){
              this.setData({
                backmessa: currPage.data.mydata.counames
              })
            }else{
            // var arrs = that.data.ticketids.split(',')
            // for(var j=0 ;j<arrs.length;j++){
              this.setData({
                backmessa: "已选择团购券" + currPage.data.mydata.ticketids.length + "张"
              })
            // }
              
            }
            
          }
        }
      this.setData({
        ticketIdss: currPage.data.mydata.ticketids,
        ticketTypes: currPage.data.mydata.tickettype,
        PayNumber: currPage.data.mydata.truePayNumber,
        nonPay: currPage.data.mydata.nonPay,
        remarkInfo: currPage.data.mydata.remarkInfo,
        dcode: currPage.data.mydata.ucid,
        couid: currPage.data.mydata.couid
              })
    }  
    console.log(this.data.ticketIdss,"ticketIdss")
    if (this.data.ticketIdss == "" || this.data.PayNumber == null) {
      // this.data.PayNumber=""
      // this.resetPay();
      this.setData({
        backmessa:"",
        truePayNumber: this.data.PayNumber
      })
    }else{
      this.getGrouPrice()
    }



    this.setData({
      skinStyle: app.globalData.skin,
      hairbg: app.globalData.hairbg,
      educationbg: app.globalData.educationbg
    })
    if (app.globalData.hairbg) {
      wx.setNavigationBarColor({
        frontColor: '#ffffff', //看文档 必须要六位 不能是三位
        backgroundColor: '#FF5E71',
      })

      wx.setTabBarStyle({
        borderStyle: '#F7F7FA',
        backgroundColor: '#FFFFFF',
        color: '#7F8389',
        selectedColor: '#FF5E71'
      })
      wx.setTabBarItem({
        index: 0,
        iconPath: 'images/icHome.png',
        selectedIconPath: 'images/icHomeHover01.png'
      });
      wx.setTabBarItem({
        index: 1,
        iconPath: 'images/icOrder.png',
        selectedIconPath: 'images/icOrderHover01.png'
      });
      wx.setTabBarItem({
        index: 2,
        iconPath: 'images/icMine.png',
        selectedIconPath: 'images/icMineHover01.png'
      });
      wx.setBackgroundColor({
        backgroundColor: '#ffffff', // 窗口的背景色为白色
      })
    } else if (app.globalData.educationbg) {
      wx.setNavigationBarColor({
        frontColor: '#ffffff', //看文档 必须要六位 不能是三位
        backgroundColor: '#F1C40F',
      })

      wx.setTabBarStyle({
        // borderStyle: '#dcdcdc',
        backgroundColor: '#F7F7FA',
        color: '#7F8389',
        selectedColor: '#FEBA46'
      })
      wx.setTabBarItem({
        index: 0,
        iconPath: 'images/icHome.png',
        selectedIconPath: 'images/icHomeHover.png'
      });
      wx.setTabBarItem({
        index: 1,
        iconPath: 'images/icOrder.png',
        selectedIconPath: 'images/icOrderHover.png'
      });
      wx.setTabBarItem({
        index: 2,
        iconPath: 'images/icMine.png',
        selectedIconPath: 'images/icMineHover.png'
      });
      wx.setBackgroundColor({
        backgroundColor: '#ffffff', // 窗口的背景色为白色
      })
    } else {
      wx.setNavigationBarColor({
        frontColor: '#ffffff', //看文档 必须要六位 不能是三位
        backgroundColor: '#242424',
      });
      wx.setBackgroundColor({
        backgroundColor: '#242424' // 窗口的背景色为白色
      })

      // wx.setTabBarStyle({
      //   borderStyle: '#f8f8f8',
      //   backgroundColor: '#00000',
      // })
    }
  },
  /**
   * 重置选取券信息
   */
  resetPay:function(){
    var that=this;
      that.setData({
        // truePayNumber: that.data.PayNumber,
        // backmess: ""
    })
  },

  /**
   * 消费金额
   */
  bindPay:function(e){
    // this.Num(e.detail);
    // this.setData({
    //     truePayNumber: e.detail.value,
    //     PayNumber: e.detail.value
    // })
    // this.data.payarr.consumeMoney = e.detail.value;
    // wx.setStorageSync('payarr', this.data.payarr);
    // wx.setStorageSync('paymoney', e.detail.value);
    // console.log(this.data.payarr,"pay")
    // // this.resetPay();
    // if (!this.data.focus){
    //   if (this.data.ticketIdss == "" || this.data.ticketIdss == null) {
    //   } else {
    //     this.getGrouPrice()
    //   }
    // }
   
  },
  //获取焦点
  // activeFocus: function (event) {
  //   that.setData({
  //     autoFocus: true
  //   });
  // },
  // activeFocuss: function (event) {
  //   that.setData({
  //     autoFocuss: true
  //   });
  // },
  //失去焦点
  resignFocus: function (e) {
    
    console.log('222' + e.detail.value);
    // 进行
    this.Num(e.detail);
    this.setData({
      truePayNumber: e.detail.value,
      PayNumber: e.detail.value,
      autoFocus: false//焦点开关
    })
    this.data.payarr.consumeMoney = e.detail.value;
    wx.setStorageSync('payarr', this.data.payarr);
    wx.setStorageSync('paymoney', e.detail.value);
    console.log(this.data.payarr, "pay")
    if (!this.data.focus) {
      if (this.data.ticketIdss == "" || this.data.ticketIdss == null) {
      } else {
        this.getGrouPrice()
      }
    }

  },
  resignFocuss: function (e) {
    console.log(e, "不参与")
    console.log(this.data.PayNumber, "this.data.PayNumber")
    console.log(e.detail.value, "e.detail.value")
    this.Num(e.detail);
    if (Number(this.data.PayNumber) >= Number(e.detail.value)) {
      this.setData({
        nonPay: e.detail.value,
        autoFocus: false//焦点开关
      })
      if (this.data.ticketIdss == "" || this.data.ticketIdss == null) {
      } else {
        this.getGrouPrice()
      }
    } else {
      wx.showToast({
        title: '不参与优惠金额不能大于消费金额',
        icon: 'none',
        duration: 1000
      })
      this.setData({
        nonPay: ""
      })
    }
  },
  /**
   * 备注
   */
  // bindRemark: function (e) {
 
  // },
  regStrFn: function (str) {
    let reg = /([^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n])|(\s)/g,
      indexArr = reg.exec(str);
    if (str.match(reg)) {
      str = str.replace(reg, '');
    }
    let obj = { val: str, index: indexArr }
    return obj
  },
  inputVal: function (e) {
    this.setData({
      remarkInfo: e.detail.value
    })
    let name = 'form.' + e.target.dataset.name
    let val = e.detail.value,
      pos = e.detail.cursor;
    let reg = /([^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n])|(\s)/g
    if (!reg.test(val)) {
      return
    }
    let obj = this.regStrFn(val)

    if (pos != -1 && obj.index) {
    //计算光标的位置
      pos = obj.index.index
    }
    return {
      value: obj.val,
      cursor: pos
    }
    
  },
  /**
   * 不参与优惠金额
   */
  bindKeyInput: function (e) {
    // console.log(e,"不参与")
    // console.log(this.data.PayNumber,"this.data.PayNumber")
    // console.log(e.detail.value,"e.detail.value")
    // this.Num(e.detail);
    // if (Number(this.data.PayNumber) >= Number(e.detail.value)){
    //   this.setData({
    //     nonPay: e.detail.value
    //   })
    //   if (this.data.ticketIdss == "" || this.data.ticketIdss == null) {
    //   } else {
    //     this.getGrouPrice()
    //   }
    // }else{
    //   wx.showToast({
    //     title: '不参与优惠金额不能大于消费金额',
    //     icon: 'none',
    //     duration: 1000
    //   })
    //   this.setData({
    //     nonPay:""
    //   })
    // }
     
    // wx.setStorageSync('payarr', this.data.payarr);
    // this.resetPay();
  
  },
  
  importNon:function(){
    this.setData({
      isShow:false
    })
  },
  /**
   * 获取商户信息
   */
  getShopMess: function () {
    var that = this;
    wx.request({
      url: app.common.url + '/ShopProgramUserPay/getPageInfo',
      data: {
        shopid: app.common.shopid
      },
      header: {
        'sessionId': wx.getStorageSync('3rd_session'),
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      success: function (res) {
        if (res.data.success == true) {
           that.setData({
             shopmess:res.data.data.shopInfo,
             hasTicket: res.data.data.hasTicket
           })
        } else {

        }

      },
      complete: function () {
        wx.hideLoading();
      }
    })
  },
  /**
   * 选择券
   */


  chooseCoupon: util.throttle(function (e) {
    // console.log(this)
    // console.log(e)
    // console.log((new Date()).getSeconds())
    console.log(this.data.PayNumber,"PayNumber")
    console.log(this.data.nonPay, "nonPay")
    console.log(this.data.backmessa, "backmessa")

    var that=this;
    app.getTelphone().then(function (res) {
      if (app.common.havePhone) {
        if (that.data.PayNumber == "" || that.data.PayNumber == 0 || that.data.PayNumber==undefined){
          wx.showToast({
            title: '请输入消费金额',
            icon: 'none',
            duration: 1500
          })
        // } 
        // else if (Number(that.data.PayNumber) >= Number(that.data.nonPay)) {
        //   wx.showToast({
        //     title: '不参与优惠金额不能大于消费金额',
        //     icon: 'none',
        //     duration: 1500
        //   })
        }else{
          // wx.setStorageSync('hasCoupon', false);  //是否用券
          wx.navigateTo({
            url: '../../pages/chooseTicket/chooseTicket?id=' + that.data.PayNumber + "&nonPay=" + that.data.nonPay + "&remarkInfo=" + that.data.remarkInfo + "&backmessa=" + that.data.backmessa + "&dcode=" + that.data.dcode + "&ticketids=" + that.data.ticketIdss + "&tickettype=" + that.data.ticketTypes + "&couid=" + that.data.couid
          })
        }
      }else{
        wx.showToast({
          title: '未绑定手机，请先绑定手机号',
          icon: 'none',
          duration: 1500
        })
        // wx.navigateTo({
        //   url: '/pages/changeNumber/changeNumber'
        // })
      }
    })
  }, 1000),
  /**
   * 判断是否支付
   */
  ispayMoney: util.throttle(function (e) {
    var that=this;
    console.log(that.data.PayNumber,"that.data.PayNumber")
    app.getTelphone().then(function (res) {
      if (app.common.havePhone) {
        console.log(555555)
        if (that.data.PayNumber == "" || that.data.PayNumber == 0) {
          wx.showToast({
            title: '请输入消费金额',
            icon: 'none',
            duration: 1500
          })
        } 
        // else if (that.data.PayNumber >= that.data.nonPay){
        //   wx.showToast({
        //     title: '不参与优惠金额不能大于消费金额',
        //     icon: 'none',
        //     duration: 1500
        //   })
        // } 
        else {
          console.log(222222)
          if (that.data.ticketTypes==4){
            if (that.data.truePayNumber==""){
              wx.showToast({
                title: '实付金额不能为0',
                icon: 'none',
                duration: 1500
              })
            }else{
              that.payMoney();
            }
          }else{ 
            if (that.data.truePayNumber==0){
              wx.showModal({
                title: '提示',
                content: '当前使用优惠后支付金额为0，确认继续使用吗？',
                success: function (sm) {
                  if (sm.confirm) {
                    that.payMoney();
                  } else if (sm.cancel) {
                    console.log('用户点击取消')
                  }
                }
              })
            }else{
                that.payMoney();
            }
                     
             }
        }
      } else {
        wx.showToast({
          title: '未绑定手机，请先绑定手机号',
          icon: 'none',
          duration: 1500
        })
        // wx.navigateTo({
        //   url: '/pages/changeNumber/changeNumber'
        // })
      }
    })
  }, 1000),
  /**
   * 支付
   */
  payMoney:function(){
    console.log(this.data.truePayNumber," this.data.truePayNumber")
    if (this.data.truePayNumber > 1000000){
    wx.showToast({
      title: '输入金额不能大于999999.99',
      icon: 'none',
      duration: 1000
    })
    }else{
    wx.showLoading({
      title: '支付中，请稍后',
    })
    var that = this;
    var couids
    if (that.data.ticketTypes != 5  ) {
      couids = that.data.couid
    } else {
      couids = ""
    }
    var arr={
      shopId: app.common.shopid,                    //商户编号
      useMoney: that.data.PayNumber,                //消费金额
      // payMoney: wx.getStorageSync('paymoney'),      //支付金额
      payMoney: that.data.truePayNumber,      //支付金额
      payRemark: that.data.remarkInfo,                  //付款备注
      shopName: that.data.shopmess.shopname,        //商户名称
      dcode: that.data.dcode,                        //核销的券码
      ticketIds: that.data.ticketIdss,//选择券编号
      ticketType: Number(that.data.ticketTypes),//券类型
      couid: couids
    }
    wx.request({
      url: app.common.url + '/ShopProgramUserPay/pay',
      data:arr,
      header: {
        'sessionId': wx.getStorageSync('3rd_session'),
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      success: function (res) {
        console.log(res,"order")
        if (res.data.success) {
          if(res.data.data==""){   //零交易判断
            that.disCoupon();
            wx.showToast({
              title: '付款成功',
              icon: 'success',
              duration: 1500,
            })
            console.log(that.data.truePayNumber, "that.data.truePayNumber")
            wx.setStorageSync("truePayNumber", that.data.truePayNumber)
            setTimeout(function () {
              wx.navigateTo({
                url: "../../pages/succeed/succeed"
              })
            }, 1000) 
            // that.onShow();
            that.setData({
              PayNumber: "",
              nonPay: "",
              truePayNumber: "",
              backmessa: [],
              ticketIdss: "",
              remarkInfo: "" ,
              ticketids:""
              })
            let pages = getCurrentPages();
            let currPage ; //当前页面
            let prevPage ; //上一个页面
            if (pages.length >= 2) {
              currPage = pages[pages.length - 1]; //当前页面
              prevPage = pages[pages.length - 2]; //上一个页面
            }
            if (prevPage) {
              console.log(prevPage, "prevPage1")
              console.log(prevPage.data, "prevPagedata1")
              prevPage.setData({
                mydata: {
                  PayNumber: "",
                  nonPay: "",
                  truePayNumber: "",
                  counames: [],
                  ticketids: [],
                  remarkInfo:"" ,
                  tickettype:""
                  }
              });
            }
          }else{    // 非零交易
            wx.requestPayment(
              {
                'timeStamp': res.data.data.timeStamp,
                'nonceStr': res.data.data.nonceStr,
                'package': res.data.data.package,
                'signType': res.data.data.signType,
                'paySign': res.data.data.sign,
                'success': function (res) {
                  if (res.errMsg == "requestPayment:ok") { 
                    wx.setStorageSync("truePayNumber", that.data.truePayNumber)             
                    if (that.data.useCoupon) {
                      that.disCoupon();
                    }
                    wx.showToast({
                      title: '付款成功',
                      icon: 'success',
                      duration: 1500,
                    })
                    console.log(that.data.truePayNumber,"that.data.truePayNumber")
                    setTimeout(function () {
                      wx.navigateTo({
                        url: "../../pages/succeed/succeed"
                      })
                    }, 1000) 
                    that.onShow();
                    that.setData({
                      PayNumber: "",
                      nonPay: "",
                      truePayNumber: "",
                      backmessa: "",
                      ticketIdss:"",
                      remarkInfo: "" 
                    })
                    let pages = getCurrentPages();
                    let currPage = null; //当前页面
                    let prevPage = null; //上一个页面
                    if (pages.length >= 2) {
                      currPage = pages[pages.length - 1]; //当前页面
                      prevPage = pages[pages.length - 2]; //上一个页面
                    }
                    if (prevPage) {
                      console.log(prevPage, "prevPage1")
                      prevPage.setData({
                        mydata: {
                          PayNumber: "",
                          nonPay: "",
                          truePayNumber: "",
                          backmessa: "",
                          ticketIdss:"",
                          remarkInfo: "" 
                        }
                      });
                    }
                  } else {
                    wx.showToast({
                      title: '付款失败',
                      icon: 'success',
                      duration: 200,
                    })
                  }

                },
                'fail': function (res) { },
                'complete': function (res) {
                  that.onLoad();
                }
              })
          }
          
        } else {
          var mess = res.data.message;
          wx.showToast({
            title: mess,
            icon: 'none',
            duration: 1500,
          })
        }
      },
      complete: function () {
        setTimeout(function () {
          wx.hideLoading();
        }, 1500)
      }
    })
    }
  },
  /**
   * 支付成功核销券
   */
  disCoupon:function(){
    var that = this;
    var arr = {
      // ticketIds: that.data.payarr.ticketIds,
      // ticketType: that.data.payarr.ticketType,
      ticketIds: that.data.ticketIdss,//选择券编号
      ticketType: Number(that.data.ticketTypes),//券类型
      dcode: that.data.dcode,
      shopId: app.common.shopid,
      shopName: that.data.shopmess.shopname,
      usemoney: that.data.truePayNumber,//实付金额
      consumeMoney: that.data.PayNumber//消费金额
    }
    wx.request({
      url: app.common.url + '/ShopProgramUserPay/updateTicketState',
      data: arr,
      header: {
        'sessionId': wx.getStorageSync('3rd_session'),
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      success: function (res) {
        if (res.data.success) {
      
        } else {
          if (res.data.message =="传入的券id为空" ){

          }else{
          var mess = res.data.message;
          wx.showToast({
            title: mess,
            icon: 'none',
            duration: 1500,
          })
          }
        }

      },
      complete: function () {
        
      }
    })
  },
  //金额
  getGrouPrice: function () {
    console.log(this.data.backmessa,"backmessa")
    var that = this;
    return new Promise(function (resolve, reject) {

      var arr = {
        consumeMoney: Number(that.data.PayNumber),//消费金额
        noDiscountMoney: Number(that.data.nonPay),//不参与优惠金额
        shopId: app.common.shopid,//商家编号
        ticketIds: that.data.ticketIdss,//选择券编号
        ticketType: Number(that.data.ticketTypes)//券类型
      };
      wx.request({
        url: app.common.url + '/ShopProgramUserPay/calculateAmount',
        data: arr,
        header: {
          'sessionId': wx.getStorageSync('3rd_session'),
          'content-type': 'application/x-www-form-urlencoded'
        },
        method: "POST",
        success: function (res) {
          console.log(res.data.message,"金额")
          if (res.data.success==false){
            if (res.data.message == "请输入消费金额！") {
              
            } else if (res.data.message == "请传入使用的优惠券编号"){

            } else if (res.data.message == "团购券不存在") {

            }else if(res.data.message == "优惠券不存在") {
              that.setData({
                PayNumber: "",
                nonPay: "",
                truePayNumber: "",
                backmessa: "",
                ticketIdss:""
              })
            }  else {
              wx.showToast({
                title: res.data.message,
                icon: 'none',
                duration: 1500,
              })
            }
            that.setData({
              truePayNumber: res.data.data
            })
          }else{
            
          
              if (that.data.backmessa == "") {
                that.setData({
                  truePayNumber: that.data.truePayNumber,
                  backmessa: "",
                  ticketIdss: ""
                })
              } else {
                that.setData({
                  truePayNumber: res.data.data
                })
              }
            


            
           
          }
        },
        complete: function () {
          
        }
      })
    })
  },
  /**
   * 保留小数点后两位
   */
  Num: function(obj){

    obj.value = obj.value.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
    obj.value = obj.value.replace(/^\./g, ""); //验证第一个字符是数字
    obj.value = obj.value.replace(/\.{2,}/g, "."); //只保留第一个, 清除多余的
    obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
    obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //只能输入四个小数
    // obj.value = obj.value.replace(/^0\.\d{1,2}$|^[1-9]\d{0,5}\.\d{1,2}$|^[1-9]\d{0,5}$/g, ''); //只能输入四个小数
  },
  // onUnload: function () {//如果页面被卸载时被执行
  // },
  // gotoHomePage: function () {//自定义页面跳转方法
  //   wx.switchTab({
  //     // url: "../../pages/index/index"
  //   })
  // },



  /**
* 生命周期函数--监听页面初次渲染完成
*/
  onReady: function () {
    if (app.globalData.hairbg) {
      wx.setNavigationBarColor({
        frontColor: '#ffffff', //看文档 必须要六位 不能是三位
        backgroundColor: '#FF5E71',
      })

      wx.setTabBarStyle({
        borderStyle: '#000000',
        backgroundColor: '#F7F7FA',
        color: '#7F8389',
        selectedColor: '#FF5E71'
      })
      wx.setTabBarItem({
        index: 0,
        iconPath: 'images/icHome.png',
        selectedIconPath: 'images/icHomeHover01.png'
      });
      wx.setTabBarItem({
        index: 1,
        iconPath: 'images/icOrder.png',
        selectedIconPath: 'images/icOrderHover01.png'
      });
      wx.setTabBarItem({
        index: 2,
        iconPath: 'images/icMine.png',
        selectedIconPath: 'images/icMineHover01.png'
      });
      wx.setBackgroundColor({
        backgroundColor: '#ffffff', // 窗口的背景色为白色
      })
    } else if (app.globalData.educationbg) {
      wx.setNavigationBarColor({
        frontColor: '#ffffff', //看文档 必须要六位 不能是三位
        backgroundColor: '#F1C40F',
      })

      wx.setTabBarStyle({
        // borderStyle: '#dcdcdc',
        backgroundColor: '#F7F7FA',
        color: '#7F8389',
        selectedColor: '#FEBA46'
      })
      wx.setTabBarItem({
        index: 0,
        iconPath: 'images/icHome.png',
        selectedIconPath: 'images/icHomeHover.png'
      });
      wx.setTabBarItem({
        index: 1,
        iconPath: 'images/icOrder.png',
        selectedIconPath: 'images/icOrderHover.png'
      });
      wx.setTabBarItem({
        index: 2,
        iconPath: 'images/icMine.png',
        selectedIconPath: 'images/icMineHover.png'
      });
      wx.setBackgroundColor({
        backgroundColor: '#ffffff', // 窗口的背景色为白色
      })
    } else {
      wx.setNavigationBarColor({
        frontColor: '#ffffff', //看文档 必须要六位 不能是三位
        backgroundColor: '#242424',
      });
      wx.setBackgroundColor({
        backgroundColor: '#242424' // 窗口的背景色为白色
      })

      // wx.setTabBarStyle({
      //   borderStyle: '#f8f8f8',
      //   backgroundColor: '#00000',
      // })
    }
  },
  /**
 * 生命周期函数--监听页面隐藏
 */
  onHide: function () {
    var that = this

    that.setData({
      skinStyle: app.globalData.skin,
      hairbg: app.globalData.hairbg,
      educationbg: app.globalData.educationbg
    })
    if (app.globalData.hairbg) {
      wx.setNavigationBarColor({
        frontColor: '#ffffff', //看文档 必须要六位 不能是三位
        backgroundColor: '#FF5E71',
      })

      wx.setTabBarStyle({
        borderStyle: '#F7F7FA',
        backgroundColor: '#F7F7FA',
        color: '#7F8389',
        selectedColor: '#FF5E71'
      })
      wx.setTabBarItem({
        index: 0,
        iconPath: 'images/icHome.png',
        selectedIconPath: 'images/icHomeHover01.png'
      });
      wx.setTabBarItem({
        index: 1,
        iconPath: 'images/icOrder.png',
        selectedIconPath: 'images/icOrderHover01.png'
      });
      wx.setTabBarItem({
        index: 2,
        iconPath: 'images/icMine.png',
        selectedIconPath: 'images/icMineHover01.png'
      });
      wx.setBackgroundColor({
        backgroundColor: '#ffffff', // 窗口的背景色为白色
      })
    } else if (app.globalData.educationbg) {
      wx.setNavigationBarColor({
        frontColor: '#ffffff', //看文档 必须要六位 不能是三位
        backgroundColor: '#F1C40F',
      })

      wx.setTabBarStyle({
        // borderStyle: '#dcdcdc',
        backgroundColor: '#F7F7FA',
        color: '#7F8389',
        selectedColor: '#FEBA46'
      })
      wx.setTabBarItem({
        index: 0,
        iconPath: 'images/icHome.png',
        selectedIconPath: 'images/icHomeHover.png'
      });
      wx.setTabBarItem({
        index: 1,
        iconPath: 'images/icOrder.png',
        selectedIconPath: 'images/icOrderHover.png'
      });
      wx.setTabBarItem({
        index: 2,
        iconPath: 'images/icMine.png',
        selectedIconPath: 'images/icMineHover.png'
      });
      wx.setBackgroundColor({
        backgroundColor: '#ffffff', // 窗口的背景色为白色
      })
    } else {
      wx.setNavigationBarColor({
        frontColor: '#ffffff', //看文档 必须要六位 不能是三位
        backgroundColor: '#242424',
      });
      wx.setBackgroundColor({
        backgroundColor: '#242424' // 窗口的背景色为白色
      })

      // wx.setTabBarStyle({
      //   borderStyle: '#f8f8f8',
      //   backgroundColor: '#00000',
      // })
    }
  },
  /**
 * 生命周期函数--监听页面卸载
 */
  onUnload: function () {
    if (app.globalData.hairbg) {
      wx.setNavigationBarColor({
        frontColor: '#ffffff', //看文档 必须要六位 不能是三位
        backgroundColor: '#FF5E71',
      })

      wx.setTabBarStyle({
        borderStyle: '#F7F7FA',
        backgroundColor: '#F7F7FA',
        color: '#7F8389',
        selectedColor: '#FF5E71'
      })
      wx.setTabBarItem({
        index: 0,
        iconPath: 'images/icHome.png',
        selectedIconPath: 'images/icHomeHover01.png'
      });
      wx.setTabBarItem({
        index: 1,
        iconPath: 'images/icOrder.png',
        selectedIconPath: 'images/icOrderHover01.png'
      });
      wx.setTabBarItem({
        index: 2,
        iconPath: 'images/icMine.png',
        selectedIconPath: 'images/icMineHover01.png'
      });
      wx.setBackgroundColor({
        backgroundColor: '#ffffff', // 窗口的背景色为白色
      })
    } else if (app.globalData.educationbg) {
      wx.setNavigationBarColor({
        frontColor: '#ffffff', //看文档 必须要六位 不能是三位
        backgroundColor: '#F1C40F',
      })

      wx.setTabBarStyle({
        // borderStyle: '#dcdcdc',
        backgroundColor: '#F7F7FA',
        color: '#7F8389',
        selectedColor: '#FEBA46'
      })
      wx.setTabBarItem({
        index: 0,
        iconPath: 'images/icHome.png',
        selectedIconPath: 'images/icHomeHover.png'
      });
      wx.setTabBarItem({
        index: 1,
        iconPath: 'images/icOrder.png',
        selectedIconPath: 'images/icOrderHover.png'
      });
      wx.setTabBarItem({
        index: 2,
        iconPath: 'images/icMine.png',
        selectedIconPath: 'images/icMineHover.png'
      });
      wx.setBackgroundColor({
        backgroundColor: '#ffffff', // 窗口的背景色为白色
      })
    } else {
      wx.setNavigationBarColor({
        frontColor: '#ffffff', //看文档 必须要六位 不能是三位
        backgroundColor: '#242424',
      });
      wx.setBackgroundColor({
        backgroundColor: '#242424' // 窗口的背景色为白色
      })
      // wx.setTabBarStyle({
      //   borderStyle: '#f8f8f8',
      //   backgroundColor: '#00000',
      // })
    }
  }
})
