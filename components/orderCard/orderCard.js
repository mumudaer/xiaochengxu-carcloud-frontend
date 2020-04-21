// components/orderCard/orderCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    orderDetail:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    cancelOrder:function(){
      this.triggerEvent('cancelReason')
    },
    finshOrder:function(){
      this.triggerEvent('finshOrder')
    }
  }
})
