
export class RequestException extends Error {
    code = 0;
    constructor(message, code) {
        super(message);
        this.code = code;
    }
}

export default class RequestService {
    static BASIC_URL = "/api/";
    static accessToken = null;
    
    static async request(method, url, data, headers = {}) {
        var headers = headers;
        if(!headers['Accept']) {
            headers['Accept'] = 'application/json';
        }
        if(!headers['Content-Type']) {
            headers['Content-Type'] = 'application/json';
        } else if(headers['Content-Type'] == 'multipart/form-data') {
            delete headers['Content-Type'];
        }
        if(RequestService.accessToken != null && !headers['Authorization']) {
            headers['Authorization'] = 'Bearer '+RequestService.accessToken;
        }
        var params = {
            method: method,
            headers: headers
        };
        if(data) {
            if(headers['Content-Type'] == 'application/json') {
                params['body'] = JSON.stringify(data);
            } else {
                params['body'] = data;
            }
        }
        var response = await fetch(RequestService.BASIC_URL + url, params);
        if(response.status == 404) {
            return null;
        }
        var json = await response.json();
        if(response.ok) {
            return json;
        } else {
            throw new RequestException("SC"+json.code+": "+json.error, json.code);
        }
    }
}