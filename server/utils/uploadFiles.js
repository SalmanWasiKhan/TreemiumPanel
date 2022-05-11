const fs = require('fs');

const uploadFiles = (files, directory = 'others') => {
  if (files.length && files.length > 0) {
    const paths = [];

    files.map(async (file) => {
      const dir = `/public/uploads/${directory}/`;
      const path = dir + Date.now() + file.name;

      if (!fs.existsSync(process.cwd() + dir)) {
        fs.mkdirSync(process.cwd() + dir, {
          recursive: true,
        });
      }

      file.mv(process.cwd() + path, function (err) {
        if (err) throw err;
      });

      paths.push(path);
    });

    return paths;
  } else {
    const dir = `/public/uploads/${directory}/`;
    const path = dir + Date.now() + files.name;

    if (!fs.existsSync(process.cwd() + dir)) {
      fs.mkdirSync(process.cwd() + dir, {
        recursive: true,
      });
    }

    files.mv(process.cwd() + path, function (err) {
      if (err) throw err;
    });

    return path;
  }
};

module.exports = uploadFiles;
