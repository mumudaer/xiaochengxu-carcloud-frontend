// pages/goodsDetail/goodsDetail.js
import {base_url} from '../../utils/constant'
let serviceid = null
import {storage} from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serviceDetail:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.serviceid)
    serviceid = options.serviceid
    this.getDetail()
  },
  getDetail:function(){
    const token = storage.getToken() || ''
    wx.request({
      url:base_url+'/goods/detail',
      method:'POST',
      data:{
        serviceid
      },
      header: {
        'content-type': 'application/json',
        token
      },
      success:res => {
        console.log(res.data)
        if(!res.data.success) return
        this.setData({
          serviceDetail:res.data.data
        })
        
      }
    })
  },
  toOrderFrom:function (){
    //TODO　看需要传递什么参数
    console.log(this.data.serviceDetail)
    wx.navigateTo({
      url: `/pages/orderForm/orderForm?serviceid=${serviceid}&price=${this.data.serviceDetail.servicePrice}`,
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