//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    animationData: {},
    hairbg: false,//美容美发
    educationbg: false,//教育
    skinStyle: ""
  },
  //事件处理函数
  bindViewTap: function() {
    /*wx.navigateTo({
      url: '../logs/logs'
    })*/
  },
  onLoad: function () {
    var that=this
    if (app.globalData.userInfo) {
      that.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (that.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        that.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          that.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
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

      wx.setTabBarStyle({
        borderStyle: '#242424',
        backgroundColor: '#242424',
        color: "#7F8389",
        selectedColor: "#feba45"
      });
    }
  },
  onShow:function(){
    var that=this
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

      wx.setTabBarStyle({
        borderStyle: '#242424',
        backgroundColor: '#242424',
        color: "#7F8389",
        selectedColor: "#feba45"
      });
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    if (e.detail.rawData) {
    app.globalData.userInfo = e.detail.userInfo
    app.common.iv = e.detail.iv;
    app.common.encryptedData = e.detail.encryptedData;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    wx.setStorageSync("nickName", e.detail.userInfo.nickName)
    wx.setStorageSync("avatarUrl", e.detail.userInfo.avatarUrl)
    app.getLaunch()
    }else{
      
    }
  },
  //手机号
  getphone:function(){
    var user = wx.getStorageSync('nickName')
    console.log(user, "user")
    if (user == null || user == "") {
      wx.showModal({
        title: '提示',
        content: '您还没有授权',
        success: function (sm) {
          if (sm.confirm) {
            wx.reLaunch({
              // url: "/pages/mine/mine"
            })
          } else if (sm.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } else {
      wx.navigateTo({
        url: "../../pages/changeNumber/changeNumber?ischeck=true"
      })
    }
  },
  share:function(){
    var user = wx.getStorageSync('nickName')
    console.log(user, "user")
    if (user == null || user == "") {
      wx.showModal({
        title: '提示',
        content: '您还没有授权',
        success: function (sm) {
          if (sm.confirm) {
            wx.reLaunch({
              // url: "/pages/mine/mine"
            })
          } else if (sm.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } else {
      wx.navigateTo({
        url:"../../pages/share/share"
      })
    }
  },
  foonterLink: function (data) {
    wx.switchTab({
      url: data.currentTarget.dataset.url
    })
  },
  /**
   * 订单
   */
  myOrer:function(){
    wx.switchTab({
      url: "../../pages/order/order"
    })
  },
  goorder:function(data){
    wx.setStorageSync('ostatus', data.currentTarget.dataset.ostatus)
    wx.switchTab({
      url: "../../pages/order/order"
    })
  },
  /**
   * 跳转至优惠券
   */
  linkCoupon:function(e){
    var that = this;
    app.getTelphone().then(function (res) {
      if (app.common.havePhone) {
        wx.navigateTo({
          url: e.currentTarget.dataset.url
        })
      }
    })
  },
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

      wx.setTabBarStyle({
        borderStyle: '#242424',
        backgroundColor: '#242424',
        color: "#7F8389",
        selectedColor: "#feba45"
      });
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

      wx.setTabBarStyle({
        borderStyle: '#242424',
        backgroundColor: '#242424',
        color: "#7F8389",
        selectedColor: "#feba45"
      });
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

      wx.setTabBarStyle({
        borderStyle: '#242424',
        backgroundColor: '#242424',
        color: "#7F8389",
        selectedColor: "#feba45"
      });
    }
  }
})
