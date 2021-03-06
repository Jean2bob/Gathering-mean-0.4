'use strict';

module.exports = {
	client: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.min.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.min.css',
				'public/lib/bootstrap/dist/css/select.min.css',
			],
			js: [
				'public/lib/angular/angular.min.js',
				'public/lib/angular-resource/angular-resource.min.js',
				'public/lib/angular-animate/angular-animate.min.js',
				'public/lib/angular-sanitize/angular-sanitize.min.js',
				'public/lib/angular-ui-router/release/angular-ui-router.min.js',
				'public/lib/angular-ui-utils/ui-utils.min.js',
				'public/lib/angular-ui-select/dist/select.min.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
				'public/lib/angular-file-upload/angular-file-upload.min.js',

                'public/lib/Snap.svg/dist/snap.svg-min.js',
                'public/lib/EaselJS/lib/easeljs-0.8.0.min.js',
                'public/lib/TweenJS/lib/tweenjs-0.6.0.min.js',
                'public/lib/PreloadJS/lib/preloadjs-0.6.0.min.js',
                'public/lib/SoundJS/lib/soundjs-0.6.0.min.js',
                'public/lib/SoundJS/lib/flashaudioplugin-0.6.0.min.js',
                'public/lib/EaselJS/lib/movieclip-0.8.0.min.js'
			]
		},
		css: 'public/dist/application.min.css',
		js: 'public/dist/application.min.js'
	}
};
