const app = getApp()
Page({
  data: {
    phonecall: '',
    shopimg: "/images/default.png",
    shopName: "",
    addr:"",
    companyremark:"",
    storeALL:[],
    imgUrls: [
      '../../images/pic.png',
      '../../images/pic.png',
      '../../images/pic.png',
      '../../images/pic.png',
      '../../images/pic.png'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  onShow: function () {
    this.getDatas();
  },
  phonecallevent: function (e) {
    wx.makePhoneCall({
      phoneNumber: this.data.phonecall
    })
  },
  getDatas: function () {
      wx.showLoading({
        title: '加载中',
      })
      var that = this;
      wx.request({
        url: app.common.url + '/ShopProgramUser/getIndexShopInfo',
        data: {
          shopid: app.common.shopid
        },
        header: {
          'sessionId': app.common.sessionId,
          'content-type': 'application/x-www-form-urlencoded'
        },
        method: "POST",
        success: function (res) {
          console.log(res.data.data.storePic,"pic")
   
          if (res.data.success == true) {
            that.setData({
              shopimg: res.data.data.logopicsrc == "" ? "/images/default.png" : res.data.data.logopicsrc,
              shopName: res.data.data.shopname,
              phonecall: res.data.data.phone,
              addr: res.data.data.address,
              companyremark: res.data.data.companyremark,
              storeALL: res.data.data.storePic,
            })
          } else { }

        },
        complete: function () {
          wx.hideLoading();
        }
      })
  },
  imgYu: function (event) {
         var src = event.currentTarget.dataset.src;//获取data-src
         var imgList = this.data.pictures;//获取data-list
        //图片预览
         wx.previewImage({
            current: src, // 当前显示图片的http链接
            urls: imgList // 需要预览的图片http链接列表
     })
    
  }
})
