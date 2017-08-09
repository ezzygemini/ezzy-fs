const fsPlus = require('../../index');
let file;

describe('fs-plug', () => {

  beforeAll(() => {
    file = fsPlus.normalize(__dirname + '/../../index.js');
  });

  it('should check if a file exists properly', done => {
    fsPlus.existsPromise(file)
      .then(e => e ? done() : fail());
  });

  it('should read a file properly', done => {
    fsPlus.readFilePromise(file)
      .then(() => done(), e => fail(e))
  });

});
