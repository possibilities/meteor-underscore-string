Package.describe({
  summary: "underscore.string repackaged for Meteor"
});

Package.on_use(function (api) {
  api.use('meteor', {unordered: true});
	api.use('underscore', ['client', 'server']);

	api.export('_s');

  api.add_files(['pre.js','lib/underscore.string/lib/underscore.string.js','post.js']);

	if (typeof api.export !== 'undefined') {
		api.use('webapp', 'server');
	}

});
