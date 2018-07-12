import request from "../utils/request";
import config from "../common/config";

const type = "xmxx";

export async function GetList(params) {
    return request(`${config.postUrl}/${type}/GetList`,
        {
            method: "POST",
            body: params
        }
    );
}

export async function AddOrModify(params) {
    return request(`${config.postUrl}/${type}/AddOrModify`,
        {
            method: "POST",
            body: params
        }
    );
}

export async function Delete(params) {
    return request(`${config.postUrl}/${type}/DeleteItem`,
        {
            method: "POST",
            body: params
        }
    );
}

export async function GetItem(params) {
    return request(`${config.postUrl}/${type}/GetItem`,
        {
            method: "POST",
            body: params
        }
    );
}
