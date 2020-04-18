// components/saleCarForn/saleCarForm.js
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
    city:'',
    brand:'',
    type:'',
    mileage:'',
    price:'',
    phoneNumber:'',
    other:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getCity(event){
      console.log(event.detail.value)
      this.setData({
        city:event.detail.value
      })
    },
    getBrand(event){
      console.log(event.detail.value)
      this.setData({
        brand:event.detail.value
      })
    },
    getType(event){
      console.log(event.detail.value)
      this.setData({
        type:event.detail.value
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
    getPhoneNumber(event){
      console.log(event.detail.value)
      this.setData({
        phoneNumber:event.detail.value
      })
    },
    getOther(event){
      console.log(event.detail.value)
      this.setData({
        other:event.detail.value
      })
    },
    publishInfo(){
      console.log('publish')
      wx.navigateTo({
        url: '/pages/publishSuccess/publishSuccess',
      })
    }
  }
})
