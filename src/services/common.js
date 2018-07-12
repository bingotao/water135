import config from '../common/config';
import request from "../utils/request";
var url = config.postUrl;

export async function Post(controller, action, params) {
    return request(`${url}/${controller}/${action}`, { method: "POST", body: params });
}