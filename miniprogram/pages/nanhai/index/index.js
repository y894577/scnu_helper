const App = getApp();

Page({
  data: {
    //返回按钮
    text_back: "< 返回",
  },

  onLoad: function (options)
  {
    this.setData({
      navHeight: App.globalData.navHeight + 42
    });
  },

  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  },

  //点击【关于我们】触发
  onClick_aboutUs: function ()
  {
    wx.navigateTo({
      url: '/pages/about/index',
    });
  },

  //点击【新生攻略】触发
  onClick_toPageBook: function ()
  {
    wx.navigateTo({
      url: '/pages/nanhai/book/index?name=schoolintroduction',
    });
  },
  
  //点击【校园导览】触发
  onClick_toPageVisit: function ()
  {
    wx.navigateTo({
      url: '/pages/nanhai/visit/index',
    });
  },

  //点击【交通出行】触发
  onClick_toPagetravel: function ()
  {
    wx.navigateTo({
      url: '/pages/nanhai/travel/index',
    });
  },
  //点击【返回】按钮触发
  onClick_toBack: function () {
    wx.navigateTo({
      url: '/pages/index/index'
    })    
  }
})