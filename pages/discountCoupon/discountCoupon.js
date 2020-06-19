// pages/discountCoupon/discountCoupon.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    discountCoupon:[],
    pageNum: 1,
    nodata: false,
    statetip: "没有更多数据了",
    ishide: false,
    couname:"",
    ticketids:"",
    tickettype:"",
    reloadData: true,
    pagedata:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDatas(this.data.pageNum)
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

      // wx.setTabBarStyle({
      //   borderStyle: '#f8f8f8',
      //   backgroundColor: '#242424',
      // });
      wx.setBackgroundColor({
        backgroundColor: '#242424' // 窗口的背景色为白色
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // onReady: function () {

  // },

  /**
   * 生命周期函数--监听页面显示
   */
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
        backgroundColor: '#242424',
      });

      // wx.setTabBarStyle({
      //   borderStyle: '#f8f8f8',
      //   backgroundColor: '#242424',
      // });
      wx.setBackgroundColor({
        backgroundColor: '#242424' // 窗口的背景色为白色
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  // onHide: function () {

  // },

  /**
   * 生命周期函数--监听页面卸载
   */
  // onUnload: function () {

  // },
  /**
* 下拉刷新
*/
  onPullDownRefresh: function () {

    this.setData({
      pageNum: 1,
      discountCoupon: []
    })
    this.getDatas(this.data.pageNum);
    wx.stopPullDownRefresh();
  },
  /**
   * 上拉加载
   */
  onReachBottom: function () {
    if (this.data.flag) {
      var that = this;
      // 当前页+1
      var pageNumber = that.data.pageNum + 1;
      that.setData({
        pageNum: pageNumber,
      })
      if (pageNumber <= that.data.pageNum) {
        this.setData({
          statetip: "加载中...",
          reloadData: false
        })
        // 请求后台，获取下一页的数据。
        that.getDatas(that.data.pageNum);
      }
    }
  },
  /**
   * 获取数据
   */
  getDatas: function (pagenum) {
    wx.showLoading({
      title: '加载中',
    })
    var that = this;
    var arr = {
      shopid: app.common.shopid,
      pageNumber: pagenum
      // state:2
    };
    wx.request({
      url: app.common.url + "/ShopProgramMy/getTakeCoupon",
      method: "POST",
      header: {
        'sessionId': wx.getStorageSync('3rd_session'),
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: arr,
      success: function (res) {
        if (res.data.data!=""){
            that.setData({
              pagedata: true
            })
        }
        if (res.data.data == -1) {
          that.setData({
            ishide: false,
            nodata: true
            
          })
        } else if (res.data.data.length == 10) {
          that.setData({
            ishide: true,
            flag: true,
            nodata: false,
            statetip: "加载中"
          })
        } else if (res.data.data.length < 10 || res.data.data == -1) {
          that.setData({
            ishide: true,
            nodata: false,
            statetip: "没有更多数据了",
            flag: false
          })
        } else {
          that.setData({
            ishide: true,
            nodata: false
          })
        }
        if (that.data.reloadData) {
          that.setData({
            discountCoupon: res.data.data
          })
        } else {
          that.setData({
            discountCoupon: that.data.discountCoupon.concat(res.data.data)
          })
        }

      },
      complete: function () {
        wx.hideLoading();
      },
      fail: function () {

      }
    })
  },
  /**
 * 去使用
 */
  toUse: function (e) {

    //提示不在有效期内
    if (e.target.dataset.isvalid != 0) {
      //提示不在有时间段
      if (e.target.dataset.isable != 0) {
    console.log(e, "优惠券1")
    console.log(e.target.dataset.coutypes)
    this.data.couname = e.target.dataset.couname
    this.data.ticketids = e.target.dataset.ticketids
    this.data.tickettype = e.target.dataset.tickettype
    wx.setStorageSync('backmess', this.data.couname) 
    // wx.navigateTo({
    //   url: "../../pages/pay/pay" + "?parStr=" + app.common.shopid + "&ucid=" + e.currentTarget.dataset.ucid
    // })
    // if (e.target.dataset.coutype == 4) {
    //   wx.showToast({
    //     title: '券类型不支持',
    //     icon: 'none',
    //     duration: 1000
    //   })
    // } else {
     wx.navigateTo({
       url: '../../pages/shopLists/shopLists?id=' + e.currentTarget.dataset.couname + "&ticketids=" + e.target.dataset.ticketids + "&tickettype=" + e.target.dataset.tickettype + "&ucid=" + e.target.dataset.ucid + "&couid=" + e.target.dataset.couid
    })
    // }
      } else {
        wx.showModal({
          title: '提示',
          content: '该券不在有效时间段内',
          success: function (sm) {
            if (sm.confirm) {
            } else if (sm.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    } else {
      wx.showModal({
        title: '提示',
        content: '该券不在有效期内',
        success: function (sm) {
          if (sm.confirm) {
          } else if (sm.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

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

      // wx.setTabBarStyle({
      //   borderStyle: '#f8f8f8',
      //   backgroundColor: '#242424',
      // });
      wx.setBackgroundColor({
        backgroundColor: '#242424' // 窗口的背景色为白色
      })
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

      // wx.setTabBarStyle({
      //   borderStyle: '#f8f8f8',
      //   backgroundColor: '#242424',
      // })
      wx.setBackgroundColor({
        backgroundColor: '#242424' // 窗口的背景色为白色
      })
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

      // wx.setTabBarStyle({
      //   borderStyle: '#f8f8f8',
      //   backgroundColor: '#242424',
      // });
      wx.setBackgroundColor({
        backgroundColor: '#242424' // 窗口的背景色为白色
      })
    }
  }
})