const App = getApp();

Page({
  data: {

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

  //点击【学校相关】触发
  onClick_toPageUniversity: function ()
  {
    wx.navigateTo({
      url: '/pages/university/book/index?name=universityintroduction',
    });
  },
  
  //点击【石牌校区】触发
  onClick_toPageShipai: function ()
  {
    wx.navigateTo({
      url: '/pages/shipai/index/index',
    });
  },

  //点击【大学城校区】触发
  onClick_toPageDaxuecheng: function ()
  {
    wx.navigateTo({
      url: '/pages/daxuecheng/index/index',
    });
  },

  //点击【南海校区】触发
  onClick_toPageNanhai: function ()
  {
    wx.navigateTo({
      url: '/pages/nanhai/index/index',
    });
  }
})