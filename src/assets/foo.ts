
/// foo.ts
import { _decorator, Component, Node } from 'cc';
export const value = 123;
const { ccclass, property } = _decorator;

@ccclass('Foo')
export class Foo extends Component {
    start () {
        console.log('foo');
    }
}