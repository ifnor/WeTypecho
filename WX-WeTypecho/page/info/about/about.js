Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              // console.log(res.userInfo)
              
            }
          })
        }
      }
    })
  },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  showHistory: function () {
    wx.navigateTo({
      url: '../turnto/history/history'
    })
  },
  showAboutMe: function () {
    wx.navigateTo({
      url: '../turnto/about/about_me'
    })
  },
  showAboutWechat: function () {
    wx.navigateTo({
      url: '../turnto/about/about_wechat'
    })
  },

  
  
})