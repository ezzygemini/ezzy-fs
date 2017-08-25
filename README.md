# ezzy-fs
[![Build Status](https://travis-ci.org/ezzygemini/ezzy-fs.svg?branch=master)](https://travis-ci.org/ezzygemini/ezzy-fs)
[![Coverage Status](https://coveralls.io/repos/github/ezzygemini/ezzy-fs/badge.svg?branch=master)](https://coveralls.io/github/ezzygemini/ezzy-fs?branch=master)

This wrapper enhances the fs module to include additional methods that return promises, rather than passing callbacks.

```javascript
    const fs = require('ezzy-fs');
    
    fs.readdirPromise(__dirname)
        .then(items => {
          // ... handle items
        });
```