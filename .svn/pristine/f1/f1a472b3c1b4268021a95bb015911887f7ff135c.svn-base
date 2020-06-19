// pages/succeed/succeed.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    paytime:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var pages = getCurrentPages();
    var Page = pages[pages.length - 1];//当前页
    var prevPage = pages[pages.length - 2];  //上一个页面
    var info = prevPage.data //取上页data里的数据也可以修改
    console.log(prevPage,"prevPage")
    prevPage.setData({  
      mydata: {
        PayNumber: "",
        nonPay: "",
        truePayNumber: "",
        counames: [],
        ticketids: [],
        remarkInfo: "",
        tickettype: ""
      }
    })//设置数据
    console.log(options)
    this.setData({
      paytime: wx.getStorageSync("truePayNumber"),
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
        backgroundColor: '#000000',
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
  onShow: function () {
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
        backgroundColor: '#000000',
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
  //回到订单
  consum:function(){
    wx.reLaunch({
      url: "/pages/order/order"
    })
  },
    //首页
  switchTabss: function () {
    wx.setStorageSync('ostatus', "");
    wx.reLaunch({
      url: '/pages/index/index?id=' + app.common.shopid
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
      wx.setBackgroundColor({
        backgroundColor: '#ffffff', // 窗口的背景色为白色
      })
      wx.setTabBarItem({
        index: 2,
        iconPath: 'images/icMine.png',
        selectedIconPath: 'images/icMineHover.png'
      });
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