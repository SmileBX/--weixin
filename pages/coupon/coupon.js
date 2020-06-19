const app = getApp()
Page({
  data: {
    act:1,
    isup:true,
    coulog: [],
    active: "",
    ostatus: "",
    nodata: false,
    pageNum: 1,
    coutype: 0,
    ishide: false,
    statetip: "没有更多数据了",
    flag: true,
    reloadData: true,
    state:""
  },
 
  onLoad: function () {
    this.getDatas(this.data.pageNum)
  },
  typeChange: function (data) {
    var active = data.currentTarget.dataset.act;
    var that = this;
    if(active==1){
      that.setData({//把选中值放入判断值
        act: active,
        isup: !that.data.isup,
        pageNum:1,
        coulog: [],
        state: ""
      })
    } else if (active == 2){
      that.setData({//把选中值放入判断值
        act: active,
        isup:false,
        coulog: [],
        pageNum: 1,
        state: 1
      })
    }
    that.getDatas(that.data.pageNum);
  },
  /**
 * 下拉刷新
 */
  onPullDownRefresh: function () {
    this.setData({
      pageNum: 1,
      coulog: []
    })
    this.getDatas(this.data.pageNum, this.data.ostatus);
    wx.stopPullDownRefresh()
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
        that.getDatas(that.data.pageNum);
      }
    }
  },
  /**
   * 获取数据
   */
  getDatas: function (pagenum) {
    wx.setStorageSync('ostatus', "");
    wx.showLoading({
      title: '加载中',
    })
    var that = this;
    var arr = {
      shopid: app.common.shopid,
      state:that.data.state,
      pageNumber: pagenum
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
            coulog: res.data.data
          })
        } else {
          that.setData({
            coulog: that.data.coulog.concat(res.data.data)
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
  toUse:function(e){
    wx.navigateTo({
      url: "../../pages/pay/pay" + "?parStr=" + app.common.shopid +"&ucid="+e.currentTarget.dataset.ucid
    })
  }
})
