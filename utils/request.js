const app = getApp();
var QQMapWX = require('wx-jssdk1.0/qqmap-wx-jssdk.js');
var qqmapsdk;

/**
 * 获取当前地理位置
 */
function getLocaltion() {
  return new Promise(function (resolve, reject) {
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log('当前地理位置', res)
        var latitude = res.latitude;
        var longitude = res.longitude;
        console.log("*******", latitude, longitude)
        // 当前位置逆解析
        qqmapsdk = new QQMapWX({
          key: app.common.SDKkey
        });
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: latitude,
            longitude: longitude
          },
          success: function (res) {   //位置逆解析成功
            console.log('89', res)
            console.log(res.result.ad_info.location.lng)
            var arr = [];
            arr.latitude = res.result.ad_info.location.lat;
            arr.longitude = res.result.ad_info.location.lng;
            arr.address = res.result.address;
            arr.province = res.result.address_component.province;
            arr.city = res.result.address_component.city.substr(0, res.result.address_component.city.length - 1);  //城市名无市字
            console.log(arr)
            app.common.localResult = arr
            console.log(app.common.localResult)
            //保存定位信息
            var arr2 = {};
            arr2.province = res.result.address_component.province;
            arr2.city = res.result.address_component.city;
            wx.setStorageSync("cityarea", arr2)
            console.log(arr2)
            resolve();
          },
          fail: function (res) {
            //console.log(res);
          },
        });

      }
    })
  })
}


/**
 * 获取城市经纬度
 */
function getLocalNum(cityname) {
  return new Promise(function (resolve, reject) {
    qqmapsdk = new QQMapWX({
      key: app.common.SDKkey
    });
    qqmapsdk.geocoder({
      address: cityname,
      success: function (res) {
        console.log('127geocoder:' + res);
        wx.setStorageSync("citylocat", res.result.location)
        var arr2 = {};
        arr2.province = res.result.address_components.province;
        arr2.city = res.result.address_components.city;
        wx.setStorageSync("cityarea", arr2)

        resolve();
      },
      fail: function (res) {
        console.log(res);
      }
    });
  })
}
//打开地图
function getLocation(pares) {
  var that = this
  wx.getLocation({
    type: 'gcj02', //返回可以用于wx.openLocation的经纬度
    success: function (res) {
      var latitude = pares.lat
      var longitude = pares.lng
      wx.openLocation({
        latitude: latitude,
        longitude: longitude,
        scale: 28
      })
    }
  })
}


/**
 * 默认提示封装
 */
function alert(msg) {
  wx.showToast({
    title: msg,
    icon: 'none',
    duration: 1500,
  })
}

// 打开小程序
function navigate(){
  wx.navigateToMiniProgram({
    appId: '',
    path: 'pages/index/index?id=123',
    extraData: {
      foo: 'bar'
    },
    envVersion: 'develop',
    success(res) {
      // 打开成功
    }
  })
}



function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}


function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
module.exports = {
  getLocaltion: getLocaltion,
  getLocalNum: getLocalNum,
  alert: alert,
  getLocation: getLocation,
  navigate: navigate,
  formatTime : formatTime
}