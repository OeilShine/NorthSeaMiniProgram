// pages/home/home.js
import {
  getMultiData
}from '../../service/home.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    urltext: '',
    banners: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 请求轮播图数据
    getMultiData().then(res=>{
      // console.log(res)
      // 取出轮播图数据
      const banners = res.data.images;
      // console.log(banners)

      // 将banners放到data中
      this.setData({
        banners
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})