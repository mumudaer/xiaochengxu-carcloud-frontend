// components/buyCarForm/buyCarForm.js
import {base_url,pageSize} from '../../utils/constant'
import {storage} from '../../utils/util'
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
    priceRange:'',
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
    getPriceRange(event){
      console.log(event.detail.value)
      this.setData({
        priceRange:event.detail.value
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
      const token = storage.getToken() || ''
      wx.request({
        url:base_url+'/goods/carList',
        data:{
          "carType": "",
          "city": "",
          "mileage": "",
          "pageIndex": 1,
          "pageSize": 10,
          "priceRange": "1-100000"
        },
        method:'POST',
        header: {
          'content-type': 'application/json',
          token
        },
        success:res => {
          console.log(res.data.data)
          wx.navigateTo({
            url: `/pages/buyCar/buyCar?carList=${JSON.stringify(res.data.data.list)}`,
          })
        }
      })
    }
  }
})
