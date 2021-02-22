const os = require('os');

// logic here borrowed from noble-uwp: https://github.com/jasongin/noble-uwp
if (os.platform() === 'win32') {
    const ver = os.release().split('.').map(Number);
    if (!(ver[0] > 10 ||
        (ver[0] === 10 && ver[1] > 0) ||
        (ver[0] === 10 && ver[1] === 0 && ver[2] >= 15014))) {
        module.exports = require('@abandonware/noble');
    }

    const Noble = require('@abandonware/noble/lib/noble');
    const { WinrtBindings } = require('./bindings.js');
    module.exports = new Noble(new WinrtBindings());
} else {
    module.exports = require('@abandonware/noble');
}
