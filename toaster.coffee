# => SRC FOLDER
toast 'src'

	# EXCLUDED FOLDERS (optional)
	# exclude: ['folder/to/exclude', 'another/folder/to/exclude', ... ]

	# => VENDORS (optional)
  # vendors: ['vendors/underscore.js']

	# => OPTIONS (optional, default values listed)
	bare: true
	packaging: true
	# expose: ''
	# minify: true

	# => HTTPFOLDER (optional), RELEASE / DEBUG (required)
	httpfolder: 'release'
	release: 'release/app.js'
	debug: 'release/app-debug.js'
