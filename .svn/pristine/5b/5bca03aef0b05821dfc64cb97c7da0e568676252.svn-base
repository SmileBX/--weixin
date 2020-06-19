const app = getApp()
Page({
  data: {
    act:5,
    isup:true,
    coulog: [],
    active: "",
    dcode:[],
    ostatus: "",
    nodata: false,
    pageNum: 1,
    coutype: 5,
    ishide: false,
    statetip: "没有更多数据了",
    flag: true,
    reloadData: true,
    state:"",
    grouostatus: 2,
    chooseText:"确定",
    payarr:{},
    islen:0,
    coumess:{},
    chooseCouError:true
  },
 
  onLoad: function () {
    this.getCouDatas(this.data.pageNum, this.data.coutype)
  },
  onShow:function(){
    this.data.payarr = wx.getStorageSync('payarr');
  },
  typeChange: function (data) {
    var active = data.currentTarget.dataset.act;
    var that = this;
    if(active==5){  //团购
      that.setData({//把选中值放入判断值
        act: active,
        pageNum:1,
        goulog: [],
        coulog: [],
        coutype: 5
      })
    } else if (active == 4){  //优惠
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
  },
  /**
 * 下拉刷新
 */
  onPullDownRefresh: function () {
    this.setData({
      pageNum: 1,
      coulog: [],
      goulog: [],
    })
    this.getCouDatas(this.data.pageNum, this.data.coutype);
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
   * 获取券数据，5团购券，4优惠券
   */
  getCouDatas: function (pagenum,coutype) {
     wx.showLoading({
      title: '',
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
          that.setData({
            coulog: that.data.coulog.concat(res.data.data),
            goulog: that.data.goulog.concat(res.data.data)
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
   * 选择团购券
   */
  checkboxChange:function(e){
    var denomination = [];   //选中的面额
    var ticketid = [];       //选中的券id
    var index=[];            //选中的列表索引
    var dcode=[]
    for (var i = 0; i < e.detail.value.length; i++) {
      var arr = e.detail.value[i].split(',');
      denomination = denomination.concat(arr[1]);
      ticketid = ticketid.concat(arr[0]);
      dcode = dcode.concat(arr[3])
      index = index.concat(arr[2]);
      this.setData({
        isCheckedId: arr[0],
        dcode:dcode
      })
    } 
    this.data.payarr.ticketIds = ticketid;
    this.data.payarr.ticketType = 5;
    //wx.setStorageSync('payarr', this.data.payarr);  //12
   // wx.setStorageSync('backmess', "已选择团购券" + e.detail.value.length+"张");  //返回的信息

    if (e.detail.value.length>=this.data.islen){
      this.data.islen = e.detail.value.length;
      this.getGrouPrice();
    }else{
      this.data.islen = e.detail.value.length;
    }
  },
  /**
   * 选择券获取金额
   */
  getGrouPrice: function () {
    var that = this;
    return new Promise(function (resolve, reject) {
        wx.request({
          url: app.common.url + '/ShopProgramUserPay/calculateAmount',
          data: that.data.payarr,
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
              that.data.chooseCouError=false;
              var tick = that.data.payarr.ticketIds;
              tick = tick.splice(0, tick.length - 1);
              that.data.payarr.ticketIds = tick;
              var itemarr = that.data.goulog;
              for (var i = 0; i < itemarr.length; i++) {   //选多张券失败的操作
                if (itemarr[i].ticketid == that.data.isCheckedId) {
                  itemarr[i].checked=false;
                }
                for (var j = 0; j < tick.length; j++) {
                    if (itemarr[i].ticketid == tick[j]) {
                      itemarr[i].checked =true;
                    }
                }
              
              }
              that.setData({
                goulog: itemarr
              })
              wx.showToast({
                title: res.data.message,
                icon: 'none',
                duration: 1500,
              })
            }
            that.data.islen = that.data.payarr.ticketIds.length;
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
   * 选择使用团购券
   */
  useGrou:function(){
    if (this.data.islen==0){
      wx.showToast({
        title: "请选择团购券",
        icon: 'none',
        duration: 1500,
      })
    }else{
      wx.setStorageSync('dcode', this.data.dcode); 
      wx.setStorageSync('hasCoupon', true);  //返回的信息
      wx.setStorageSync('backmess', "已选择团购券" + this.data.islen + "张");
      wx.navigateBack({
        delta: 1
      })
    }
    
  },
  /**
   * 选择使用优惠券
   */
  toUse:function(e){
    var tick=[];
    tick[0] = e.currentTarget.dataset.ticketid;
    this.data.payarr.ticketIds = tick;
    var that=this;
    this.getGrouPrice().then(function (res) {
      if (that.data.chooseCouError) {
        wx.setStorageSync('payarr', that.data.payarr);  //12
        wx.setStorageSync('backmess', "已选择优惠券");  //返回的信息
        wx.setStorageSync('hasCoupon', true);  //是否用券
        wx.navigateBack({
            delta: 1
        })
      }
    })
    
    
    
  }
  
})
