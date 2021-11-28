"use strict";
// 面板的内容
exports.template = `
<div>Hello</div>
<div><ui-button>increasing</ui-button></div>
<div><span>Num: </span><span class="num">-</span></div>
`;
// 面板上的样式
exports.style = 'div { color: yellow; }';
// 快捷选择器
exports.$ = {
    elem: 'div',
    button: 'ui-button',
    num: '.num',
};
exports.methods = {
    increasing(num) {
        console.log('mypanel');
        this.$.num.innerHTML = num;
    },
};
exports.ready = async function () {
    this.$.elem.innerHTML = 'Hello World';
    this.$.button.addEventListener('confirm', () => {
        console.log('click');
        Editor.Message.send('mytools', 'increasing');
    });
    this.$.num.innerHTML = await Editor.Message.request('mytools', 'query-num');
};
exports.close = function () { };
