const app = getApp()
Page({
  data: {
    titles: [
      { "orderName": "全部订单", "act": "" },
      { "orderName": "待支付", "act": 1 },
      { "orderName": "待使用", "act": 2 },
      { "orderName": "已退款", "act": 4 },
      { "orderName": "已过期", "act": 5 }
    ],

    orderlog: [],
    active: "",
    ostatus: "",
    nodata: true,
    pageNum: 1,
    coutype: 0,
    totalPage: 1,
    ishide: false,
    pagedata: false,
    pagesdata:false,
    data1:"",
    statetip: "没有更多数据了",
    flag: true,
    reloadData: true,
    ysje:"",
    delBtnWidth: 180,//删除按钮宽度单位（rpx）
    preventRepeatReuqueat: false,//是否是最后一页
    isLastPage: false,//是否是最后一页
    hairbg: false,//美容美发
    educationbg: false,//教育
    skinStyle: "",
    switchChange: ""
  },
  onLoad: function (options) {
    console.log("options")
    // ostatus
    var that = this;
    if (wx.getStorageSync('ostatus')) {
      that.setData({
        orderlog: [],
        pageNum: 1,
        active: wx.getStorageSync('ostatus'),
        ostatus: wx.getStorageSync('ostatus')
      })
    } else {
      that.setData({
        active: "",
        ostatus: "",
      })
    }
    // 页面初始化 options为页面跳转所带来的参数
    that.initEleWidth();
    that.getDatas(that.data.pageNum, that.data.ostatus);
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
        borderStyle: '#dcdcdc',
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
      wx.setBackgroundColor({
        backgroundColor: '#242424' // 窗口的背景色为白色
      })

      wx.setNavigationBarColor({
        frontColor: '#ffffff', //看文档 必须要六位 不能是三位
        backgroundColor: '#242424',
      })

      wx.setTabBarStyle({
        borderStyle: '#242424',
        backgroundColor: '#242424',
        color: "#7F8389",
        selectedColor: "#feba45"
      });
    }
  },
  onShow: function (e) {
    console.log("onShow")
    var val = app.searchWord;
    console.log(app.searchWord,"app.searchWord")
    var that = this;
    if (wx.getStorageSync('ostatus')) {
      that.setData({
        orderlog: [],
        pageNum: 1,
        active: wx.getStorageSync('ostatus'),
        ostatus: wx.getStorageSync('ostatus')
      })
    } else {
      that.setData({
        active: "",
        ostatus: "",
      })
    }
    that.getDatas(that.data.pageNum, that.data.ostatus);
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
        borderStyle: '#dcdcdc',
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
      })

      wx.setTabBarStyle({
        borderStyle: '#242424',
        backgroundColor: '#242424',
        color: "#7F8389",
        selectedColor: "#feba45"
      });
      wx.setBackgroundColor({
        backgroundColor: '#242424', // 窗口的背景色为白色
      })

    }
  },
  /**
   * 改变状态
   */
  chooseAct: function (data) {
    this.setData({
      active: data.currentTarget.dataset.act,
      pageNum: 1,
      ostatus: data.currentTarget.dataset.act,
      ishide: false,
      orderlog: []
    })
    wx.setStorageSync('ostatus', this.data.ostatus);
    this.getDatas(this.data.pageNum, this.data.ostatus);
  },
  /**
  * 下拉刷新
  */
  onPullDownRefresh: function () {
    console.log("下拉")
    this.setData({
      orderlog: []
    })
    this.getDatas(this.data.pageNum, this.data.ostatus);
    wx.stopPullDownRefresh()
  },

  /**
   * 上拉加载
   */
  onReachBottom: function () {
    var that = this;
    if (that.data.flag) {
      // 当前页+1
      var pageNumber = that.data.pageNum + 1;
      that.setData({
        pageNum: pageNumber,
      })
      if (pageNumber <= that.data.pageNum) {
        that.setData({
          statetip: "加载中...",
          reloadData: false
        })
        // 请求后台，获取下一页的数据。
        that.getDatasDetail(that.data.pageNum, that.data.ostatus);
      }
    }
  },
  /**
   * 获取数据
   */
  getDatas: function (pagenum, ostatus) {

    var that = this;
    that.setData({
      ishide: false
    })
    app.getTelphone("order").then(function (res) {
      if (app.common.havePhone) {
        that.getDatasDetail(that.data.pageNum, that.data.ostatus);
      }
    })
  },
  getDatasDetail: function (pagenum, ostatus) {

    // wx.setStorageSync('ostatus', "");
    // wx.showLoading({
    //   title: '加载中',
    // })
    var that = this;
    var arr = {
      shopid: app.common.shopid,
      ostatus: ostatus,
      pageNumber: pagenum
      // pageSize: 10
    };
    wx.request({
      url: app.common.url + "/ShopProgramMy/getMySaleOrder",
      method: "POST",
      header: {
        'sessionId': wx.getStorageSync('3rd_session'),
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: arr,
      success: function (res) {
        if (that.orderlog!=""){
          that.setData({
            pagedata:true,
            pagesdata:true
          })
        }
        console.log(res.data.data.length,"res.data.data.length")
        if (res.data.data == "") {
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
        } else if (res.data.data.length < 10  ) {
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
        console.log(res.data.data,"res.data.data1 ")
        console.log(res.data.data.usemoney, res.data.data.favoredmoney,"55")
        if (that.data.reloadData==true) {
          that.setData({
            orderlog: res.data.data,
            data1: res.data.data1 ,
            ysje: "" 
          })
        } else if (that.data.reloadData==false){
          if (res.data.data.length!=0){
            that.setData({
              orderlog: that.data.orderlog.concat(res.data.data),
            })
          }else{
            that.setData({
              ishide: true,
              nodata: false,
              statetip: "没有更多数据了",
              flag: false
            })
          }
      
          // if (res.data.data.length < 10) { //如果剩下评论数 小于10表示数据加载完了
          //   console.log('已经加载完了')
          //   that.setData({
          //     // isShowLoadmore: false, //隐藏正在加载
          //     statetip: false //显示暂无数据
          //   })
          // }
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
   * 删除券
   */
  deleteCon: function (e) {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定要删除吗？',
      success: function (res) {
        if (res.confirm) {
          wx.showLoading({
            title: '删除中',
          })
          wx.request({
            url: app.common.url + "/ShopProgramMy/remSalesOrder",
            method: "POST",
            header: {
              'sessionId': app.common.sessionId,
              'content-type': 'application/x-www-form-urlencoded'
            },
            data: {
              id: e.currentTarget.dataset.id
            },
            success: function (res) {
              if (res.data.success) {
                wx.hideLoading();
                wx.showToast({
                  title: '删除成功',
                  icon: 'success',
                  duration: 1500,
                })
                setTimeout(function () {
                  that.setData({
                    pageNum: 1,
                    orderlog: []
                  })
                  that.getDatas(that.data.pageNum, that.data.ostatus);
                }, 1500)
              }

            },
            complete: function () { },
            fail: function () { }
          })
        } else if (res.cancel) {

        }
      }
    })

  },
  /**
   * 退款
   */
  refund: function (e) {
    wx.navigateTo({
      url: "/pages/refund/refund" + "?orderid=" + e.currentTarget.dataset.orderid
    })
  },
  /**
  * 去消费
  */
  consume: function (e) {
    //提示不在有效期内
    if (e.target.dataset.isvalid!=0){
      //提示不在有时间段
      if (e.target.dataset.isable != 0){
        console.log(e.target.dataset.ucid, "3")
        console.log(e, "优惠券1")
        console.log(e.target.dataset.couname)
        this.data.couname = e.target.dataset.couname
        this.data.ticketids = e.target.dataset.ticketids
        this.data.tickettype = e.target.dataset.tickettype
        wx.setStorageSync('backmess', this.data.couname)
        wx.navigateTo({
          url: '../../pages/shopLists/shopLists?id=' + e.currentTarget.dataset.couname + "&ticketids=" + e.target.dataset.ticketids + "&tickettype=" + e.target.dataset.tickettype + "&ucid=" + e.target.dataset.ucid + "&couid=" + e.target.dataset.couid
        })
      }else{
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
    }else{
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
   * 去支付
   */
  pay: function (e) {
    wx.showLoading({
      title: '支付中，请稍后',
    })
    var that = this;
    wx.request({
      url: app.common.url + '/ShopProgramMy/orderByCoupon',
      data: {
        orderid: e.currentTarget.dataset.id,
      },
      header: {
        'sessionId': wx.getStorageSync('3rd_session'),
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      success: function (res) {
        if (res.data.success) {
          wx.requestPayment(
            {
              'timeStamp': res.data.data.timeStamp,
              'nonceStr': res.data.data.nonceStr,
              'package': res.data.data.package,
              'signType': res.data.data.signType,
              'paySign': res.data.data.sign,
              'success': function (res) {
                wx.showToast({
                  title: '支付成功',
                  icon: 'success',
                  duration: 1500,
                })
              },
              'fail': function (res) {
                wx.showToast({
                  title: '支付失败',
                  icon: 'none',
                  duration: 1500,
                })
              },
              'complete': function (res) {
                that.getDatas(that.data.pageNum, that.data.ostatus);
              }
            })
        } else {
          wx.showToast({
            title: res.data.message,
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
  },
  /**
   * 跳转团购订单详情
   */
  linkGrouDetail: function (e) {
    console.log(e)
    var orderlogs = e.currentTarget.dataset.ostatus

    if (orderlogs!=1){
          wx.navigateTo({
            url: '/pages/grouDetail/grouDetail?id=' + e.currentTarget.dataset.id
          })
    }
 
  },
  /**
   * 跳转团购订单详情
   */
  linkPayDetail: function (e) {
    wx.navigateTo({
      url: '/pages/orderDetail/orderDetail?id=' + e.currentTarget.dataset.id
    })
  },
  touchS: function (e) {
    console.log(e,"七点")
    if (e.touches.length == 1) {
      this.setData({
        //设置触摸起始点水平方向位置
        startX: e.touches[0].clientX
      });
    }
  },
  touchM: function (e) {
    if (e.touches.length == 1) {
      //手指移动时水平方向位置
      var moveX = e.touches[0].clientX;
      //手指起始点位置与移动期间的差值
      var disX = this.data.startX - moveX;
      var delBtnWidth = this.data.delBtnWidth;
      var txtStyle = "";
      if (disX == 0 || disX < 0) {//如果移动距离小于等于0，文本层位置不变
        txtStyle = "left:0px";
      } else if (disX > 0) {//移动距离大于0，文本层left值等于手指移动距离
        txtStyle = "left:-" + disX + "px";
        if (disX >= delBtnWidth) {
          //控制手指移动距离最大值为删除按钮的宽度
          txtStyle = "left:-" + delBtnWidth + "px";
        }
      }
      //获取手指触摸的是哪一项
      var index = e.currentTarget.dataset.index;
      var orderlog = this.data.orderlog;
      if (index >= 0) {
        orderlog[index].txtStyle = txtStyle;
        //更新列表的状态
        this.setData({
          orderlog: this.data.orderlog
        });
      }
    }
  },
  touchE: function (e) {
    if (e.changedTouches.length == 1) {
      //手指移动结束后水平位置
      var endX = e.changedTouches[0].clientX;
      //触摸开始与结束，手指移动的距离
      var disX = this.data.startX - endX;
      var delBtnWidth = this.data.delBtnWidth;
      //如果距离小于删除按钮的1/2，不显示删除按钮
      var txtStyle = disX > delBtnWidth / 2 ? "left:-" + delBtnWidth + "px" : "left:0px";
      //获取手指触摸的是哪一项
      var index = e.currentTarget.dataset.index;
      var orderlog = this.data.orderlog;
      console.log(e);
      if (index >= 0) {
        orderlog[index].txtStyle = txtStyle;
        //更新列表的状态
        this.setData({
          orderlog: this.data.orderlog
        });
      }
    }
  },
  //获取元素自适应后的实际宽度
  getEleWidth: function (w) {
    var real = 0;
    try {
      var res = wx.getSystemInfoSync().windowWidth;
      var scale = (750 / 2) / (w / 2);//以宽度750px设计稿做宽度的自适应
      // console.log(scale);
      real = Math.floor(res / scale);
      return real;
    } catch (e) {
      return false;
      // Do something when catch error
    }
  },
  initEleWidth: function () {
    var delBtnWidth = this.getEleWidth(this.data.delBtnWidth);
    this.setData({
      delBtnWidth: delBtnWidth
    });
  },
  //点击删除按钮事件
  delItem: function (e) {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定要删除吗？',
      success: function (res) {
        if (res.confirm) {
          wx.showLoading({
            title: '删除中',
          })
          wx.request({
            url: app.common.url + "/ShopProgramMy/remSalesOrder",
            method: "POST",
            header: {
              'sessionId': app.common.sessionId,
              'content-type': 'application/x-www-form-urlencoded'
            },
            data: {
              id: e.currentTarget.dataset.id
            },
            success: function (res) {
              if (res.data.success) {
                wx.hideLoading();
                wx.showToast({
                  title: '删除成功',
                  icon: 'success',
                  duration: 1500,
                })
                setTimeout(function () {
                  that.setData({
                    pageNum: 1,
                    orderlog: []
                  })
                  that.getDatas(that.data.pageNum, that.data.ostatus);
                }, 1500)
              }

            },
            complete: function () { },
            fail: function () { }
          })
        } else if (res.cancel) {

        }
      }
    })
    //获取列表中要删除项的下标
  //   var index = e.target.dataset.index;
  //   var liorderlogst = this.data.orderlog;
  //   //移除列表中下标为index的项
  //   list.splice(index, 1);
  //   //更新列表的状态
  //   this.setData({
  //     orderlog: this.data.orderlog
  //   });
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
      })

      wx.setTabBarStyle({
        borderStyle: '#242424',
        backgroundColor: '#242424',
        color: "#7F8389",
        selectedColor: "#feba45"
      });
      wx.setBackgroundColor({
        backgroundColor: '#242424', // 窗口的背景色为白色
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
      wx.setBackgroundColor({
        backgroundColor: '#242424', // 窗口的背景色为白色
      })

      wx.setNavigationBarColor({
        frontColor: '#ffffff', //看文档 必须要六位 不能是三位
        backgroundColor: '#242424',
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
