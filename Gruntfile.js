module.exports = function (grunt) {
  const webpack = require("webpack")
  const webpackConfig = require("./webpack.config.js")

  grunt.loadNpmTasks('grunt-webpack')
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-watch')

  const scssTask = (isProduction = false) => {
    return {
      options: {
        sourcemap: isProduction ? 'none' : 'inline',
        style: 'compressed',
      },
      files: [
        {
          expand: true,
          cwd: 'source/_src/style',
          src: ['*.scss'],
          dest: 'source/css',
          ext: '.css'
        }
      ]
    }
  }

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: scssTask(true),
      dev: scssTask()
    },
    webpack: {
      dev: webpackConfig,
    },
    watch: {
      options: {
        atBegin: true
      },
      css: {
        files: 'source/_src/**/*.scss',
        tasks: ['sass:dev']
      },
      scripts: {
        files: 'source/_src/**/*.*',
        tasks: ['webpack'],
        options: {
          spawn: false
        }
      }
    }
  })

  grunt.registerTask('build', ['sass'])
  grunt.registerTask('default', ['watch'])
}
