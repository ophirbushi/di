import 'reflect-metadata';
import { Inject, InjectionToken, Injector } from '../src';

class TestA {
    testProp = 'works!';
}

class TestB {
    constructor( @Inject(TestA) private testA: TestA) { }
}

const injector = new Injector();

const instance = injector.inject(TestB);

console.log(instance);

console.log('ok');
