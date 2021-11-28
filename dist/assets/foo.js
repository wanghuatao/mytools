"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Foo = exports.value = void 0;
/// foo.ts
const cc_1 = require("cc");
exports.value = 123;
const { ccclass, property } = cc_1._decorator;
let Foo = class Foo extends cc_1.Component {
    start() {
        console.log('foo');
    }
};
Foo = __decorate([
    ccclass('Foo')
], Foo);
exports.Foo = Foo;
