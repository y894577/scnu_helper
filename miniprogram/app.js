//app.js
const Towxml = require('/towxml/main');
App({
  globalData: {
    navHeight: 0,
    is_to_index:false
  },
  onLaunch: function ()
  {
    if (!wx.cloud)
    {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    }
    else
    {
      wx.cloud.init({
        env: 'scnu-dev-iyplf',
        traceUser: true,
      });
    }

    //获取状态栏高度
    var that = this;
    wx.getSystemInfo({
      success: function(res)
      {
        that.globalData.navHeight = res.statusBarHeight;
        that.globalData.screenHeight = res.screenHeight;
      }
    });
  },
  //创建一个towxml对象，供其它页面调用
  

  //声明Markdown文件目录路径
  docDir: 'https://7363-scnu-dev-iyplf-1259750702.tcb.qcloud.la/',

  //声明一个数据请求方法
  getText: (url, callback) => {
    wx.request({
      url: url,
      header: {
        'content-type': 'application/octet-stream'
      },
      success: (res) => {
        if (typeof callback === 'function') {
          callback(res);
        };
      }
    });
  },
  towxml : new Towxml()
})
