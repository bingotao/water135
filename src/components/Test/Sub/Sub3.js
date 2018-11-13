import Authorized from "../Authorized";

class Sub3 extends Authorized {
  render() {
    let { privilege } = this.props;
    console.log("Sub3", privilege);
    return <div>Sub3</div>;
  }
}

export default Sub3;
