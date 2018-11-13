import Authorized from "../Authorized";

class Sub1 extends Authorized {
  render() {
    let { privilege } = this.props;
    console.log("Sub1", privilege);
    return <div>Sub1</div>;
  }
}

export default Sub1;
