// This exports object was created in pre.js. Now copy the `_` object from it
// into the package-scope variable `_`, which will get exported.
_s = exports._s;

// Mix in non-conflict functions to Underscore namespace if you want
_.str = _s;

_.mixin(_.str.exports());

// All functions, include conflict, will be available through _.str object
_.str.include('Underscore.string', 'string'); // => true
