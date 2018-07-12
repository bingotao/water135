import { Component } from "react";
import { InputItem, Button } from "antd-mobile";
import { Icon } from "antd";
import { Link } from "dva/router";
import { userUtils, toast } from "../../common/commonTools";

import st from "./Login.less";

class Login extends Component {
  state = { loading: false };

  componentDidMount() {
    userUtils.getCurrentUser(u => {
      if (u) {
        this.props.history.push("/forms");
      }
    });
  }

  login() {
    if (!this.id || !this.password) {
      toast.error("请输入用户名密码！");
      return;
    } else {
      this.setState({ loading: true });
      userUtils.login(
        this.id,
        this.password,
        e => {
          this.setState({ loading: false });
          if (e.ErrorMessage) {
            toast.error(e.ErrorMessage);
          } else {
            var u = e.Data;
            userUtils.setUser(u);
            this.props.history.push("/forms");
          }
        },
        e => {
          toast.error("登录失败，请联系管理员！");
          this.setState({ loading: false });
        }
      );
    }
  }

  render() {
    var { loading } = this.state;
    return (
      <div className={st.Login}>
        <div className={st.back}>
          <div />
        </div>
        <div className={st.title}>海绵设施运行现状调查数据采集系统</div>
        <div className={st.loginpanel}>
          <div>
            <InputItem
              onChange={e => {
                this.id = e;
              }}
              placeholder="用户名"
              clear
            >
              <Icon type="user" />
            </InputItem>
            <InputItem
              onChange={e => {
                this.password = e;
              }}
              placeholder="密码"
              clear
              type="password"
            >
              <Icon type="key" />
            </InputItem>
          </div>
          <Button
            loading={loading}
            onClick={this.login.bind(this)}
            type="primary"
          >
            登录
          </Button>
        </div>
        <div
          style={{
            zIndex: 999,
            width: "100%",
            textAlign: "right",
            marginTop: 10
          }}
        >
          <Link to="/modifypassword">修改密码</Link>
        </div>
        <div className={st.footer}>嘉兴市规划设计研究院有限公司</div>
      </div>
    );
  }
}

export default Login;
