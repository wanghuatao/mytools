"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unload = exports.load = exports.methods = void 0;
let num = 0;
/**
 * @en Registration method for the main process of Extension
 * @zh 为扩展的主进程的注册方法
 */
exports.methods = {
    log() {
        console.log('hello world');
    },
    log2() {
        console.log("hello world2");
    },
    openPanel() {
        Editor.Panel.open('mytools');
    },
    queryNum() {
        return num;
    },
    increasing() {
        num++;
        Editor.Message.broadcast('mytools:increasing', num);
    },
    initData(sceneUUID) {
        console.log('scene:ready', sceneUUID);
    },
    assetsRefresh() {
        console.log('assetsRefresh..');
        Editor.Message.broadcast('reload');
    }
};
/**
 * @en Hooks triggered after extension loading is complete
 * @zh 扩展加载完成后触发的钩子
 */
const load = function () { };
exports.load = load;
/**
 * @en Hooks triggered after extension uninstallation is complete
 * @zh 扩展卸载完成后触发的钩子
 */
const unload = function () { };
exports.unload = unload;
