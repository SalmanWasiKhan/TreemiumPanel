const fs = require('fs');

const removeFiles = (files) => {
  if (typeof files === 'string') {
    const path = files;

    if (fs.existsSync(process.cwd() + path)) {
      fs.unlinkSync(process.cwd() + path);
    }
  } else if (Array.isArray(files)) {
    files.map(async (path) => {
      if (fs.existsSync(process.cwd() + path)) {
        fs.unlinkSync(process.cwd() + path);
      }
    });
  }
};

module.exports = removeFiles;
