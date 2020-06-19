const app = getApp()
Page({
  data: {
    items: [
      { name: '1', value: '预约不上'},
      { name: '2', value: '商家营业但不接待'},
      { name: '3', value: '用现金/刷卡/微信/支付宝支付了团购价'},
      { name: '4', value: '店里活动更优惠'},
      { name: '5', value: '商家停业/装修/转让'},
      { name: '6', value: '去过了，不太满意'},
      { name: '7', value: '朋友/网上评价不好'},
      { name: '8', value: '买多了/买错了'},
      { name: '9', value: '计划有变，没时间消费'},
      { name: '10', value: '后悔了，不想要了'},
      { name: '11', value: '商家说可以直接以团购价到店消费'},
      { name: '12', value: '联系不上商家'},
      { name: '13', value: '其他'}
    ],
    reasonLen:1
  },
 
  onLoad: function (res) {
    this.setData({
      orderid: res.orderid,
      skinStyle: app.globalData.skin,
      hairbg: app.globalData.hairbg,
      educationbg: app.globalData.educationbg
    })
    this.getDatas(this.data.orderid);

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
  checkboxChange: function (e) {
    this.setData({
      reasonLen: e.detail.value.length
    })
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
  getDatas: function (id) {
    wx.showLoading({
      title: '加载中',
    })
    var that = this;
    wx.request({
      url: app.common.url + '/ShopProgramMy/getRefundSalesOrderDetail',
      data: {
        orderid: id
      },
      header: {
        'sessionId': wx.getStorageSync('3rd_session'),
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      success: function (res) {
        if (res.data.success) {
          that.setData({
            orderLog:res.data.data
          })
        } else {}
      },
      complete: function () {
        wx.hideLoading();
      }
    })
  },
  /**
   * 退款
   */
  refund: function (e) {
    var that = this;
    console.log(that.data.orderid)
    if (that.data.reasonLen == 0 || that.data.reasonLen>3){
      wx.showToast({
        title: '退款原因至少选择一项,最多选三项',
        icon: 'none',
        duration: 1500,
      })
      return;
    }
    wx.showModal({
      title: '提示',
      content: '确定要退款吗？',
      success: function (res) {
        if (res.confirm) {
          //console.log('用户点击确定')
          that.refundDetail();
        } else if (res.cancel) {
          //console.log('用户点击取消')
        }
      }
    })
  },
  refundDetail:function(){
    var that=this;
    wx.showLoading({
      title: '退款中',
    })
    wx.request({
      url: app.common.url + "/ShopProgramMy/refundSalesOrder",
      method: "POST",
      header: {
        'sessionId': app.common.sessionId,
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        shopid: app.common.shopid,
        orderid: that.data.orderid
      },
      success: function (res) {
        if (res.data.success) {
          wx.hideLoading();
          wx.showToast({
            title: '退款成功',
            icon: 'success',
            duration: 1500,
          })
          setTimeout(function () {
            wx.setStorageSync('ostatus', 2);
            wx.navigateBack({
              delta: 1
            })
          }, 1500)
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

      },
      fail: function () {

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
