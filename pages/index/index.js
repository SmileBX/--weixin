const app = getApp()
const request = require('../../utils/request.js')
const util = require('../../utils/util.js')
Page({
  data: {
    phonecall:'',
    shopimg:"/images/default.png",
    shopName:"",
    coutype:[0,5],
    isOnshow:false,
    gouHave: false,
    couHave:false,
    autoplay: true,// 是否自动切换
    interval: 3000, // 自动切换时间间隔
    duration: 500,// 滑动动画时长
    imgUrls: [],
    text:'AMO LA DIVA(深业上城店)',
    shopMap:"深圳市福田区福田区 深业上城小镇L3层S313铺",
    shopTime:"10:00-22:00",
    getCimg:"/images/card.png",
    getCtit:"AMO LA DIVA会员体验次卡",
    phone:"222",
    purchase:[],
    nodata:false,//优惠券
    citylocat: {},
    conponLog:[],
    serveAll:[],
    merchant:[],
    getShopBasicInfo:[],
    servetype:[],
    flag: true,
    daytime: [],
    swiperCurrent: 1,
    indicatorDots: true,
    autoplay: false,
    interval: 2000,
    duration: 1000,
    hairbg: false,//美容美发
    educationbg:false,//教育
    skinStyle: "",
    switchChange:"",
    shopname:'',//商户名
    skintypes:""//皮肤

  },
  onLoad: function (options) {
    var that=this
    that.load();

    that.data.isOnshow=true;
    that.getShopBasicInfo()
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
        borderStyle: '#dcdcdc',
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
      wx.setNavigationBarTitle({
        title: that.data.shopname,
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
      wx.setNavigationBarTitle({
        title: that.data.shopname,
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
      });


      wx.setTabBarStyle({
        borderStyle: '#242424',
        backgroundColor: '#242424',
        color: "#7F8389",
        selectedColor: "#feba45"
      });
      wx.setNavigationBarTitle({
        title: that.data.shopname,
      })
    }
    


  },
  /**
   * 授权
   */
  accredit: function () {
    var that=this;
    wx.openSetting({
      success: (res) => {
        if (res.authSetting["scope.userInfo"]) {////如果用户重新同意了授权登录
          wx.getUserInfo({
            success: function (res) {
              var userInfo = res.userInfo;
              that.setData({
                nickName: userInfo.nickName,
                avatarUrl: userInfo.avatarUrl,
              })
            }
          })
        }
      }, fail: function (res) {

      }
    })
  },
  /**
   * 授权失败重新授权
   */
  reAccredit:function(){
    var that=this;
    wx.showModal({
      title: '提示',
      content: '您点击了拒绝授权,将无法正常显示个人信息,点击确定重新获取授权。',
      cancelText:"拒绝",
      confirmText:"授权",
      confirmColor:"#febb45",
      success: function (res) {
        if (res.confirm) {
          that.accredit()
        } else if (res.cancel) {
          that.reAccredit();
        }
      }
    })
  },
  onShow:function(){
    console.log("show")
    this.getShopBasicInfo()
    if (this.data.isOnshow){
      // this.onLoad();
    }
    this.setData({
      skinStyle: app.globalData.skin,

      // skinStyle:'dark'
    })
    this.onLoad()
  },
  load:function(){

    var that = this;
      // that.getShopMess();
      //获取优惠券图团购券信息，0为优惠券，5为团购券
      for (var i = 0; i < that.data.coutype.length; i++) {
        // that.getCouponDatas(that.data.coutype[i]);
      }
   
  },
  /**
 * 下拉刷新
 */
  onPullDownRefresh() {
    var self = this;
    wx.showLoading({
      title: '玩命加载中',
    })
    setTimeout(() => {
      // 模拟请求数据，并渲染
      this.getShopBasicInfo()
      // 数据成功后，停止下拉刷新
      wx.stopPullDownRefresh();
    }, 1000);
  },
  /**
   * 拨打电话
   */
  // phonecallevent: function (e) {
  //   wx.makePhoneCall({
  //     phoneNumber: this.data.phonecall
  //   })
  // },
  phonecallevent: function (e) {
    console.log(e,"e")
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.tel
    })
  },
  getMap: function (e) {
    console.log(e,"e")
    var arr = e.currentTarget.dataset.lnglat.split(',');
    wx.openLocation({
      latitude: Number(arr[0]),
      longitude: Number(arr[1]),
      scale: 18,
      name: e.currentTarget.dataset.sname,
      address: e.currentTarget.dataset.addr,
   
    })
  },
  /**
 * 生命周期函数--监听页面初次渲染完成
 */
  onReady: function (options) {
    request.getLocaltion().then(() => {
      console.log(options)
      this.setData({
        selectCity: app.common.localResult.city
      })

      // wx.setStorageSync("cityNew", app.common.localResult.city);

      var locat = { lng: app.common.localResult.longitude, lat: app.common.localResult.latitude };
      // wx.setStorageSync("citylocat", locat)
    })
    this.getShopBasicInfo()
    if (wx.getStorageSync("cityName")) {

    } else {
      var arr1 = { "lng": 114.054543, "lat": 22.522909 };  //深圳经纬度
      var arr2 = { "province": "广东省", "city": "深圳市" }; //深圳经纬度
      wx.setStorageSync("citylocat", arr1)
      wx.setStorageSync("cityarea", arr2)
      this.setData({
        citylocat: arr1
      })
    }

    this.setData({
      skinStyle: app.globalData.skin,

      // skinStyle:'dark'
    })
  },

  /**
 * 团购链接
 */
  // goDetail: function (e) {
  //   console.log(e, "e")
  //   wx.navigateTo({
  //     url: '../../pages/purchaseDetails/purchaseDetails?id=' + e.currentTarget.dataset.id
  //   })
  // },
  /**
 * 跳转领取链接
 */
  routerLink: function (e) {
    console.log(e.currentTarget.dataset.id,"e")
    // if (e.currentTarget.dataset.type == 0) {
      wx.navigateTo({
        url: '../../pages/couponDetail/couponDetail?id=' + e.currentTarget.dataset.id
      })
    // } else {
    //   wx.navigateTo({
        // url: '../../pages/grouponDetail/grouponDetail?id=' + e.currentTarget.dataset.id
    //   })
    // }
  },
  /**
   * 团购链接
   */
  goDetail: function (e) {
    console.log(e, "e")
    wx.navigateTo({
      url: '../../pages/purchaseDetails/purchaseDetails?id=' + e.currentTarget.dataset.id
    })
  },

  //首页信息
  getShopBasicInfo: function () {
    // wx.showLoading({
    //   title: '',
    // })
    var that = this;
    var real;
    var arr = {
      // shopid: wx.getStorageSync('shopid'),
      shopid: app.common.shopid,
    };
    wx.request({
      url: app.common.url + "/ShopProgramInfo/getShopBasicInfo.do",
      method: "POST",
      header: {
        'sessionId': wx.getStorageSync('3rd_session'),
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: arr,
      success: function (res) {
        console.log(res.data.data)
          if (res.data.data.cardnumpic == 1) {
            res.data.data.cardnumpic = "../../images/face_4.gif"
          } else if (res.data.data.cardnumpic == 2) {
            res.data.data.cardnumpic = "../../images/face_2.gif"
          } else if (res.data.data.cardnumpic == 3) {
            res.data.data.cardnumpic = "../../images/face_3.gif"
          }
       
         
        var servetype = res.data.data.servetype
        if (servetype != null ) {
          var servetypes = servetype.split(",")
        }
        var daytime = res.data.data.daytime
        if (daytime != null ) {
          var dayTime = daytime.split(",")
        }
        that.setData({
          imgUrls: res.data.data.toppiclist,
          getShopBasicInfo: res.data.data,
          serveAll: res.data.data.goodslist,
          merchant: res.data.data.bottompiclist,
          purchase: res.data.data.coupon2,
          conponLog: res.data.data.coupon1,
          servetype: servetypes,
          daytime: dayTime,
          skintypes: res.data.data.skintypes,
          shopname: res.data.data.shopname
        })
        if (res.data.data.cardnumpic == 1) {
          res.data.data.cardnumpic = "/images/face_4.gif"
        } else if (res.data.data.cardnumpic == 2) {
          res.data.data.cardnumpic = "/images/face_2.gif"
        } else if (res.data.data.cardnumpic == 3) {
          res.data.data.cardnumpic = "/images/face_3.gif"
        }
          app.common.skintypes = that.data.skintypes
        console.log(that.data.skintypes,"that.data.skintypes")
        //切换
        if (app.common.skintypes == 1) {
          real = true
          app.globalData.hairbg = true
          app.globalData.educationbg = false
          app.globalData.skin = "pink"
        } else if (app.common.skintypes == 2) {
          //否则
          real = true
          app.globalData.hairbg = false
          app.globalData.educationbg = true
          app.globalData.skin = "yellow"
        } else {
          //否则
        
          real = true
          app.globalData.hairbg = false
          app.globalData.educationbg = false
          app.globalData.skin = "dark"
        } 
        console.log(app.common.skintypes,"app.common.skintypes")
        //保存信息
        that.setData({
          hairbg: real,
          educationbg: real,
          skinStyle: app.globalData.skin
        })
        //保存到本地
        wx.setStorage({
          key: "skin",
          data: app.globalData.skin
        })
        wx.setStorage({
          key: "hairbg",
          data: app.globalData.hairbg
        })
        wx.setStorage({
          key: "educationbg",
          data: app.globalData.hairbg
        })
        console.log(app.globalData.hairbg)
        console.log("---------------------------")
        if (app.globalData.hairbg) {
          wx.setNavigationBarColor({
            frontColor: '#ffffff', //看文档 必须要六位 不能是三位
            backgroundColor: '#FF5E71',
          })

          wx.setTabBarStyle({
            // borderStyle: '#dcdcdc',
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
          wx.setNavigationBarTitle({
            title: that.data.shopname,
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
          wx.setNavigationBarTitle({
            title: that.data.shopname,
          });
          wx.setBackgroundColor({
            backgroundColor: '#ffffff', // 窗口的背景色为白色
          })
        } else {
          wx.setBackgroundColor({
            backgroundColor: '#242424', // 窗口的背景色为白色
          });

          wx.setNavigationBarColor({
            frontColor: '#ffffff', //看文档 必须要六位 不能是三位
            backgroundColor: '#242424',
          });

          wx.setTabBarStyle({
            borderStyle: '#242424',
            backgroundColor: '#242424',
            color: "#7F8389",
            selectedColor: "#feba45"
          });
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
          wx.setNavigationBarTitle({
            title: that.data.shopname,
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
* 服务介绍链接
*/
  serveDetails: function (e) {
    console.log(e, "e")
    wx.navigateTo({
      url: '../../pages/serveDetails/serveDetails?id=' + e.currentTarget.dataset.id
    })
  },
  onShareAppMessage: function () {
    var that=this;
    return {
      title: "",
      path: '/pages/index/index'
    }
  },
  // 跳转详情页
  goodDetail: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '../../pages/serveDetails/serveDetails?id=' + e.currentTarget.dataset.id
    })
  },
  pay:function(){
    var user = wx.getStorageSync('nickName')
    console.log(user,"user")
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
      wx.navigateTo({
        url: "/pages/pay/pay"
      })
    }
  },
  tag:function(){
    wx.navigateToMiniProgram({
      appId: 'wxedfcee01239748f9',
      path: '',
      extraData: {
        foo: 'bar'
      },
      envVersion: 'trial',
      success(res) {
        // 打开成功
      }
    })
  },
  imgYu: function (event) {
    console.log(event, "event")
    var src = event.currentTarget.dataset.src;//获取dataloa-src
     var imgList = event.currentTarget.dataset.list;//获取data-list
    // var _this = this;
    // var imgBox = [];
    // var imgList = this.data.merchant;
    // for (var i = 0; i < imgList.length; i++) {
    //   imgBox.push(imgList[i].picusr);
    // }
    // _this.setData({
    //   imgBox: _this.data.imgBox.concat(imgBox)
    // })
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })

    //图片预览
  },
  /**
 * 生命周期函数--监听页面隐藏
 */
  onHide: function () {
    var that = this
    that.setData({
      skinStyle: app.globalData.skin,

      // skinStyle:'dark'
    })

    if (app.globalData.hairbg) {
      wx.setNavigationBarColor({
        frontColor: '#ffffff', //看文档 必须要六位 不能是三位
        backgroundColor: '#FF5E71',
      })

      wx.setTabBarStyle({
        borderStyle: '#dcdcdc',
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
      });

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
  /**
 * 生命周期函数--监听页面卸载
 */
  onUnload: function () {
    var that = this
    that.setData({
      skinStyle: app.globalData.skin,

      // skinStyle:'dark'
    })

    if (app.globalData.hairbg) {
      wx.setNavigationBarColor({
        frontColor: '#ffffff', //看文档 必须要六位 不能是三位
        backgroundColor: '#FF5E71',
      })

      wx.setTabBarStyle({
        borderStyle: '#dcdcdc',
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
      });

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

})
