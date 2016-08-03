Package.describe({
  name: 'yasaricli:dump',
  version: '0.0.3',
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
    'ecmascript@0.4.6',
    'underscore@1.0.9',

    'momentjs:moment@2.14.4'
  ]);

  api.mainModule('dump.js');
});
