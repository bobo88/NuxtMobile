
module.exports = {
  dev: {
    MODE: 'development',
    ENV_API: 'http://xxxxxxxx:6000'   //测试服务器地址
  },
  test: {
    MODE: 'development',
    ENV_API: 'http://xxxxxxxx:7000'   //测试服务器地址
  },
  prod: {
    MODE: 'production',
    ENV_API: 'https://xxxxxxxxx'  // 正式服务器地址
  }
}