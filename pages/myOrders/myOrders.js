// pages/myOrders/myOrders.js
import Toast from '/@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    columns: ['天气不好', '信息错误，重新下单', '突发事件'],
    btnShow:false
  },

  showCancelReason:function(){
    this.setData({
      show:true
    })
  },
  onClose() {
    this.setData({ show: false });
  },
  onChange(event) {
    const { picker, value, index } = event.detail;
  },
  onConfirm(event) {
    const { picker, value, index } = event.detail;
    console.log(picker, value, index)
    this.setData({ show: false });
    Toast('取消订单成功');
  },
  getUserInfo:function(event){
    const userInfo = event.detail.userInfo
    console.log(userInfo)
    if (userInfo) {
      wx.login({
        success:(res) => {console.log(res)},
        complete: (res) => {},
      })
      this.setData({
        btnShow: false
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success: (res) => {
        console.log(res)
        if (res.authSetting['scope.userInfo']) {
          this.setData({
            btnShow: false,
          })
        } else {
          this.setData({
            btnShow: true,
          })
        }
      }
    })
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