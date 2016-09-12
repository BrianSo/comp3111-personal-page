/**
 * Created by BrianSo on 11/8/2016.
 */
var $ = require('jquery');
var config = require('../config');
var node_path = require('path');

class ApiClient{


    constructor(){
        this.base_path = "";
    }
    async requestInternal(method, path, jsonBody, query, url_params){
        query = query || {};
        jsonBody = jsonBody || {};
        url_params = url_params || {};
        for(var key in url_params){
            path = path.replace(new RegExp(`{${key}}`,'g'), url_params[key]);
        }
        for(var key in query){
            if(new RegExp(`{${key}}`,'g').test(path)) {
                path = path.replace(new RegExp(`{${key}}`, 'g'), `${key}=${query[key]}`);
                delete query[key];
            }
        }
        for(var key in jsonBody){
            path = path.replace(new RegExp(`{${key}}`,'g'), jsonBody[key]);
        }
        path += path.indexOf("?") === -1 ? "?" : "&";

        var url = (config.api_use_https ? "https://" : "http://") +
            node_path.join(config.api_server,this.base_path,path) + $.param(query);

        console.log(query);
        console.log($.param(query));
        console.log(url);

        var options = {
            url:url,
            method:method,
            headers:{}
        };

        if(method !== "GET" || method !== "get"){
            options.headers["Content-type"] = "application/json";
            options.data = JSON.stringify(jsonBody);
        }
        if(this.access_token){
            options.headers["Authorization"] =  `Bearer ${this.access_token}`;
        }

        var result = await new Promise((res,rej) => {
            var handle = function(jqXHR, textStatus){
                if(jqXHR.responseText){
                    var result = JSON.parse(jqXHR.responseText);
                    if(result.success){
                        if(result.data instanceof Array){
                            result.data.pages = result.total_pages;
                            result.data.page = result.current_page;
                            result.data.total = result.total_results;
                        }
                        res(result.data);
                    }else{
                        var error = new Error(result.error);
                        error.status = jqXHR.status;
                        error.xhr = jqXHR;
                        rej(error);
                    }
                }else{
                    var error = new Error(textStatus);
                    error.status = jqXHR.status;
                    error.xhr = jqXHR;
                    rej(error);
                }
            };
            options.success = function(data, textStatus, jqXHR){
                handle(jqXHR,textStatus);
            };
            options.error = function(jqXHR, textStatus){
                handle(jqXHR,textStatus);
            };
            $.ajax(options);
        });
        return result;
    }

    async request(method, path, jsonBody, query, url_params){
        return await this.requestInternal(method,path, jsonBody, query, url_params);
    }
    async post(path,data, query, params){
        return await this.requestInternal('POST',path, data);
    }
    async get(path, data, query, params){
        return await this.requestInternal('GET',path, data, query, params);
    }

    createMethod(method,path){
        var self = this;
        return async function(data, query, params){
            return await self.request(method,path,data,query, params);
        };
    }
}

ApiClient.client = new ApiClient();

export default ApiClient;
