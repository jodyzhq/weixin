 
let constant = require('../../utils/constant.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 隐藏转发
    wx.hideShareMenu({})
    let firstFlag = wx.getStorageInfoSync(constant.firstFlagKey)
    console.log('firstFlag', firstFlag)
    if(firstFlag  && firstFlag == 1) {
      // 返回值中只会出现小程序已经向用户请求过的权限
      wx.getSetting({
        success: res => {
          // 用户授权结果
          console.log(res.authSetting)
          if (res.authSetting) {

          }
          //调到授权用户信息界面
          wx.redirectTo({
            url: '/pages/auth/auth',
          })
        }
      })
    }else {
      //首次登陆
      wx.setStorage({
        key: constant.firstFlagKey,
        data: 1,
      })
      // redirectTo关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
      wx.redirectTo({
        url: '../splash/splash',
      })
    }
    

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})