import request from './network.js'


export function getMultiData(){
  return request({
    url: '/HPImageArchive.aspx?format=js&idx=7&n=8&mkt=zh-CN'
  })
}
