//index.js
//获取应用实例
const app = getApp()
import {base_url,pageSize} from '../../utils/constant'
let serviceType = '1'
let pageIndex = 1
Page({
  data: {
    washList:[],
    repaireList:[],
    drugList:[],
  },
  //事件处理函数
  
  onLoad: function () {
    this.getData(pageIndex)
  },
  //change标签
  onClick(event) {
    // wx.showToast({
    //   title: `点击标签 ${event.detail.name}`,
    // });
    console.log(event.detail.name)
    serviceType = event.detail.name
    this.getData()
  },
  getData(pageIndex){
    wx.request({
      url:base_url+'/goods/list',
      method:'POST',
      data:{
        pageIndex,
        pageSize,
        serviceType
      },
      success:res => {
        console.log(res.data)
        if(!res.data.success) return
        if(serviceType === '1'){
          this.setData({
            washList:res.data.data.list
          })
        }else if(serviceType === '2'){
          this.setData({
            repaireList:res.data.data.list
          })
        }else if(serviceType === '3'){
          this.setData({
            drugList:res.data.data.list
          })
        }
        
      }
    })
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
})
