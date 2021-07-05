module.exports = {
  devServer: {
    port:8090,
    proxy: {
      '/soso': {
        target: 'https://c.y.qq.com',
        changeOrigin: true
      },
      "/api":{
        target:"http://192.168.43.166:9999",
        // target:"http://192.168.1.106:9999",
        changeOrigin:true
      }
    }
  }
}