"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nomnomler = void 0;
function elementToString(e) {
    return '[' + [e.id, ...e.content || []].join('|') + ']';
}
function jointToString(j) {
    return `[${j.a}] -> [${j.b}]`;
}
function diagramToString(d) {
    return d.elements.map(elementToString).join('\n') +
        '\n' +
        d.joints.map(jointToString).join('\n');
}
function nomnomler() {
    const d = { elements: [], joints: [] };
    function el(id, ...content) {
        const x = { id, content };
        d.elements.push(x);
        return x;
    }
    function join(...els) {
        if (els.length <= 1)
            throw new Error('Cannot join less then 2 elements');
        for (let i = 0; i < els.length - 1; i++)
            d.joints.push({ a: els[i].id, b: els[i + 1].id });
    }
    function toString() {
        return diagramToString(d);
    }
    function toLink() {
        return diagramToLink(diagramToString(d));
    }
    return { el, join, toLink, toString };
}
exports.nomnomler = nomnomler;
function diagramToLink(testo) {
    return 'http://nomnoml.com/#view/' + encodeURIComponent(testo);
}
//# sourceMappingURL=NomView.js.map