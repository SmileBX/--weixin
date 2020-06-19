const app = getApp()
Page({
  data: {
    phonenumber: "",
    flag:true,
    code:"",
    disabled:false,
    codeBtn:"获取验证码",
    bindText:"立即绑定",
    ishide:true,
    bindNum:"",
    isWx:true
  },
 
  onLoad: function (res) {
    if (res.ischeck) {
      this.checkNumber();
    }
    if (app.common.isAttestation==1){
      this.setData({
        isWx: true
      })
    }else{
      this.setData({
        isWx: false
      })
    }

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
      wx.setNavigationBarColor({
        frontColor: '#ffffff', //看文档 必须要六位 不能是三位
        backgroundColor: '#242424',
      });

      // wx.setTabBarStyle({
      //   borderStyle: '#f8f8f8',
      //   backgroundColor: '#242424',
      // });
      wx.setBackgroundColor({
        backgroundColor: '#242424' // 窗口的背景色为白色
      })
    }
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

      // wx.setTabBarStyle({
      //   borderStyle: '#f8f8f8',
      //   backgroundColor: '#242424',
      // });
      wx.setBackgroundColor({
        backgroundColor: '#242424' // 窗口的背景色为白色
      })
    }
  },
  getTelnumber: function (e) {
    this.data.phonenumber = e.detail.value;
  },
  getCodenum: function (e) {
    this.data.code = e.detail.value;
  },
  /**
 * 微信授权手机号码
 */
  getPhoneNumber: function (e) {
    if (e.detail.errMsg == "getPhoneNumber:ok") {
      var that = this;
      var pram = {
        encryptedData: e.detail.encryptedData,
        iv: e.detail.iv,
        shopid: app.common.shopid
      };

      wx.request({
        url: app.common.url + "/ShopProgramUser/getUserPhone",
        data: pram,
        method: "POST",
        header: {
          'sessionId': wx.getStorageSync('3rd_session'),
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          console.log(res.data)
          if (res.data.data == 1) {
            app.common.havePhone = true
            wx.showToast({
              title: '绑定成功',
              icon: 'success',
              duration: 1500,
            })
            setTimeout(function () {
              wx.navigateBack({
                delta: 1
              })
            }, 1500)

          }
        }
      })//
    }else{}

  },
  /**
   * 验证是否存在手机号码
   */
  checkNumber:function(){
    var that = this;
      wx.request({
        url: app.common.url + "/ShopProgramMy/checkPhone",
        data: {
          shopid: app.common.shopid
        },
        method: "POST",
        header: {
          'sessionId': wx.getStorageSync('3rd_session'),
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          console.log(res)
          if (res.data.data == 1) {
            that.setData({
              bindText:"更换绑定号码",
              ishide:false,
              isWx:false,
              bindNum: res.data.message.substring(0, 3) + "****" + res.data.message.substring(7)
            })
          } else {
            
          }
        }
      })
  },
  /**
   * 绑定手机号码
   */
  getData: function () {
    var that = this;
    if (that.data.isWx){
      that.setData({
        isWx:false
      })
    }else{

    var reg = app.common.telReg;

      if (that.data.phonenumber == "") {
        wx.showToast({
          title: '输入的手机号为空',
          icon: 'none',
          duration: 1000
        })
      } else if (!reg.test(that.data.phonenumber)) {
        wx.showToast({
          title: '请输入正确的手机号码',
          icon: 'none',
          duration: 1000
        })
      } else if (that.data.code == "") {
        wx.showToast({
          title: '验证码为空',
          icon: 'none',
          duration: 1000
        })
      } else {
        if (that.data.flag) {
          that.setData({
            flag: false
          })
          wx.showLoading({
            title: '绑定中',
          })
          var arr = {
            shopid: app.common.shopid,
            uphone: that.data.phonenumber,
            code: that.data.code
          };
          wx.request({
            url: app.common.url + "/ShopProgramMy/insertPhone",
            method: "POST",
            header: {
              'sessionId': wx.getStorageSync('3rd_session'),
              'content-type': 'application/x-www-form-urlencoded'
            },
            data: arr,
            success: function (res) {
              if (res.data.success) {
                app.common.havePhone=true
                wx.showToast({
                  title: '绑定成功',
                  icon: 'success',
                  duration: 1000,
                })
                setTimeout(function () {
                  that.setData({
                    flag: true
                  })
                  wx.navigateBack({
                    delta: 1
                  })
                }, 1000)

              } else {
                wx.showToast({
                  title: res.data.message,
                  icon: 'none',
                  duration: 1500
                })
                that.setData({
                  phonenumber:"",
                  code:"",
                })
              }


            },
            fail: function () {

            }
          })
        }
      }
    
    //
    }
    
  },
  /**
   * 获取验证码
   */
  getCode:function(){
    var that=this;
    var reg = app.common.telReg;
    if (that.data.phonenumber == "") {
      wx.showToast({
        title: '输入的手机号为空',
        icon: 'none',
        duration: 1500
      })
    } else if (!reg.test(that.data.phonenumber)) {
      wx.showToast({
        title: '请输入正确的手机号码',
        icon: 'none',
        duration: 1500
      })
    } else {
      that.setData({
        disabled: true
      })
      var gettime = 60;
      var timer = setInterval(function () {
        gettime--;
        that.setData({
          codeBtn: gettime + "s后重新获取"
        })
        if (gettime == 0) {
          that.setData({
            codeBtn: "获取验证码",
            disabled: false
          })
          clearInterval(timer);
        }
      }, 1000)
        wx.request({
          url: app.common.url + "/ShopProgramMy/getPhoneCode",
          method: "POST",
          header: {
            'sessionId': wx.getStorageSync('3rd_session'),
            'content-type': 'application/x-www-form-urlencoded'
          },
          data: {
            uphone: that.data.phonenumber
          },
          success: function (res) {
            console.log(res)
            /*wx.showToast({
              title: '绑定成功',
              icon: 'success',
              duration: 1500,
            })*/
            
          },
          fail: function () {

          }
        })
   }
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

      // wx.setTabBarStyle({
      //   borderStyle: '#f8f8f8',
      //   backgroundColor: '#242424',
      // });
      wx.setBackgroundColor({
        backgroundColor: '#242424' // 窗口的背景色为白色
      })
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

      wx.setTabBarStyle({
        borderStyle: '#f8f8f8',
        backgroundColor: '#242424',
      });
      wx.setBackgroundColor({
        backgroundColor: '#242424' // 窗口的背景色为白色
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
      wx.setNavigationBarColor({
        frontColor: '#ffffff', //看文档 必须要六位 不能是三位
        backgroundColor: '#242424',
      });

      // wx.setTabBarStyle({
      //   borderStyle: '#f8f8f8',
      //   backgroundColor: '#242424',
      // });
      wx.setBackgroundColor({
        backgroundColor: '#242424' // 窗口的背景色为白色
      })
    }
  }
})
