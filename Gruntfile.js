module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('bower', function() {
      var exec = require('child_process').exec;
      var cb = this.async();
      exec('bower install', {cwd: './frontend'}, function(err, stdout, stderr) {
          console.log(stdout);
          cb();
      });
  });

  grunt.registerTask('npm', function() {
      var exec = require('child_process').exec;
      var cb = this.async();
      exec('npm install', function(err, stdout, stderr) {
          console.log(stdout);
          cb();
      });
  });

  grunt.registerTask('server', function() {
      var exec = require('child_process').exec;
      var cb = this.async();
      exec('npm start', function(err, stdout, stderr) {
          console.log(stdout);
          cb();
      });
  });  

  grunt.registerTask('init', ['bower', 'npm']);
  grunt.registerTask('start', ['init', 'server']);

};