Package.describe({
  name: 'dump',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  shelljs: '0.7.3',
  later: '1.2.0',
  'mongodb-backup': '1.6.3'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.0.1');

  api.use([
    'ecmascript',
    'underscore',

    'momentjs:moment@2.14.4'
  ]);

  api.mainModule('dump.js');
});
