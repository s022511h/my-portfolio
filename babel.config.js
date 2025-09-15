module.exports = {
  presets: [
    ['@vue/cli-plugin-babel/preset', {
      targets: {
        esmodules: true 
      },
      useBuiltIns: 'usage',
      corejs: 3,
      exclude: [
        '@babel/plugin-transform-classes',
        '@babel/plugin-transform-spread'  
      ]
    }]
  ],
  plugins: [
    '@babel/plugin-syntax-jsx'
  ],
  env: {
    legacy: {
      presets: [
        ['@vue/cli-plugin-babel/preset', {
          targets: {
            browsers: ['> 1%', 'last 2 versions', 'not dead']
          },
          useBuiltIns: 'usage',
          corejs: 3
        }]
      ]
    }
  }
}