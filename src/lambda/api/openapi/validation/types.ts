/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Push {
  id: number;
  type: string;
  name: string;
}

export namespace Pushes {
  /**
   * @description Get all pushes
   * @name GetPushes
   * @request GET:/pushes
   * @response `200` `(Push)[]` Success
   */
  export namespace GetPushes {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Push[];
  }
  /**
   * @description Get a push  by ID
   * @name GetPushById
   * @request GET:/pushes/{id}
   * @response `200` `Push` Success
   */
  export namespace GetPushById {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Push;
  }
}
