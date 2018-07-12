import { Component } from "react";
import { InputItem, Button } from "antd-mobile";
import { Icon } from "antd";
import { toast, userUtils } from "../../common/commonTools";
import st from "./ModifyPassword.less";

class ModifyPassword extends Component {
  id = null;
  password = null;
  newPassword = null;
  confirmPassword = null;

  state = { loading: false };
  modify() {
    let data = this.validate();
    if (data) {
      this.setState({ loading: true });

      userUtils.modifypassword(
        data.id,
        data.password,
        data.newPassword,
        e => {
          let er = e.ErrorMessage;
          if (er) {
            toast.error(er);
          } else {
            userUtils.setUser(null);
            toast.success("修改密码成功，请重新登录！");
            this.props.history.push("/");
          }
          this.setState({ loading: false });
        },
        e => {
          toast.error("修改密码失败，请联系管理员！");
          this.setState({ loading: false });
        }
      );
    }
  }

  validate() {
    if (
      !this.id ||
      !this.password ||
      !this.newPassword ||
      !this.confirmPassword
    ) {
      toast.error("请将信息填写完整");
      return false;
    }
    if (this.newPassword !== this.confirmPassword) {
      toast.error("两次输入的密码不一致");
      return false;
    }
    if (!/^[a-zA-Z0-9_-]{6,16}$/.test(this.newPassword)) {
      toast.error("密码长度至少6位且只能包含数字字母和下划线");
      return false;
    }
    return {
      id: this.id,
      password: this.password,
      newPassword: this.newPassword
    };
  }

  render() {
    var { loading } = this.state;
    return (
      <div className={st.ModifyPassword}>
        <div className={st.back}>
          <div />
        </div>
        <div className={st.title}>用户密码修改</div>
        <div className={st.loginpanel}>
          <div>
            <InputItem
              placeholder="用户名"
              clear
              onChange={e => {
                this.id = e;
              }}
            >
              <Icon type="user" />
            </InputItem>
            <InputItem
              placeholder="密码"
              clear
              type="password"
              onChange={e => {
                this.password = e;
              }}
            >
              <Icon type="key" />
            </InputItem>
            <InputItem
              placeholder="新密码"
              clear
              type="password"
              onChange={e => {
                this.newPassword = e;
              }}
            >
              <Icon type="file" />
            </InputItem>
            <InputItem
              placeholder="确定新密码"
              clear
              type="password"
              onChange={e => {
                this.confirmPassword = e;
              }}
            >
              <Icon type="file-text" />
            </InputItem>
          </div>
          <Button
            loading={loading}
            onClick={this.modify.bind(this)}
            type="primary"
          >
            确&emsp;定
          </Button>
        </div>
      </div>
    );
  }
}

export default ModifyPassword;
