var API = require('../../../../utils/api');
var Net = require('../../../../utils/net');

// 获取全局应用程序实例对象
var app = getApp();

Page({
  data: {
    data:{},
  },


  onLoad: function (options) {
    // 查看是否授权
    var that=this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              // console.log(res.userInfo)
              Net.request({
                url:API.UserLike(app.Data.userInfo.openid),
                success: function(res) {
                var datas = res.data;
                // that.data=datas;
                that.setData({
                  data:datas,
                })
                // console.log(typeof(that.data.data.data[0].cid))
                // console.log(typeof(parseInt(that.data.data.data[0].cid)))
                }
              })
            }
          })
        }
      }
    })
    // console.log(that.data.data)
  },
  turnto:function(event){
    var id=event.currentTarget.id;
    console.log(id);
    wx.redirectTo({
      url: '../../../detail/detail?item='+id,
    })
  }
  
})