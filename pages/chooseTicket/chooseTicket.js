const app = getApp()
Page({
  data: {
    act: 4,
    isup: true,
    coulog: [],
    active: "",
    dcode: [],
    ostatus: "",
    nodata: false,
    pageNum: 1,
    coutype: 4,
    ishide: false,
    statetip: "没有更多数据了",
    flag: true,
    reloadData: true,
    state: "",
    grouostatus: 2,
    chooseText: "确定",
    payarr: {},
    islen: 0,
    coumess: {},
    chooseCouError: true,
    couname:"",
    counames:"",
    grouplen:"",
    text:[],
    reasonLen: 1,
    ticketids:"",
    tickettype:"",
    truePayNumber:"",
    coutypes:"",
    nonPay:"",
    remarkInfo:"",
    aa: "",
    backmessa:"",
    haveCard: true,
    couid:""
  },

  onLoad: function (options) {
    console.log(options,"jin")
    var that =this
    that.setData({
      truePayNumber:options.id,
      nonPay: options.nonPay,
      remarkInfo: options.remarkInfo,
      backmessa: options.backmessa,
      dcode:options.dcode,
      ticketids: options.ticketids,
      tickettype: options.tickettype,
      counames: options.backmessa,
      couid: options.couid,
      skinStyle: app.globalData.skin,
      hairbg: app.globalData.hairbg,
      educationbg: app.globalData.educationbg
    })
    console.log(that.data.truePayNumber,"qian")

        let pages = getCurrentPages();
        let currPage = null; //当前页面
        let prevPage = null; //上一个页面
        if (pages.length >= 2) {
          currPage = pages[pages.length - 1]; //当前页面
          prevPage = pages[pages.length - 2]; //上一个页面
        }
        if (prevPage) {
          var ticketids11 = [];
          if (that.data.ticketids != "" && that.data.ticketids != null && (typeof that.data.ticketids == 'string') && that.data.ticketids.constructor == String) {
            for (var i = 0; i < that.data.ticketids.split(',').length; i++) {
              ticketids11.push(that.data.ticketids.split(',')[i])
            }
          } else {
            ticketids11 = that.data.ticketids;
          }
          console.log(prevPage, "prevPage1")
          prevPage.setData({
            mydata: {
              counames: that.data.backmessa,
              ticketids: ticketids11,
              tickettype: that.data.tickettype,
              truePayNumber: that.data.truePayNumber,
              nonPay: that.data.nonPay,
              remarkInfo: that.data.remarkInfo,
              ucid: that.data.dcode,
              couid: that.data.couid
            }
          });
        }


    this.getCouDatas(this.data.pageNum, this.data.coutype)

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
      wx.setBackgroundColor({
        backgroundColor: '#242424', // 窗口的背景色为白色
      });

      wx.setNavigationBarColor({
        frontColor: '#ffffff', //看文档 必须要六位 不能是三位
        backgroundColor: '#242424',
      });

      // wx.setTabBarStyle({
      //   borderStyle: '#f8f8f8',
      //   backgroundColor: '#242424',
      // })
    }
  },
  onShow: function () {
    // this.data.payarr = wx.getStorageSync('payarr');
    this.getCouDatas(this.data.pageNum, this.data.coutype)
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
      wx.setBackgroundColor({
        backgroundColor: '#242424', // 窗口的背景色为白色
      });

      wx.setNavigationBarColor({
        frontColor: '#ffffff', //看文档 必须要六位 不能是三位
        backgroundColor: '#242424',
      });

      // wx.setTabBarStyle({
      //   borderStyle: '#f8f8f8',
      //   backgroundColor: '#242424',
      // })
    }
  },
  typeChange: function (data) {
    var active = data.currentTarget.dataset.act;
    var that = this;
    if (active == 5) {  //团购
      that.setData({//把选中值放入判断值
        act: active,
        pageNum: 1,
        goulog: [],
        coulog: [],
        coutype: 5
      })
    } else if (active == 4) {  //优惠
      that.setData({//把选中值放入判断值
        act: active,
        goulog: [],
        coulog: [],
        pageNum: 1,
        coutype: 4
      })
    }
    this.getCouDatas(this.data.pageNum, this.data.coutype);
    this.data.payarr.ticketType = active;
    wx.setStorageSync('payarr', this.data.payarr);  //12
    console.log(this.data.payarr, "pay")
  },
  /**
 * 下拉刷新
 */
  onPullDownRefresh: function () {
    // this.setData({
    //   pageNum: 1,
    //   coulog: [],
    //   goulog: [],
    // })
    // this.getCouDatas(this.data.pageNum, this.data.coutype);
    // wx.stopPullDownRefresh();
    var self = this;
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(() => {
      // 模拟请求数据，并渲染
      this.getCouDatas(this.data.pageNum, this.data.coutype);
      // 数据成功后，停止下拉刷新
      wx.stopPullDownRefresh();
    }, 1000);
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
          statetip: "加载中..."
        })
        this.setData({
          reloadData: false,
        })
        // 请求后台，获取下一页的数据。
        this.getCouDatas(this.data.pageNum, this.data.coutype);
      }
    }
  },
  /**
 * 选择使用团购券
 */
  useGrou: function (e) {

    if (this.data.tickettype == 5) {


    console.log(this.data.dcode, "ticketids")
    console.log(this.data.text.length, "33")
    console.log(this.data.ticketids, "33")
    console.log(this.data.islen, "length")
    if (this.data.islen == 0) {
      wx.showToast({
        title: "请选择团购券",
        icon: 'none',
        duration: 1500,
      })
    } else {

      wx.setStorageSync('hasCoupon', true);  //返回的信息

      let pages = getCurrentPages();
      let currPage = null; //当前页面
      let prevPage = null; //上一个页面

      if (pages.length >= 2) {
        currPage = pages[pages.length - 1]; //当前页面
        prevPage = pages[pages.length - 2]; //上一个页面
      }
      if (prevPage) {
        var ticketids11 = [];
        // if (null != this.data.ticketids && ("") != this.data.ticketids){
        //   for (var i = 0; i < this.data.ticketids.split(",").length; i++){
        //     ticketids.concat().this.data.ticketids.split(",")[i];
        //   }
        // }
        if (this.data.ticketids != "" && this.data.ticketids != null && (typeof this.data.ticketids == 'string') && this.data.ticketids.constructor == String) {
          for (var i = 0; i < this.data.ticketids.split(',').length; i++){
            ticketids11.push(this.data.ticketids.split(',')[i])
          }
        }else{
          ticketids11 = this.data.ticketids;
        }
        console.log(prevPage, "prevPage")
        prevPage.setData({
          mydata: {
            counames: this.data.couname,
            ticketids: ticketids11,
            tickettype: this.data.tickettype,
            truePayNumber: this.data.truePayNumber,
            nonPay: this.data.nonPay,
            remarkInfo: this.data.remarkInfo,
            ucid: this.data.dcode,
            couid: this.data.couid
          }
        });
      }

      wx.navigateBack({
        delta: 1
      })


    }
    }else{
        wx.showToast({
          title: "请选择团购券",
          icon: 'none',
          duration: 1500,
        })
      }

  },
  /**
   * 获取券数据，5团购券，4优惠券
   */
  getCouDatas: function (pagenum, coutype) {
    wx.showLoading({
      title: '加载中',
    })
    var that = this;
    var arr = {
      shopid: app.common.shopid,
      ticketType: coutype,   //state为1的时候是 已过期，2的时候是未过期
      pageNumber: pagenum
    };
    wx.request({
      url: app.common.url + "/ShopProgramUserPay/getTicketInfo",
      method: "POST",
      header: {
        'sessionId': wx.getStorageSync('3rd_session'),
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: arr,
      success: function (res) {
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
            statetip: "加载中..."
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
            coulog: res.data.data,
            goulog: res.data.data,
          })
        } else {
          if (res.data.data.length != 0) {
            that.setData({
              coulog: that.data.coulog.concat(res.data.data),
              goulog: that.data.goulog.concat(res.data.data)
            })
          }else{
            that.setData({
              ishide: true,
              nodata: false,
              statetip: "没有更多数据了",
              flag: false
            })
          }
         
        }
        
        var coulog = that.data.coulog;//优惠券
        var goulog = that.data.goulog//团购券
        for (var i = 0; i < goulog.length; i++) {
          // console.log(that.data.dcode, "co")
          // console.log(goulog[i].dcode, "cc")
          if (that.data.dcode != "" || that.data.dcode!=null){
            var dcodess = that.data.dcode.split(',');
          }
          // console.log(dcodess,"dcodess")
          for (var k = 0; k < dcodess.length; k++){
            // console.log(dcodess[0],"99")
            if (goulog[i].dcode == dcodess[k]) {
              for (var j = 0; j < goulog.length; j++) {
                // console.log("items[j].checked = ", items[j].checked);
                if (goulog[j].checked && j != i) {
                  goulog[i].checked = false;
                }
              }
              goulog[i].checked = !(goulog[i].checked);
              // this.setData(this.data.items[i]);

            }
          }
        }
        for (var i = 0; i < coulog.length; i++) {
          // console.log(that.data.backmessa,"co")
          // console.log(coulog[i].couname,"cc")
          if (coulog[i].dcode == that.data.dcode) {
            for (var j = 0; j < coulog.length; j++) {
              // console.log("items[j].checked = ", items[j].checked);
              if (coulog[j].checked && j != i) {
                coulog[i].checked = false;
              }
            }
            coulog[i].checked = !(coulog[i].checked);
            // this.setData(this.data.items[i]);

          }
        }
        console.log(that.data.dcode,"tit")
        console.log(that.data.ticketids, 'ticketids')
        that.data.islen = that.data.dcode.length;
        that.setData({
          coulog: coulog,
          goulog: goulog
        });
      },
      complete: function () {
        wx.hideLoading();
      },
      fail: function () {

      }
    })
  },
  /**
   * 选择团购券
   */
  checkboxChange: function (e) {
    // console.log(e, "优惠券2")
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    var denomination = [];   //选中的面额
    var ticketid = [];       //选中的券id
    var ticketids=[]
    var index = [];            //选中的列表索引
    var dcode = [];
    var couname=[]
    var couid=[] 
    for (var i = 0; i < e.detail.value.length; i++) {
      var arr = e.detail.value[i].split(',');
      denomination = denomination.concat(arr[1]);
      ticketid = ticketid.concat(arr[0]);
      ticketids = ticketids.concat(arr[0]);
      dcode = dcode.concat(arr[3])
      index = index.concat(arr[2]);
      couname = couname.concat(arr[4]);
      couid = couid.concat(arr[5]);
      // this.data.couname.push(arr[4])
      this.setData({
        isCheckedId: arr[0],
        dcode: dcode,
      })
    }
    this.data.couname = couname
    this.data.couid = couid
    this.data.grouplen = e.target.dataset.index;
    this.data.counames = e.target.dataset.id;
    this.data.ticketids = ticketids
    this.data.payarr.ticketIds = ticketid;
    // this.data.payarr.truePayNumber = consumeMoney
    this.data.payarr.ticketType = 5;
    //wx.setStorageSync('payarr', this.data.payarr);  //12
    // wx.setStorageSync('backmess', "已选择团购券" + e.detail.value.length+"张");  //返回的信息

    console.log(e.detail.value.length,"e.detail.value.length")
    console.log(this.data.islen,"this.data.islen")
    // if (e.detail.value.length >= this.data.islen) {
    //   this.data.islen = e.detail.value.length;
      this.getGrouPrice();
    // } else {
    //   this.data.islen = e.detail.value.length;
    // }

    this.data.tickettype = 5
  },

  radioChange:function(e){
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    var ticketid = [];       //选中的券id
    this.data.payarr.ticketIds = e.detail.value;
    this.data.payarr.ticketType = 4;
    var arr = e.detail.value.split(',');
    var coulog = this.data.coulog;
      this.data.couname = arr[1]
      this.data.ticketids = arr[0]
      this.data.coutypes = arr[2]
      this.data.dcode = arr[3]
      this.data.couid = arr[4]
      this.data.tickettype = 4
      // this.getGrouPrices()
      this.data.aa = arr[1];
      console.log(this.data.aa, "3");

  
  },

  //选择优惠券
  bindtap1: function (e) {
    console.log(e,"e")
  //   var coulog = this.data.coulog;
  //   for (var i = 0; i < coulog.length; i++) {
  //     if (coulog[i].name == this.data.aa) {
  //       for (var j = 0; j < coulog.length; j++) {
  //         // console.log("items[j].checked = ", items[j].checked);
  //         if (coulog[j].checked && j != i) {
  //           console.log(coulog[j].checked,"checkk")
  //           coulog[j].checked = false;
  //         }
  //       }
  //       coulog[i].checked = !(coulog[i].checked);
  //       console.log("-----:", coulog);
  //       // this.setData(this.data.items[i]);

  //     }
  //   }
  //   this.setData({
  //     coulog: coulog
  //   });
    this.getGrouPrices(e)
  },
  /**
 * 选择券获取金额
 */
  getGrouPrices: function (e) {
    console.log(e,"qe")
    var that = this;
    if(e!=""){
      var index = e.currentTarget.dataset.index;//获取当前点击的下标

    }
    return new Promise(function (resolve, reject) {
      var arr={
        consumeMoney: that.data.truePayNumber,
        noDiscountMoney: that.data.nonPay,
        shopId: app.common.shopid,
        ticketIds: that.data.ticketids,
        ticketType:4
      }
      wx.request({
        url: app.common.url + '/ShopProgramUserPay/calculateAmount',
        data: arr,
        header: {
          'sessionId': wx.getStorageSync('3rd_session'),
          'content-type': 'application/x-www-form-urlencoded'
        },
        method: "POST",
        success: function (res) {
          if (res.data.success) {
            that.data.chooseCouError = true;
          } else {
            that.data.chooseCouError = false;

            if (res.data.success == false) {
              if (res.data.message == "请传入使用的优惠券编号") {

              }else{
                wx.showToast({
                  title: res.data.message,
                  icon: 'none',
                  duration: 1500,
                })
                that.setData({
                  counames: "",
                  truePayNumber: that.data.truePayNumber,
                  backmessa:"",
                  dcode: "",
                  ticketids: "",
                  tickettype: "",
                  counames: "",
                  couid:""
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
                      counames: "",
                      ticketids: "",
                      tickettype: "",
                      truePayNumber: that.data.truePayNumber,
                      nonPay: that.data.nonPay,
                      remarkInfo: that.data.remarkInfo,
                      ucid: "",
                      couid:""
                    }
                  });
                }
              }
            } else {

            }
  
            console.log(index, "index")
            var coulog = that.data.coulog;//选项集合
            if (coulog[index].checked) return;//如果点击的当前已选中则返回
            coulog.forEach(item => {
              item.checked = false
            })
            coulog[index].checked = false;//改变当前选中的checked值
            that.setData({
              coulog: coulog
            })
          }
        },
        complete: function () {
          // wx.hideLoading();
        }
      })
    })
  },
  /**
   * 选择团购券券获取金额
   */
  getGrouPrice: function () {
    var that = this;
    return new Promise(function (resolve, reject) {
      var arr = {
        consumeMoney: that.data.truePayNumber,
        noDiscountMoney: that.data.nonPay,
        shopId: app.common.shopid,
        ticketIds: that.data.ticketids,
        ticketType: 5
      }
      wx.request({
        url: app.common.url + '/ShopProgramUserPay/calculateAmount',
        data: arr,
        header: {
          'sessionId': wx.getStorageSync('3rd_session'),
          'content-type': 'application/x-www-form-urlencoded'
        },
        method: "POST",
        success: function (res) {
          if (res.data.success) {
            that.data.chooseCouError = true;
            wx.setStorageSync('paymoney', res.data.data);
          } else {
            that.data.chooseCouError = false;
            var tick = that.data.payarr.ticketIds;
            tick = tick.splice(0, tick.length - 1);
            that.data.payarr.ticketIds = tick;
            var itemarr = that.data.goulog;

            if (res.data.success == false) {
              if (res.data.message =="请传入使用的优惠券编号"){

              }else{
                wx.showToast({
                  title: res.data.message,
                  icon: 'none',
                  duration: 1500,
                })
                that.setData({
                  counames: "",
                  truePayNumber: that.data.truePayNumber,
                  backmessa: "",
                  dcode: "",
                  ticketids: "",
                  tickettype: "",
                  counames: "",
                  couid:""
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
                      counames: "",
                      ticketids: "",
                      tickettype: "",
                      truePayNumber: that.data.truePayNumber,
                      nonPay: that.data.nonPay,
                      remarkInfo: that.data.remarkInfo,
                      ucid: "",
                      couid:""
                    }
                  });
                }
              }
           
            } else {
             
            }
            for (var i = 0; i < itemarr.length; i++) {   //选多张券失败的操作
              if (itemarr[i].ticketid == that.data.isCheckedId) {
                itemarr[i].checked = false;
              }
              for (var j = 0; j < tick.length; j++) {
                if (itemarr[i].ticketid == tick[j]) {
                  itemarr[i].checked = false;
                }
              }

            }
            that.setData({
              goulog: itemarr
            })
       
          }
          that.data.islen = that.data.ticketids.length;
          wx.setStorageSync('payarr', that.data.payarr);  //12
          resolve(res);
        },
        complete: function () {
          // wx.hideLoading();
        }
      })
    })
  },

  /**
* 选择使用优惠券
*/
  toUse: function () {
    if (this.data.tickettype==4){
    if (this.data.ticketids == 0) {
      wx.showToast({
        title: "请选择优惠券",
        icon: 'none',
        duration: 1500,
      })
    } else {
      console.log(this.data.couname, "this.data.couname")
      var that = this;
      // wx.setStorageSync('payarr', that.data.payarr);  //12
      // wx.setStorageSync('backmess', that.data.couname);  //返回的信息
      // wx.setStorageSync('hasCoupon', true);  //是否用券
      let pages = getCurrentPages();
      let currPage = null; //当前页面
      let prevPage = null; //上一个页面

      if (pages.length >= 2) {
        currPage = pages[pages.length - 1]; //当前页面
        prevPage = pages[pages.length - 2]; //上一个页面
      }
      if (prevPage) {
        console.log(prevPage, "prevPage1")
        var ccname
        if (that.data.couname!=""){
          ccname = that.data.couname
        }else{
          ccname = that.data.backmessa
        }
        prevPage.setData({
          mydata: {
            counames:ccname,
            ticketids: that.data.ticketids,
            tickettype: that.data.tickettype,
            truePayNumber: that.data.truePayNumber,
            nonPay: that.data.nonPay,
            remarkInfo: that.data.remarkInfo,
            ucid: that.data.dcode,
            couid: that.data.couid
          }
        });
      }
      wx.navigateBack({
        delta: 1
      })

    }
 
  }else{
        wx.showToast({
          title: "请选择优惠券",
          icon: 'none',
          duration: 1500,
        })
      }
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
      wx.setBackgroundColor({
        backgroundColor: '#242424', // 窗口的背景色为白色
      });

      wx.setNavigationBarColor({
        frontColor: '#ffffff', //看文档 必须要六位 不能是三位
        backgroundColor: '#242424',
      });

      // wx.setTabBarStyle({
      //   borderStyle: '#f8f8f8',
      //   backgroundColor: '#242424',
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
      wx.setBackgroundColor({
        backgroundColor: '#242424', // 窗口的背景色为白色
      });

      wx.setNavigationBarColor({
        frontColor: '#ffffff', //看文档 必须要六位 不能是三位
        backgroundColor: '#242424',
      });

      // wx.setTabBarStyle({
      //   borderStyle: '#f8f8f8',
      //   backgroundColor: '#242424',
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
      wx.setBackgroundColor({
        backgroundColor: '#242424', // 窗口的背景色为白色
      });

      wx.setNavigationBarColor({
        frontColor: '#ffffff', //看文档 必须要六位 不能是三位
        backgroundColor: '#242424',
      });

      // wx.setTabBarStyle({
      //   borderStyle: '#f8f8f8',
      //   backgroundColor: '#242424',
      // })
    }
  }
})
