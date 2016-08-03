import { _ } from 'meteor/underscore';
import { exec } from 'shelljs';
import later from 'later';
import backup from 'mongodb-backup';

export class Dump {
  constructor({ textSched, root }) {
    this.textSched = textSched;
    this.root = root;
  }

  start(callback) {

    // Interval later..
    later.setInterval(() => {

      // BACKUP
      backup({
        uri: process.env.MONGO_URL,
        root: this.root,
        tar: `${moment().format('MMDDYYYYHHmm')}.tar`
      });

      // https://bunkat.github.io/later/parsers.html#text
    }, later.parse.text(this.textSched));
  }
}
