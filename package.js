Package.describe({
  summary: "underscore.string repackaged for Meteor"
});

Package.on_use(function (api) {
  api.add_files('lib/underscore.string/lib/underscore.string.js', 'client');
});
