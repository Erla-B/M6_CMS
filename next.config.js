/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const autoprefixer = require('autoprefixer')
const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  // your other config options
  postcssLoaderOptions: {
    postcssOptions: {
      plugins: [
        autoprefixer,
        postcssPresetEnv({
          browsers: 'last 2 versions',
          stage: 3,
          features: {
            'nesting-rules': true
          }
        })
      ]
    }
  }
}
