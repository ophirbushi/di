export declare class Injector {
    _instances: any[];
    inject(cls: {
        new (...args: any[]): any;
    }): any;
}
