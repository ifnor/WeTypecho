Page({
  data: {
    canIUse: qq.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    // 查看是否授权
    qq.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          qq.getUserInfo({
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
    qq.navigateTo({
      url: '../logs/logs'
    })
  },
  showHistory: function () {
    qq.navigateTo({
      url: '/page/info/turnto/history/history'
    })
  },
  showAboutMe: function () {
    qq.navigateTo({
      url: '../turnto/about/about_me'
    })
  },
  showAboutWechat: function () {
    qq.navigateTo({
      url: '../turnto/about/about_wechat'
    })
  },

  
  
})