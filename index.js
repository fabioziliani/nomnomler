"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const nomnoml = require("nomnoml");
async function render() {
    const target = process.argv[3] || (process.argv[2] + '.svg');
    await fs_1.promises.writeFile(target, nomnoml.renderSvg(await fs_1.promises.readFile(process.argv[2], 'utf8')), 'utf8');
    console.log('Written ' + target);
}
let timer;
function w() {
    fs_1.watch(process.argv[2], 'utf8', (e, f) => {
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(() => render().catch(err => console.error(err)), 100);
    });
}
render().then(w).catch(err => console.error(err));
//# sourceMappingURL=index.js.map