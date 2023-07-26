const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    'index': {
      entry: './src/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
    },
    'member': {
      entry: './src/Member/main.js',
      template: 'public/index.html',
      title: 'Member',
      chunks: [ 'chunk-vendors', 'chunk-common', 'member' ]
    },
    'admin': {
      entry: './src/Admin/main.js',
      template: 'public/index.html',
      title: 'Admin',
      chunks: [ 'chunk-vendors', 'chunk-common', 'admin' ]
    }
  },
  devServer: {
    proxy: 'http://localhost/',
    }
})

// module.exports = {
//   pages: {
//     'index': {
//       entry: './src/main.js',
//       template: 'public/index.html',
//       title: 'Home',
//       chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
//     },
//     'siswa': {
//       entry: './src/siswa/main.js',
//       template: 'public/index.html',
//       title: 'Siswa',
//       chunks: [ 'chunk-vendors', 'chunk-common', 'siswa' ]
//     }
//   }
// }