import Authorized from "../Authorized";

class Sub2 extends Authorized {
  render() {
    let { privilege } = this.props;
    console.log("Sub2", privilege);
    return <div>Sub2</div>;
  }
}

export default Sub2;