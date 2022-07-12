"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRoot = exports.getAllFiles = exports.getFiles = void 0;
const fs = require("fs");
const path = require("path");
function getFiles(dir, ext = /(.js|(?<!.d).ts)$/) {
    return fs.readdirSync(dir).filter(file => ext.test(file)).map(f => path.join(dir, f));
}
exports.getFiles = getFiles;
function getAllFiles(dir) {
    const files = getFiles(dir);
    fs.readdirSync(dir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .forEach((dirent) => {
        files.push(...getAllFiles(path.join(dir, dirent.name)));
    });
    return files;
}
exports.getAllFiles = getAllFiles;
exports.mainRoot = path.dirname(require.main.filename);
__exportStar(require("./converters"), exports);
