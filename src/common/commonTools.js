import { Toast } from "antd-mobile";
import config from "./config";
import $ from "jquery";

var toast = {
  error: (content, duration = 2, onClose = null, mask = false) =>
    Toast.fail(content, duration, onClose, mask),
  fail: (content, duration = 2, onClose = null, mask = false) =>
    Toast.fail(content, duration, onClose, mask),
  success: (content, duration = 2, onClose = null, mask = false) =>
    Toast.success(content, duration, onClose, mask),
  info: (content, duration = 2, onClose = null, mask = false) =>
    Toast.info(content, duration, onClose, mask),
  loading: (content, duration = 100, onClose = null, mask = true) =>
    Toast.loading(content, duration, onClose, mask),
  hide: () => Toast.hide()
};

export default {
  emptyFun: () => {},
  // 是否为微信
  isWx: (() => {
    return (
      !!window.navigator.userAgent.toLowerCase().indexOf("micromessenger") !==
      -1
    );
  })()
};

let compress = (base64, callback, setting = { max: 1920, quality: 0.7 }) => {
  var img = new Image();
  img.onload = function() {
    // 默认按比例压缩
    var w = this.width,
      h = this.height;
    if ((w > h ? w : h) > setting.max) {
      // 最大边长设置为max值，小边长按比例
      let w0 = w > h ? setting.max : (setting.max * w) / h;
      let h0 = w > h ? (setting.max * h) / w : setting.max;
      var quality = 0.7; // 默认图片质量为0.7
      // 图像质量
      if (setting.quality && setting.quality <= 1 && setting.quality > 0) {
        quality = setting.quality;
      }
      //生成canvas
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      // 创建属性节点
      var anw = document.createAttribute("width");
      anw.nodeValue = w0;
      var anh = document.createAttribute("height");
      anh.nodeValue = h0;
      canvas.setAttributeNode(anw);
      canvas.setAttributeNode(anh);
      ctx.drawImage(this, 0, 0, w0, h0);
      // quality值越小，所绘制出的图像越模糊
      // 使用 image/jpeg 压缩比会更高
      var base64 = canvas.toDataURL("image/jpeg", quality);
      this.src = base64;
    } else {
      callback(this.src);
    }
  };
  img.src = base64;
};

var user = null;
var userUtils = {
  getCurrentUser: callback => {
    if (user) {
      callback(user);
    } else {
      $.ajax({
        url: config.postUrl + "/Login/GetCurrentUser",
        method: "post",
        dataType: "json",
        crossDomain: true,
        xhrFields: {
          withCredentials: true
        },
        success: e => {
          callback(e);
        }
      });
    }
  },
  logout: callback => {
    $.ajax({
      url:  config.postUrl + "/Login/Logout",
      method: "post",
      dataType: "json",
      crossDomain: true,
      xhrFields: {
        withCredentials: true
      },
      success: e => {
        callback(e);
      }
    });
  },
  login: (id, password, callback, errorCallback) => {
    $.ajax({
      url: config.postUrl + "/Login/Login",
      method: "post",
      dataType: "json",
      data:{
        id: id,
        password
      },
      crossDomain: true,
      xhrFields: {
        withCredentials: true
      },
      success: e => {
        callback(e);
      },
      error:e=>{
        if (errorCallback) errorCallback();
      }
    });
  },
  modifypassword: (id, password, newPassword, callback, errorCallback) => {
    $.ajax({
      url: config.postUrl + "/Login/ModifyPassword",
      method: "post",
      dataType: "json",
      data:{
        id: id,
        password,
        newPassword
      },
      crossDomain: true,
      xhrFields: {
        withCredentials: true
      },
      success: e => {
        callback(e);
      },
      error:e=>{
        if (errorCallback) errorCallback();
      }
    });
  },
  setUser: u => {
    user = u;
  }
};
export { toast, compress, userUtils };
