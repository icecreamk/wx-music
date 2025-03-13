Page({
  data: {
    pid: '',
    flag: false,
  },
  onLoad({
    pid
  }) {
    const historyFlag = wx.getStorageSync(pid)
    this.setData({
      pid: pid,
      flag: historyFlag
    })
  },
  handleFavor() {
    const newFlag = !this.data.flag
    this.setData({
      flag: newFlag
    })
    wx.setStorageSync(this.data.pid, newFlag)
    wx.showToast({
      title: `${newFlag ? '关注' : '取消'}成功`,
    })
  }
})