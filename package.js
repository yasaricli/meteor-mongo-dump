Package.describe({
  name: 'yasaricli:dump',
  version: '0.0.1',
  summary: 'In-app Backup for your Mongo Database',
  git: 'https://github.com/yasaricli/meteor-mongo-dump.git',
  documentation: 'README.md'
});

Npm.depends({
  shelljs: '0.7.3',
  later: '1.2.0',
  'mongodb-backup': '1.6.3'
});

Package.onUse(function(api) {
  api.use([
    'ecmascript',
    'underscore',

    'momentjs:moment@2.14.4'
  ]);

  api.mainModule('dump.js');
});
