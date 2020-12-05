"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NomView_1 = require("./NomView");
const test = NomView_1.nomnomler();
const welcome = test.el('welcome', 'introduzione e benvenuto');
const map = test.el('map', 'mostra la mappa con i segnalini degli elementi');
const qrScan = test.el('qrScan');
const elemento = test.el('elemento', 'mostra tutti gli elementi multimediali collegati all\'elemento');
test.join(welcome, map, qrScan, elemento);
test.join(map, elemento);
console.log(test.toLink());
//# sourceMappingURL=test.js.map