
Page({

  /**
   * 页面的初始数据
   */
  data: {
    email:'ceshon@163.com',
    wechat:'短信息（ceshon）',
    selfwechat:'k1787990728',
    selfqq: '1787990728',
    website:'https://ifdo.ml'
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  formSubmit: function (e) {
    let that = this;
    if (e.detail != undefined && e.detail.formId != undefined) {
      console.log(e.detail.formId)
    }
  },
  copyDataTap:function(e){
    var data = e.target.dataset.index
    qq.setClipboardData({
      data: data,
      success: function (res) {
        qq.getClipboardData({
          success: function (res) {
            console.log(res.data) 
          }
        })
      }
    })
  }
})