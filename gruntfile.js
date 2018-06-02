//The "wrapper" function
module.exports = function(grunt) {
  
	//Project and task configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
        
        /*Grunt sass to compile SASS to CSS*/
            sass: {
                
                options: {
                    sourceMap: false
                },
                dist: {
                   files: {
                    'css/style.css':
                    'assets/scss/style.scss'
                          }
                      }
                  },
        
        /*Grunt watch*/
            watch: {
                
                sass: {
                    
                    files: [
                        'assets/scss/*.scss'
                        
                    ],
                    
                    tasks: [
                        'sass'
                    ]
                }
            },
        
        /*Uglify to minimize JS*/
            uglify: {
		      my_target: {
		              files: {
			             'javascript/scripts.js': ['assets/javascript/script.js']
		              }
		      }
		    },
        
        /*Jshint to validate files with JSHint*/
        jshint: {
		   all: ['gruntfile.js', 'javascript/**/*.js']
		},
            
        /*to minimize css*/
        cssmin: {
              target: {
                files: [{
                expand: true,
                cwd: 'css',
                src: ['*.css', '!*.min.css'],
                dest: 'css',
                ext: '.min.css'
                }]
        }

	});

	//Loading Grunt plugins and tasks
	require('load-grunt-tasks')(grunt);
    
    
    
	//Custom tasks
	grunt.registerTask('default', ['sass']);
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

};