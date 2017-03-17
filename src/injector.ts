import { InjectionToken } from './injection-token';

export class Injector {
    _instances: any[] = [];

    inject(cls: { new (...args: any[]): any }): any {
        if (this._instances[cls.toString()] != null) {
            return this._instances[cls.toString()];
        }

        const params: any[] = Reflect.getMetadata(InjectionToken, cls) || [];

        const paramInstances = params.map(p => this.inject(p));

        const instance = new cls(...paramInstances);

        this._instances[cls.toString()] = instance;

        return instance;
    }
}
 