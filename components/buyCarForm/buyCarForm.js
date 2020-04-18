// components/buyCarForm/buyCarForm.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    provinceAndCity:'',
    brandTime:'',
    wantedtype:'',
    mileage:'',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getProvinceAndCity(event){
      console.log(event.detail.value)
      this.setData({
        provinceAndCity:event.detail.value
      })
    },
    getBrandTime(event){
      console.log(event.detail.value)
      this.setData({
        brandTime:event.detail.value
      })
    },
    getWantedType(event){
      console.log(event.detail.value)
      this.setData({
        wantedtype:event.detail.value
      })
    },
    getMileage(event){
      console.log(event.detail.value)
      this.setData({
        mileage:event.detail.value
      })
    },
    getPrice(event){
      console.log(event.detail.value)
      this.setData({
        price:event.detail.value
      })
    },

    searchInfo(){
      console.log('search')
      wx.navigateTo({
        url: '/pages/buyCar/buyCar',
      })
    }
  }
})
