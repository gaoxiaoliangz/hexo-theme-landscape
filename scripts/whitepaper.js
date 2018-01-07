// check if str1 ends with str2
function ends_with(str1, str2) {
  return str1.indexOf(str2) === str1.length - str2.length
}

// get config under the namespace of `theme_name`
hexo.extend.helper.register('wp_get_config', function(key) {
  try {
    return this.config[this.theme['theme_name']][key]
  } catch (error) {
    console.error(error)
  }
})

hexo.extend.helper.register('css_v', function(asset_path) {
  try {
    const asset_path2 = ends_with(asset_path, '.css') ? asset_path : asset_path + '.css'
    return hexo.extend.helper.store.css.call(this, `${asset_path2}?v=${this.theme.version}`)
  } catch (error) {
    console.error(error)
  }
})

hexo.extend.helper.register('js_v', function(asset_path) {
  try {
    const asset_path2 = ends_with(asset_path, '.js') ? asset_path : asset_path + '.js'
    return hexo.extend.helper.store.js.call(this, `${asset_path2}?v=${this.theme.version}`)
  } catch (error) {
    console.error(error)
  }
})
