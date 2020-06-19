const app=getApp()
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: {},
    hasUserInfo: false,
    nickName: "",
    serveDetails: {},
    nodata: true,
    picAll:[],
    likelis: {},
    likelist: {},
    serveconImg: [],
    goodsid: ''
  },
  onLoad: function (option) {
    // 获取接收到的id值
    var getId = option.id;
    var goodsid = option.id;
    // 让接收到的id值传递到data:{}里面
    this.setData({
      currentId: getId,
      goodsid: goodsid,
      skinStyle: app.globalData.skin,
      hairbg: app.globalData.hairbg,
      educationbg: app.globalData.educationbg
    });
    // 读取所有的文章列表点赞缓存状态
    var cache = wx.getStorageSync('cache_key');
    // 如果缓存状态存在
    if (cache) {
      // 拿到所有缓存状态中的1个
      var currentCache = cache[getId];
      // 把拿到的缓存状态中的1个赋值给data中的collection，如果当前文章没有缓存状态，currentCache 的值就是 false，如果当前文章的缓存存在，那么 currentCache 就是有值的，有值的说明 currentCache 的值是 true
      this.setData({
        collection: currentCache
      })
    } else {
      // 如果所有的缓存状态都不存在 就让不存在的缓存存在
      var cache = {};
      // 既然所有的缓存都不存在，那么当前这个文章点赞的缓存也不存在，我们可以把当前这个文章点赞的缓存值设置为 false
      cache[getId] = false;
      // 把设置的当前文章点赞放在整体的缓存中
      wx.setStorageSync('cache_key', cache);

      // 查看是否授权
      wx.getSetting({
        success(res) {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            // 必须是在用户已经授权的情况下调用
            wx.getUserInfo({
              success: function (res) {
                var userInfo = res.userInfo
                var nickName = userInfo.nickName
                var avatarUrl = userInfo.avatarUrl
                var gender = userInfo.gender //性别 0：未知、1：男、2：女
                var province = userInfo.province
                var city = userInfo.city
                var country = userInfo.country
              }
            })
          }
        }
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
    }
    this.getGoodsInfo()
    this.addViewLog()
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
  getUserInfo(e) {
    console.log(e.detail.userInfo)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    })
    wx.setStorageSync("nickName", e.detail.userInfo.nickName)
    wx.setStorageSync("avatarUrl", e.detail.userInfo.avatarUrl)
    console.log(e.detail.userInfo.nickName)
  },
  // 点击图片的点赞事件  这里使用的是同步的方式
  toCollect: function (event) {
    // 获取缓存，得到当前文章是否被点赞
    var cache = wx.getStorageSync('cache_key');
    // 获取当前文章是否被点赞的缓存
    var currentCache = cache[this.data.currentId];
    // 取反，点赞的变成未点赞 未点赞的变成点赞
    currentCache = !currentCache;
    // 更新cache中的对应的1个的缓存值，使其等于当前取反的缓存值
    cache[this.data.currentId] = currentCache;
    // 调用 showModal方法
    this.showModal(cache, currentCache);
  },
  showModal: function (cache, currentCache) {
    var user = wx.getStorageSync('nickName')
    var avatarUrl = wx.getStorageSync('avatarUrl')
    // console.log(user)
    // console.log(avatarUrl)
    var that = this;
    if (user == null || user == "") {
      wx.showModal({
        title: '提示',
        content: '您还没有授权',
        success: function (sm) {
          if (sm.confirm) {
            wx.reLaunch({
              url: "/pages/mine/mine"
            })
          } else if (sm.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } else {
      var arr = {
        cid: that.data.goodsid,
        nickname: wx.getStorageSync('nickName'),
        picurl: wx.getStorageSync('avatarUrl'),
        wxopenid: wx.getStorageSync('openid')
      };
      wx.request({
        url: app.common.url + "/ShopProgramInfo/updateLikeLog.do",
        method: "Post",
        header: {
          'sessionId': wx.getStorageSync('3rd_session'),
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: arr,
        success: function (res) {
          console.log(res)
          // that.setData({
          //   nodata:false
          // })
          // wx.showModal({
          //   title: "点赞",
          //   content: currentCache ? "要点赞吗？" : "要取消点赞吗？",
          //   showCancel: "true",
          //   cancelText: "取消",
          //   cancelColor: "#666",
          //   confirmText: "确定",
          //   confirmColor: "#222",
          //   success: function (res) {
          //     if (res.confirm) {
          //       // 重新设置缓存
          //       wx.setStorageSync('cache_key', cache);
          //       // 更新数据绑定,从而切换图片
          //       that.setData({
          //         collection: currentCache,
          //         nickName: user,
          //         avatarUrl: avatarUrl
          //       })
          //     }
          //   }
          // })
          that.getLikeViewNums();

        },
        complete: function () {
          that.getLikeViewNums();
        },
        fail: function () {

        }
      })
    }
  },
  //商品详情
  getGoodsInfo: function () {
    var that = this;
    var arr = {
      goodsid: that.data.goodsid
      // goodsid:69
    }
    wx.request({
      url: app.common.url + '/ShopProgramInfo/getGoodsInfo.do',
      data: arr,
      header: {
        'sessionId': wx.getStorageSync('3rd_session'),
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      success: function (res) {
        var picurl = res.data.data.picusr
        if (picurl != null || picurl != '') {
          var picAll = picurl.split(",")
        }
        console.log(picAll,"picAll")
        console.log(res.data.data.picusr, "22")
        that.setData({
          serveDetails: res.data.data,
          picAll: picAll

        })
      },
      complete: function () {
        // wx.hideLoading();
      }
    })

  },
  //新增商品浏览日志
  addViewLog: function () {
    var that = this
    var arr = {
      cid: that.data.goodsid
    };
    wx.request({
      url: app.common.url + "/ShopProgramInfo/addViewLog.do",
      method: "Post",
      header: {
        'sessionId': wx.getStorageSync('3rd_session'),
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: arr,
      success: function (res) {
        that.getLikeViewNums();
        console.log(res)
      },
      complete: function () {

      },
      fail: function () {

      }
    })
  },
  //商品浏览点赞数
  getLikeViewNums: function () {
    var that = this
    var arr = {
      goodsid: that.data.goodsid,
      wxopenid: wx.getStorageSync('openid')
    };
    wx.request({
      url: app.common.url + "/ShopProgramInfo/getLikeViewNums.do",
      method: "Post",
      header: {
        'sessionId': wx.getStorageSync('3rd_session'),
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: arr,
      success: function (res) {
        console.log(res.data.data.likelist, "33")
        if (res.data.data.likelist!=null){
          that.setData({
            likelis: res.data.data,
            likelist: res.data.data.likelist,
            nodata:false
          })
        }else{
          that.setData({
            nodata:true
          })
        }
       
      },
      complete: function () {

      },
      fail: function () {

      }
    })
  },
//首页
  home: function () {
    wx.switchTab({
      url: '../index/index'
    })
  },
  //联系商家
  call: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.id
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
