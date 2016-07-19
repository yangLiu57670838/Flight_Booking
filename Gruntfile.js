module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            css: {
                src: ['app/sass/files/**/*.scss'],
                dest: 'app/sass/main.scss'
            }
        },
        sass: {
            options: {
                sourceMap: true,
				outputStyle: 'compressed'
            },
            dist: {
                files: {
                    'assets/css/main.min.css': 'app/sass/files/test.scss'
                }
            }
        },
		watch: {
			css: {
				files: ['app/sass/files/test.scss'],
				task: ['sass']
			}
		}
    });


    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch'); 
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat', 'sass']);
};
