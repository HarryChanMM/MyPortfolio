module.exports = function(grunt){
grunt.loadNpmTasks('grunt-responsive-images');
grunt.initConfig({
  responsive_images: {
    myTask: {
      options: {
        sizes: [{
          width: 320,
          height: 240
        },{
          name: 'large',
          width: 640
        },{
          name: "large",
          width: 1024,
          suffix: "_x2",
          quality: 60
        }]
      },
      files: [{
        expand: true,
        src: ['**.{JPG,gif,png}'],
        cwd: 'image/',
        dest: 'img/'
      }]
    }
  },
})

grunt.registerTask('default', ['responsive_images']);
}