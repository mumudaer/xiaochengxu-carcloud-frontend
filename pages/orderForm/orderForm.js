// pages/orderForm/orderForm.js
import {base_url} from '../../utils/constant'
import {storage} from '../../utils/util'
let serviceid = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:'',
    carType:'',
    carNumber:'',
    phoneNumber:'',
    price:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.serviceid,options.price)
    serviceid = options.serviceid
    this.setData({
      price:options.price*100
    })
  },
  getAddress(event){
    console.log(event.detail.value)
    this.setData({
      address:event.detail.value
    })
  },
  getCarType(event){
    console.log(event.detail.value)
    this.setData({
      carType:event.detail.value
    })
  },
  getCarNumber(event){
    console.log(event.detail.value)
    this.setData({
      carNumber:event.detail.value
    })
  },
  getPhoneNumber(event){
    console.log(event.detail.value)
    this.setData({
      phoneNumber:event.detail.value
    })
  },

  onSubmit:function(){
    //TODO 收集数据请求接口
    const token = storage.getToken() || ''
    wx.request({
      url:base_url+'/order/add',
      method:'POST',
      data:{
        carNumber: this.data.carNumber ,
        goodsId:serviceid ,
        carType:this.data.carType,
        serviceAddress: this.data.address,
        phoneNumber:this.data.phoneNumber
      },
      header: {
        'content-type': 'application/json',
        token
      },
      success:res => {
        console.log(res.data)
        if(!res.data.success) return
        
        wx.navigateTo({
          url: '/pages/orderSuccess/orderSuccess',
        })
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