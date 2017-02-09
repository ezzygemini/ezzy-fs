const fs = require('fs');
const path = require('path');

/**
 * Turns an fs function into a promise.
 * @param {string} method The name of the method to use.
 * @param {[*]} args Any number of arguments sent to the function.
 */
const promisify = (method, args) => new Promise((resolve, reject) => {
  fs[method]
    .apply(fs, [].concat(args, (e, out) => e ? reject(e) : resolve(out)));
});

/**
 * Exposure to the normalize method of path. This avoids an extra dependency.
 * @method normalize
 * @memberOf fs
 */
path.normalize = fs.normalize;


let methodName;
[
  /**
   * @method access
   * @memberOf fs
   * @parm path
   * @param {*} [model]
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method accessSync
   * @memberOf fs
   * @parm path
   * @param {*} [model]
   * @returns {*}
   */
  /**
   * @method accessPromise
   * @memberOf fs
   * @parm path
   * @param {*} [model]
   * @returns {Promise}
   */
  "access",
  /**
   * @method appendFile
   * @memberOf fs
   * @param {*} file
   * @param {*} data
   * @param {*} [options]
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method appendFileSync
   * @memberOf fs
   * @param {*} file
   * @param {*} data
   * @param {*} [options]
   * @returns {*}
   */
  /**
   * @method appendFilePromise
   * @memberOf fs
   * @param {*} file
   * @param {*} data
   * @param {*} [options]
   * @returns {Promise}
   */
  "appendFile",
  /**
   * @method chmod
   * @memberOf fs
   * @param {*} path
   * @param {*} mode
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method chmodSync
   * @memberOf fs
   * @param {*} path
   * @param {*} mode
   * @returns {*}
   */
  /**
   * @method chmodPromise
   * @memberOf fs
   * @param {*} path
   * @param {*} mode
   * @returns {Promise}
   */
  "chmod",
  /**
   * @method chown
   * @memberOf fs
   * @param {*} path
   * @param {*} uid
   * @param {*} gid
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method chownSync
   * @memberOf fs
   * @param {*} path
   * @param {*} uid
   * @param {*} gid
   * @returns {*}
   */
  /**
   * @method chownPromise
   * @memberOf fs
   * @param {*} path
   * @param {*} uid
   * @param {*} gid
   * @returns {Promise}
   */
  "chown",
  /**
   * @method close
   * @memberOf fs
   * @param {*} fd
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method closeSync
   * @memberOf fs
   * @param {*} fd
   * @returns {*}
   */
  /**
   * @method closePromise
   * @memberOf fs
   * @param {*} fd
   * @returns {Promise}
   */
  "close",
  /**
   * @method exists
   * @memberOf fs
   * @param {*} path
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method existsSync
   * @memberOf fs
   * @param {*} path
   * @returns {*}
   */
  /**
   * @method existsPromise
   * @memberOf fs
   * @param {*} path
   * @returns {Promise}
   */
  "exists",
  /**
   * @method fchmod
   * @memberOf fs
   * @param {*} fd
   * @param {*} mode
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method fchmodSync
   * @memberOf fs
   * @param {*} fd
   * @param {*} mode
   * @returns {*}
   */
  /**
   * @method fchmodPromise
   * @memberOf fs
   * @param {*} fd
   * @param {*} mode
   * @returns {Promise}
   */
  "fchmod",
  /**
   * @method fchown
   * @memberOf fs
   * @param {*} fd
   * @param {*} uid
   * @param {*} gid
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method fchownSync
   * @memberOf fs
   * @param {*} fd
   * @param {*} uid
   * @param {*} gid
   * @returns {*}
   */
  /**
   * @method fchownPromise
   * @memberOf fs
   * @param {*} fd
   * @param {*} uid
   * @param {*} gid
   * @returns {Promise}
   */
  "fchown",
  /**
   * @method fdatasync
   * @memberOf fs
   * @param {*} fd
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method fdatasyncSync
   * @memberOf fs
   * @param {*} fd
   * @returns {*}
   */
  /**
   * @method fdatasyncPromise
   * @memberOf fs
   * @param {*} fd
   * @returns {Promise}
   */
  "fdatasync",
  /**
   * @method fstat
   * @memberOf fs
   * @param {*} fd
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method fstatSync
   * @memberOf fs
   * @param {*} fd
   * @returns {*}
   */
  /**
   * @method fstatPromise
   * @memberOf fs
   * @param {*} fd
   * @returns {Promise}
   */
  "fstat",
  /**
   * @method fsync
   * @memberOf fs
   * @param {*} fd
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method fsyncSync
   * @memberOf fs
   * @param {*} fd
   * @returns {*}
   */
  /**
   * @method fsyncPromise
   * @memberOf fs
   * @param {*} fd
   * @returns {Promise}
   */
  "fsync",
  /**
   * @method ftruncate
   * @memberOf fs
   * @param {*} fd
   * @param {*} len
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method ftruncateSync
   * @memberOf fs
   * @param {*} fd
   * @param {*} len
   * @returns {*}
   */
  /**
   * @method ftruncatePromise
   * @memberOf fs
   * @param {*} fd
   * @param {*} len
   * @returns {Promise}
   */
  "ftruncate",
  /**
   * @method futimes
   * @memberOf fs
   * @param {*} fd
   * @param {*} atime
   * @param {*} mtime
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method futimesSync
   * @memberOf fs
   * @param {*} fd
   * @param {*} atime
   * @param {*} mtime
   * @returns {*}
   */
  /**
   * @method futimesPromise
   * @memberOf fs
   * @param {*} fd
   * @param {*} atime
   * @param {*} mtime
   * @returns {Promise}
   */
  "futimes",
  /**
   * @method lchmod
   * @memberOf fs
   * @param {*} path
   * @param {*} mode
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method lchmodSync
   * @memberOf fs
   * @param {*} path
   * @param {*} mode
   * @returns {*}
   */
  /**
   * @method lchmodPromise
   * @memberOf fs
   * @param {*} path
   * @param {*} mode
   * @returns {Promise}
   */
  "lchmod",
  /**
   * @method lchown
   * @memberOf fs
   * @param {*} path
   * @param {*} uid
   * @param {*} gid
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method lchownSync
   * @memberOf fs
   * @param {*} path
   * @param {*} uid
   * @param {*} gid
   * @returns {*}
   */
  /**
   * @method lchownPromise
   * @memberOf fs
   * @param {*} path
   * @param {*} uid
   * @param {*} gid
   * @returns {Promise}
   */
  "lchown",
  /**
   * @method link
   * @memberOf fs
   * @oaram existingPath
   * @param {*} newPath
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method linkSync
   * @memberOf fs
   * @oaram existingPath
   * @param {*} newPath
   * @returns {*}
   */
  /**
   * @method linkPromise
   * @memberOf fs
   * @oaram existingPath
   * @param {*} newPath
   * @returns {Promise}
   */
  "link",
  /**
   * @method lstat
   * @memberOf fs
   * @param {*} path
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method lstatSync
   * @memberOf fs
   * @param {*} path
   * @returns {*}
   */
  /**
   * @method lstatPromise
   * @memberOf fs
   * @param {*} path
   * @returns {Promise}
   */
  "lstat",
  /**
   * @method mkdir
   * @memberOf fs
   * @param {*} path
   * @param {*} [mode]
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method mkdirSync
   * @memberOf fs
   * @param {*} path
   * @param {*} [mode]
   * @returns {*}
   */
  /**
   * @method mkdirPromise
   * @memberOf fs
   * @param {*} path
   * @param {*} [mode]
   * @returns {Promise}
   */
  "mkdir",
  /**
   * @method mkdtemp
   * @memberOf fs
   * @param {*} prefix
   * @param {*} [options]
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method mkdtempSync
   * @memberOf fs
   * @param {*} prefix
   * @param {*} [options]
   * @returns {*}
   */
  /**
   * @method mkdtempPromise
   * @memberOf fs
   * @param {*} prefix
   * @param {*} [options]
   * @returns {Promise}
   */
  "mkdtemp",
  /**
   * @method open
   * @memberOf fs
   * @param {*} path
   * @param {*} flags
   * @param {*} [mode]
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method openSync
   * @memberOf fs
   * @param {*} path
   * @param {*} flags
   * @param {*} [mode]
   * @returns {*}
   */
  /**
   * @method openPromise
   * @memberOf fs
   * @param {*} path
   * @param {*} flags
   * @param {*} [mode]
   * @returns {Promise}
   */
  "open",
  /**
   * @method read
   * @memberOf fs
   * @param {*} fd
   * @param {*} buffer
   * @param {*} offset
   * @param {*} length
   * @param {*} position
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method readSync
   * @memberOf fs
   * @param {*} fd
   * @param {*} buffer
   * @param {*} offset
   * @param {*} length
   * @param {*} position
   * @returns {*}
   */
  /**
   * @method readPromise
   * @memberOf fs
   * @param {*} fd
   * @param {*} buffer
   * @param {*} offset
   * @param {*} length
   * @param {*} position
   * @returns {Promise}
   */
  "read",
  /**
   * @method readdir
   * @memberOf fs
   * @param {*} path
   * @param {*} [options]
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method readdirSync
   * @memberOf fs
   * @param {*} path
   * @param {*} [options]
   * @returns {*}
   */
  /**
   * @method readdirPromise
   * @memberOf fs
   * @param {*} path
   * @param {*} [options]
   * @returns {Promise}
   */
  "readdir",
  /**
   * @method readFile
   * @memberOf fs
   * @param {*} file
   * @param {*} [opitons]
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method readFileSync
   * @memberOf fs
   * @param {*} file
   * @param {*} [opitons]
   * @returns {*}
   */
  /**
   * @method readFilePromise
   * @memberOf fs
   * @param {*} file
   * @param {*} [opitons]
   * @returns {Promise}
   */
  "readFile",
  /**
   * @method readlink
   * @memberOf fs
   * @param {*} path
   * @param {*} [options]
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method readlinkSync
   * @memberOf fs
   * @param {*} path
   * @param {*} [options]
   * @returns {*}
   */
  /**
   * @method readlinkPromise
   * @memberOf fs
   * @param {*} path
   * @param {*} [options]
   * @returns {Promise}
   */
  "readlink",
  /**
   * @method realpath
   * @memberOf fs
   * @param {*} path
   * @param {*} [options]
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method realpathSync
   * @memberOf fs
   * @param {*} path
   * @param {*} [options]
   * @returns {*}
   */
  /**
   * @method realpathPromise
   * @memberOf fs
   * @param {*} path
   * @param {*} [options]
   * @returns {Promise}
   */
  "realpath",
  /**
   * @method rename
   * @memberOf fs
   * @param {*} oldPath
   * @param {*} newPath
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method renameSync
   * @memberOf fs
   * @param {*} oldPath
   * @param {*} newPath
   * @returns {*}
   */
  /**
   * @method renamePromise
   * @memberOf fs
   * @param {*} oldPath
   * @param {*} newPath
   * @returns {Promise}
   */
  "rename",
  /**
   * @method rmdir
   * @memberOf fs
   * @param {*} path
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method rmdirSync
   * @memberOf fs
   * @param {*} path
   * @returns {*}
   */
  /**
   * @method rmdirPromise
   * @memberOf fs
   * @param {*} path
   * @returns {Promise}
   */
  "rmdir",
  /**
   * @method stat
   * @memberOf fs
   * @param {*} path
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method statSync
   * @memberOf fs
   * @param {*} path
   * @returns {*}
   */
  /**
   * @method statPromise
   * @memberOf fs
   * @param {*} path
   * @returns {Promise}
   */
  "stat",
  /**
   * @method symlink
   * @memberOf fs
   * @param {*} target
   * @param {*} path
   * @param {*} [type]
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method symlinkSync
   * @memberOf fs
   * @param {*} target
   * @param {*} path
   * @param {*} [type]
   * @returns {*}
   */
  /**
   * @method symlinkPromise
   * @memberOf fs
   * @param {*} target
   * @param {*} path
   * @param {*} [type]
   * @returns {Promise}
   */
  "symlink",
  /**
   * @method truncate
   * @memberOf fs
   * @param {*} path
   * @param {*} len
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method truncateSync
   * @memberOf fs
   * @param {*} path
   * @param {*} len
   * @returns {*}
   */
  /**
   * @method truncatePromise
   * @memberOf fs
   * @param {*} path
   * @param {*} len
   * @returns {Promise}
   */
  "truncate",
  /**
   * @method unlink
   * @memberOf fs
   * @param {*} path
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method unlinkSync
   * @memberOf fs
   * @param {*} path
   * @returns {*}
   */
  /**
   * @method unlinkPromise
   * @memberOf fs
   * @param {*} path
   * @returns {Promise}
   */
  "unlink",
  /**
   * @method unwatchFile
   * @memberOf fs
   * @param {*} filename
   * @param {*} [listener]
   * @returns {*}
   */
  // "unwatchFile",
  /**
   * @method utimes
   * @memberOf fs
   * @param {*} path
   * @param {*} atime
   * @param {*} mtime
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method utimesSync
   * @memberOf fs
   * @param {*} path
   * @param {*} atime
   * @param {*} mtime
   * @returns {*}
   */
  /**
   * @method utimesPromise
   * @memberOf fs
   * @param {*} path
   * @param {*} atime
   * @param {*} mtime
   * @returns {Promise}
   */
  "utimes",
  /**
   * @method watch
   * @memberOf fs
   * @param {*} filename
   * @param {*} [options]
   * @param {*} [listener]
   * @returns {*}
   */
  // "watch",
  /**
   * @method watchFile
   * @memberOf fs
   * @param {*} filename
   * @param {*} [options]
   * @param {*} listener
   */
  // "watchFile",
  /**
   * @method write
   * @memberOf fs
   * @param {*} fd
   * @param {*} buffer
   * @param {*} [offset]
   * @param {*} [length]
   * @param {*} [position]
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method write
   * @memberOf fs
   * @param {*} fd
   * @param {*} string
   * @param {*} [position]
   * @param {*} [encoding]
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method writeSync
   * @memberOf fs
   * @param {*} fd
   * @param {*} buffer
   * @param {*} [offset]
   * @param {*} [length]
   * @param {*} [position]
   * @returns {*}
   */
  /**
   * @method writeSync
   * @memberOf fs
   * @param {*} fd
   * @param {*} string
   * @param {*} [position]
   * @param {*} [encoding]
   * @returns {*}
   */
  /**
   * @method writePromise
   * @memberOf fs
   * @param {*} fd
   * @param {*} buffer
   * @param {*} [offset]
   * @param {*} [length]
   * @param {*} [position]
   * @returns {Promise}
   */
  /**
   * @method writePromise
   * @memberOf fs
   * @param {*} fd
   * @param {*} string
   * @param {*} [position]
   * @param {*} [encoding]
   * @returns {Promise}
   */
  "write",
  /**
   * @method writeFile
   * @memberOf fs
   * @param {*} file
   * @param {*} data
   * @param {*} [options]
   * @param {*} callback
   * @returns {*}
   */
  /**
   * @method writeFileSync
   * @memberOf fs
   * @param {*} file
   * @param {*} data
   * @param {*} [options]
   * @returns {*}
   */
  /**
   * @method writeFilePromise
   * @memberOf fs
   * @param {*} file
   * @param {*} data
   * @param {*} [options]
   * @returns {Promise}
   */
  "writeFile"
].forEach(method => {

  methodName = `${method}Promise`;

  if (!fs[methodName]) {
    fs[methodName] = (...args) => promisify(method, args);
  }

});


module.exports = fs;
