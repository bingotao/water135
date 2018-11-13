import React, { Component } from "react";

/*
none:无权限
view:查看权限
edit:修改权限
*/
class Authorized extends Component {
  constructor(ps) {
    super(ps);

    let user = getUser();
    if (user) {
      let priv = user.privileges[ps.c_id] || null;
      // 如果设定了权限则采用该权限，否则使用上一组件权限
      if (priv) {
        ps.privilege = priv;
      }
      // 默认view，edit权限
      if (!ps.passPrivilege) ps.passPrivilege = "view,edit";
      let { privilege, passPrivilege } = ps;
      this.pass = Authorized.validate(privilege, passPrivilege);
    } else {
      this.pass = false;
    }
  }

  render() {
    // 是否通过验证
    if (this.pass) {
      let { privilege, passPrivilege } = this.props;
      return React.Children.map(this.props.children, child => {
        return React.cloneElement(child, {
          privilege: privilege,
          passPrivilege: passPrivilege
        });
      });
    } else {
      // 没有通过验证
      return this.props.noMatch !== undefined ? (
        this.props.noMatch
      ) : (
        <div>无权限</div>
      );
    }
  }
}

Authorized.validate = (privilege, passPrivilege) => {
  return (
    passPrivilege === undefined ||
    !!(passPrivilege && passPrivilege.indexOf(privilege) !== -1)
  );
};

let user = null;

function getUser() {
  if (!user) {
    /*
    后台取
    */
    user = {
      id: "test001",
      name: "测试用户001",
      department: "XXX部门",
      privileges: {
        Main: "view"
      }
    };
  }
  return user;
}

export default Authorized;
