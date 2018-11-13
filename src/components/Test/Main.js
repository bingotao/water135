import { Component } from "react";
import Authorized from "./Authorized";
import Sub1 from "./Sub/Sub1";
import Sub2 from "./Sub/Sub2";
import Sub3 from "./Sub/Sub3";

class Main extends Component {
  render() {
    let { privilege } = this.props;
    console.log("Main", privilege);
    console.log(Authorized.validate(privilege, "view,edit"));
    return (
      <div>
        Main
        <Authorized c_id="Main_Sub1">
          <Sub1 />
        </Authorized>
        <Authorized c_id="Main_Sub2" passPrivilege="edit" noMatch={null}>
          <Sub2 />
        </Authorized>
        <Authorized c_id="Main_Sub3" c_name="" passPrivilege="view">
          <Sub3 />
        </Authorized>
        <Authorized
          privilege={privilege}
          passPrivilege="view,edit"
          noMatch={null}
        >
          <button>编辑1</button>
          <button>编辑2</button>
        </Authorized>
        <button disabled={!Authorized.validate(privilege, "edit")}>
          编辑3
        </button>
      </div>
    );
  }
}

export default Main;
