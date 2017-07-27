//index.js
//获取应用实例
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'resources/img_1.jpeg',
      'resources/img_2.jpeg',
      'resources/img_3.jpeg'
    ],
    workList1: [
      'http://7xqdw6.com1.z0.glb.clouddn.com/code1.png',
      'http://7xqdw6.com1.z0.glb.clouddn.com/code2.png',
      'http://7xqdw6.com1.z0.glb.clouddn.com/code3.png'
    ],
    workList2: [
      'http://7xqdw6.com1.z0.glb.clouddn.com/code4.png',
      'http://7xqdw6.com1.z0.glb.clouddn.com/code5.png',
      'http://7xqdw6.com1.z0.glb.clouddn.com/code6.png'
    ],
    workList3: [
      'resources/design_1.png',
      'resources/design_2.png',
      'resources/design_3.png'
    ],
    workList4: [
      'resources/design_4.png',
      'resources/design_5.png',
      'resources/design_6.png'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })

  },
  onBtnClicked: function(event){
    console.log("navitageto")
    wx.navigateTo({
      url: '../component/index'
    })
  },
  goForCode: function(event){
    console.log("goForCode clicked");
    wx.navigateTo({
      url: '../code/code'
    })
  }

})


  // "tabBar":{
  //   "list":[{
  //     "pagePath": "pages/homepage/home",
  //     "text": "首页",
  //     "iconPath":"images/home.png",
  //     "selectedIconPath":"images/selected_home.png"
  //   },{
  //     "pagePath":"pages/product/product",
  //     "text":"产品",
  //     "iconPath":"images/product.png",
  //     "selectedIconPath": "images/selected_product.png"
  //   },{
  //     "pagePath":"pages/news/news",
  //     "text":"新闻",
  //     "iconPath":"images/news.png",
  //     "selectedIconPath": "images/selected_news.png"
  //   }
  //   ]
  // }