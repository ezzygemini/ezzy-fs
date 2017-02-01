const fs = require('fs');
const path = require('path');

fs.readFilePromise = rawFile => new Promise((resolve, reject) => {
  fs.readFile(path.normalize(rawFile), (e, content) =>
    e ? reject(e) : resolve(content));
});

module.exports = fs;
