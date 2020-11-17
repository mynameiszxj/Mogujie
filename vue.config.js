module.exports = {
   configureWebpack: {
      //配置路径名
      resolve: {
         alias: {
            'views': '@/view',
            'common': '@/common',
            'components': '@/components',
            'assets': '@/assets',
            'network': '@/network'
         }
      }
   }
}