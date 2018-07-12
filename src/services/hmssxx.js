import request from "../utils/request";
import config from "../common/config";

const type = "hmssxx";

export default {
    GetList: async (params) => request(`${config.postUrl}/${type}/GetList`, { method: "POST", body: params }),
    AddOrModify: async (params) => request(`${config.postUrl}/${type}/AddOrModify`, { method: "POST", body: params }),
    Delete: async (params) => request(`${config.postUrl}/${type}/DeleteItem`, { method: "POST", body: params }),
    GetItem: async (params) => request(`${config.postUrl}/${type}/GetItem`, { method: "POST", body: params }),
};