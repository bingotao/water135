import { Component } from "react";
import XMXXList from "./XMXXList/XMXXList";
import { Icon } from "antd";
import { Modal } from "antd-mobile";
import { userUtils, toast } from "../../common/commonTools";
import moment from "moment";
import "./Index.less";

Date.prototype.toJSON = function() {
  return moment(this).format();
};

class Index extends Component {
  constructor() {
    super();
    userUtils.getCurrentUser(u => {
      if (!u) {
        this.props.history.push("/");
      }
    });
  }

  render() {
    return (
      <div className="hmssindex">
        <Icon
          type="close-circle"
          onClick={e => {
            Modal.alert("确定", "确定退出系统？", [
              {
                text: "取消",
                onPress: () => {},
                style: "default"
              },
              {
                text: "确定",
                onPress: () => {
                  userUtils.logout(e => {
                    userUtils.setUser(null);
                    this.props.history.push("/");
                  });
                }
              }
            ]);
          }}
        />
        <XMXXList />
      </div>
    );
  }
}

export default Index;
