const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const storage = {
  getToken:() => {
    return wx.getStorageSync('token')
  },
  setToken:(token) => {
    return wx.setStorageSync('token',token)
  },
  getOpenId:() => {
    return wx.getStorageSync('openId')
  },
  setOpenId:(openId) => {
    return wx.setStorageSync('openId',openId)
  },
}

module.exports = {
  formatTime,
  storage
}
