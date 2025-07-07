module.exports = {
  presets: [
    ['@vue/cli-plugin-babel/preset', {
      targets: {
        esmodules: true 
      },
      useBuiltIns: false, 
      corejs: false, 
      exclude: [
        '@babel/plugin-transform-classes',
        '@babel/plugin-transform-spread'  
      ]
    }]
  ],
  plugins: [
    '@babel/plugin-syntax-jsx' 
  ]
}
