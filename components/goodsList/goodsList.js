// components/goodsList/goodsList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    businessTag:String,
    goodsList:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    // goodsList:[
    //   {
    //     ID_number:'423434',
    //     serviceName:'商品标题',
    //     serviceDesc:'描述信息',
    //     servicePrice:10.00,
    //     finishNumber:300,
    //     picture:'/images/wash.jpg',
    //     finishNumber:300
    //   },
    //   {
    //     ID_number:'423434',
    //     serviceName:'商品标题',
    //     serviceDesc:'描述信息',
    //     servicePrice:10.00,
    //     finishNumber:300,
    //     picture:'/images/wash.jpg',
    //     finishNumber:300
    //   },
    //   {
    //     ID_number:'423434',
    //     serviceName:'商品标题',
    //     serviceDesc:'描述信息',
    //     servicePrice:10.00,
    //     finishNumber:300,
    //     picture:'/images/wash.jpg',
    //     finishNumber:300
    //   },
    //   {
    //     ID_number:'423434',
    //     serviceName:'商品标题',
    //     serviceDesc:'描述信息',
    //     servicePrice:10.00,
    //     finishNumber:300,
    //     picture:'/images/wash.jpg',
    //     finishNumber:300
    //   },
    //   {
    //     ID_number:'423434',
    //     serviceName:'商品标题',
    //     serviceDesc:'描述信息',
    //     servicePrice:10.00,
    //     finishNumber:300,
    //     picture:'/images/wash.jpg',
    //     finishNumber:300
    //   },
    // ]
  },

  
  /**
   * 组件的方法列表
   */
  methods: {
    toDetail(ev){
      // console.log(ev.target.dataset.item)
      let serviceid = ev.target.dataset.serviceid
      // console.log(this.data.businessTag)
      wx.navigateTo({
        url: `/pages/goodsDetail/goodsDetail?serviceid=${serviceid}`,
      })
    }
  }
})
