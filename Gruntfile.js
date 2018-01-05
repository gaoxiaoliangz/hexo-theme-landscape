module.exports = function (grunt) {
  const webpack = require("webpack")
  const webpackConfig = require("./webpack.config.js")

  grunt.loadNpmTasks('grunt-webpack')
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          sourcemap: 'none',
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
      },
      dev: {
        options: {
          sourcemap: 'inline',
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
        tasks: ['sass:dev'],
        options: {
          spawn: true
        }
      },
      scripts: {
        files: 'source/_src/**/*.*',
        tasks: ['webpack'],
        options: {
          spawn: true
        }
      }
    }
  })

  grunt.registerTask('build', ['sass'])
  grunt.registerTask('default', ['watch'])
}
