// pages/myOrders/myOrders.js
import Toast from '/@vant/weapp/toast/toast';
import Dialog from '/@vant/weapp/dialog/dialog';
import {base_url,pageSize} from '../../utils/constant'
let encryptedData = null
let iv = null
let code = null
let pageIndex = 1
let id = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    columns: ['天气不好', '信息错误，重新下单', '突发事件'],
    btnShow:false,
    orderList:[],
  },
  showFinshOrder:function(){
    Dialog.confirm({
      title: '确定是否完成此订单'
    }).then(() => {
      
    }).catch(() => {
      // on cancel
    });
  },
  showCancelReason:function(e){
    console.log(e.currentTarget.dataset.serviceid)
    id = e.currentTarget.dataset.serviceid
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
    console.log(event,picker, value, index)
    wx.request({
      url: base_url+'/order/quit',
      method:'POST',
      data:{
        cancelReason: value ,
        id
      },
      success:(res) => {
        console.log(res)
      }
    })
    this.setData({ show: false });
    Toast('取消订单成功');
  },
  getUserInfo:function(event){
    const userInfo = event.detail.userInfo
    console.log(userInfo)
    if (userInfo) {
      wx.login({
        success:(res) => {
          console.log(res)
          code = res.code
          wx.getUserInfo({
            success: (res) => {
              console.log(res)
              encryptedData = res.encryptedData
              iv = res.iv
              wx.request({
                url: base_url+'/wx/login',
                method:'POST',
                data:{
                  encryptedData,
                  iv,
                  code
                },
                success:(res) => {
                  if(!res.data.success) return
                  console.log(res)
                  wx.setStorageSync('token', res.data.data.token)
                  wx.setStorageSync('openId', res.data.data.openId)
                  this.getData(pageIndex)
                }
              })
            },
          })
        },
        complete: (res) => {},
      })
      this.setData({
        btnShow: false
      })
    }
  },
  getData(pageIndex){
    wx.request({
      url:base_url+'/order/list',
      method:'POST',
      data:{
        pageIndex,
        pageSize
      },
      success:res => {
        console.log(res)
        if(!res.data.success) return
        this.setData({
          orderList:res.data.data.list
        })
      }
    })
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
          this.getData(pageIndex)
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
    pageIndex = 1
    this.getData(pageIndex)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // pageIndex++
    // this.getData(pageIndex)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})