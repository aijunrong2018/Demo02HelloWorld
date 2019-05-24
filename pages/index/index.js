var appInterface = getApp()

console.log(appInterface.gloubleData)

Page({

  clickMe() {
    this.setData({
      showtime: 'hello miss you '
    })
    this.setData({
      msg: 'yes I miss you too'
    })
  },

  data: {
    showtime: appInterface.gloubleData,
    array: [{
      bangding: 'hhaha '
    }, {
      bangding: 'dainyixa '
    }],
    bangding: '你不点一下吗',
    array1: ['tomg', 2, true, 3],

    view: 'WEBVIEW',
    '4': 'TT',
    staffA: {
      firstName: 'Hulk',
      lastName: 'Hu'
    },
    staffB: {
      firstName: 'Shang',
      lastName: 'You'
    },
    staffC: {
      firstName: 'Gideon',
      lastName: 'Lin'
    },

    //测试缓存用
    testnum: '12312412412421412' //设置测试参数
  },

  test: function() {
    var num = this.data.testnum;
    wx.setStorage({
      key: 'testNumber',
      data: 'num',
    })
    this.setData({
      showtime: num
    })
  },

  showactionsheet: function () {
    wx.showActionSheet({
      itemList: ['中国', '美国', '日本', '英国'],
      itemColor: "red",
      success: function (res) { 
        if(!res.cancel){
          console.log(res);
        }
      }
    })
  },




  tapName(event) {
    console.log(event)
  }

})