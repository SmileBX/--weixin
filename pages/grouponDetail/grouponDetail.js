const app = getApp()
Page({
  data: {
    fixed:false,
    gouimg:'/images/gou.png',
    id:""
  },
  onLoad: function (res) {
    this.setData({
      id:res.id
    })
    this.getDatas(res.id);
  },

  getDatas: function (id) {
    wx.showLoading({
      title: '加载中',
    })
    var that = this;
    wx.request({
      url: app.common.url + '/ShopProgramCoupon/getSaleCouponInfo',
      data: {
        id: id,
      },
      header: {
        'sessionId': wx.getStorageSync('3rd_session'),
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      success: function (res) {
        if (res.data.success) {
          that.setData({
            grouInfo: res.data.data,
          })
          var reg =/static/;
          if (!reg.test(res.data.data.coupic)){
               that.setData({
                 gouimg: res.data.data.coupic
               })
          }
        } else {}
      },
      complete: function () {
        wx.hideLoading();
      }
    })
  },
  goBuy: function () {
    setTimeout(function () {
      wx.redirectTo({
        url: '/pages/order/order'
      })
    }, 1000) 
    var that = this;
    app.getTelphone().then(function (res) {
      if (app.common.havePhone) {
        that.goBuyDetail();
      }
    })
  },
  goBuyDetail:function(){
    wx.showLoading({
      title: '购买中，请稍后',
    })
    var that = this;
    wx.request({
      url: app.common.url + '/ShopProgramMy/buyCoupon',
      data: {
        couid: that.data.id,
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
                  console.log("成功")
                  wx.showToast({
                    title: '购买成功',
                    icon: 'success',
                    duration: 1500,
                  })
                setTimeout(function () {
                  wx.redirectTo({
                    url: '/pages/order/order'
                  })
                }, 1000) 
               },
              'fail': function (res) { },
              'complete': function (res) { }
            })
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
        setTimeout(function(){
          wx.hideLoading();
        },1500)
      }
    })
  },
  //点击弹出  
  plus: function () {
    if (this.data.isPopping) {
      //缩回动画  
      this.popp();
      this.setData({
        isPopping: false
      })
    } else if (!this.data.isPopping) {
      //弹出动画  
      this.takeback();
      this.setData({
        isPopping: true
      })
    }
  },
  index: function () {
    wx.switchTab({
      url: '../index/index'
    })
  },
  transpond: function () {
    wx.switchTab({
      url: '../order/order'
    })
  },
  mine: function () {
    wx.switchTab({
      url: '../mine/mine'
    })
  },
  coupon: function () {
    wx.navigateTo({
      url: '../../pages/coupon/coupon'
    })
  },
  //弹出动画  
  popp: function () {
    //plus顺时针旋转  
    var animationPlus = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    var animationcollect = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    var animationTranspond = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    var animationInput = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    var animationCoupon = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    animationPlus.rotateZ(180).step();
    animationcollect.translate(-15, -45).rotateZ(360).opacity(1).step();
    animationTranspond.translate(-50, -20).rotateZ(360).opacity(1).step();
    animationInput.translate(-50, 20).rotateZ(360).opacity(1).step();
    animationCoupon.translate(-15, 45).rotateZ(360).opacity(1).step();
    this.setData({
      animPlus: animationPlus.export(),
      animCollect: animationcollect.export(),
      animTranspond: animationTranspond.export(),
      animCoupon: animationCoupon.export(),
      animInput: animationInput.export(),
    })
  },
  //收回动画  
  takeback: function () {
    //plus逆时针旋转  
    var animationPlus = wx.createAnimation({
      duration: 250,
      timingFunction: 'ease-out'
    })
    var animationcollect = wx.createAnimation({
      duration: 250,
      timingFunction: 'ease-out'
    })
    var animationTranspond = wx.createAnimation({
      duration: 250,
      timingFunction: 'ease-out'
    })
    var animationInput = wx.createAnimation({
      duration: 250,
      timingFunction: 'ease-out'
    })
    var animationCoupon = wx.createAnimation({
      duration: 250,
      timingFunction: 'ease-out'
    })
    animationPlus.rotateZ(0).step();
    animationcollect.translate(0, 0).rotateZ(0).opacity(0).step();
    animationTranspond.translate(0, 0).rotateZ(0).opacity(0).step();
    animationInput.translate(0, 0).rotateZ(0).opacity(0).step();
    animationCoupon.translate(0, 0).rotateZ(0).opacity(0).step();
    this.setData({
      animPlus: animationPlus.export(),
      animCollect: animationcollect.export(),
      animTranspond: animationTranspond.export(),
      animInput: animationInput.export(),
      animCoupon: animationCoupon.export(),
    })
  },
  onShareAppMessage: function () {
    var that = this;
    return {
      title: that.data.shopName,
      path: '/pages/grouponDetail/grouponDetail?id=' + that.data.id
    }
  }
})