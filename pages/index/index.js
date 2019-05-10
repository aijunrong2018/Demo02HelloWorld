
var appInterface = getApp()

console.log(appInterface.gloubleData)

Page({

  clickMe() {
    this.setData({ showtime: 'hello miss you ' })
    this.setData({ msg: 'yes I miss you too' })
  },  
 
  data: {
      showtime: appInterface.gloubleData,
      array:[{bangding:'hhaha '},{bangding:'dainyixa '}],
      bangding:'你不点一下吗',
      array1: ['tomg',2,true,3],

      view:'WEBVIEW',
      '4': 'TT',
       staffA: { firstName: 'Hulk', lastName: 'Hu' },
       staffB: { firstName: 'Shang', lastName: 'You' },
       staffC: { firstName: 'Gideon', lastName: 'Lin' },

    a: 1,
    b: 2,
    c: 3,
    length : 7
    },

  tapName(event) {
    console.log(event)
  }

})