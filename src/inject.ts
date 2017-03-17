import { InjectionToken } from './injection-token';

export function Inject(token: any): ParameterDecorator {
    return (target: any, propertyKey: string | symbol, propertyIndex: number) => {
        let parameters: any[];

        if (Reflect.hasMetadata(InjectionToken, target)) {
            parameters = Reflect.getMetadata(InjectionToken, target);
        } else {
            parameters = [];
        }

        parameters[propertyIndex] = token;

        Reflect.defineMetadata(InjectionToken, parameters, target);
    };
}