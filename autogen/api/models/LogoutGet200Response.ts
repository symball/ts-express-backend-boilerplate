/* tslint:disable */
/* eslint-disable */
/**
 * Backend BoilerPlate
 * An example NodeJS express project used for bootstrapping services
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: contact@simonball.me
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface LogoutGet200Response
 */
export interface LogoutGet200Response {
    /**
     * 
     * @type {string}
     * @memberof LogoutGet200Response
     */
    message?: string;
}

/**
 * Check if a given object implements the LogoutGet200Response interface.
 */
export function instanceOfLogoutGet200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LogoutGet200ResponseFromJSON(json: any): LogoutGet200Response {
    return LogoutGet200ResponseFromJSONTyped(json, false);
}

export function LogoutGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LogoutGet200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function LogoutGet200ResponseToJSON(value?: LogoutGet200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
    };
}

