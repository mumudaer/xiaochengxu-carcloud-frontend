// components/goodsList/goodsList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    businessTag:String,
    // goodsList:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    imageURL:'/images/wash.jpg',

    goodsList:[
      {
        title:'商品标题',
        desc:'描述信息',
        price:10.00,
        saled:300
      },
      {
        title:'商品标题',
        desc:'描述信息',
        price:10.00,
        saled:300
      },
      {
        title:'商品标题',
        desc:'描述信息',
        price:10.00,
        saled:300
      },
      {
        title:'商品标题',
        desc:'描述信息',
        price:10.00,
        saled:300
      },
      {
        title:'商品标题',
        desc:'描述信息',
        price:10.00,
        saled:300
      },
    ]
  },

  
  /**
   * 组件的方法列表
   */
  methods: {
    toDetail(){
      // console.log(this.data.businessTag)
      wx.navigateTo({
        url: '/pages/goodsDetail/goodsDetail',
      })
    }
  }
})
