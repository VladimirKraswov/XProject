const path = require('path');
const fs = require('fs');

const PWD = process.env.PWD;

const paths = ['ios/Podfile.lock', 'ios/Pods', 'ios/build'];

paths.forEach((p) => {
    const fullPath = path.join(PWD, p);

    if (fs.existsSync(fullPath)) {
        const stat = fs.lstatSync(fullPath);
        const method = stat.isDirectory() ? 'rmdirSync' : 'rmSync';
        fs[method](fullPath, {recursive: true});
    }

    console.info(`${fullPath} - ok`);
});
