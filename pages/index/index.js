//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  //事件处理函数
  
  onLoad: function () {
    
  },
  //change标签
  onClick(event) {
    wx.showToast({
      title: `点击标签 ${event.detail.name}`,
    });
  }
})
