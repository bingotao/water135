import { Component } from "react";
import { createForm } from "rc-form";
import { List, InputItem, Button, Picker, Modal, Icon } from "antd-mobile";
import { toast, userUtils } from "../../../common/commonTools";
import hmssxx from "../../../services/hmssxx";
import { sslx } from "../../HMSSDC/DCBForms/forms";
import { Post } from "../../../services/common";
import LocationMap from "../../Common/LocationMap/LocationMap";
import st from "./HMSSXXForm.less";

class HMSSXXForm extends Component {
  constructor(ps) {
    super(ps);
    this.state.item = this.props.item;
  }

  state = {
    xmxxList: [],
    item: {},
    user: {}
  };

  static defaultProps = {
    onOKClick: () => {},
    onCancelClick: () => {},
    onCloseClick: () => {}
  };
  onCloseClick() {
    this.props.onCloseClick();
  }
  onOKClick = e => {
    e.preventDefault();
    this.props.form.validateFields(
      async function(err, values) {
        if (!err) {
          if (!values.xm_id[0]) {
            toast.fail("请选择所属海绵项目");
            return;
          }
          if (!values.sslx[0]) {
            toast.fail("请选择设施类型");
            return;
          }

          values = {
            ...this.state.item,
            ...values,
            xm_id: values.xm_id[0],
            sslx: values.sslx[0]
          };
          toast.loading("保存中...");
          var rt = await hmssxx.AddOrModify(values);
          var er = (rt.err && rt.err.message) || rt.data.ErrorMessage;
          if (er) {
            toast.fail(er);
          } else {
            toast.success("保存成功");
            this.setState({ item: rt.data.Data });
            this.props.onOKClick(rt.data.Data);
          }
        } else {
          if (err.ssmc) {
            toast.fail(err.ssmc.errors[0].message);
          } else if (err.ssbh) {
            toast.fail(err.ssbh.errors[0].message);
          }
        }
      }.bind(this)
    );
  };
  onCancelClick() {
    this.props.onCancelClick();
  }
  async getInitData() {
    var { item } = this.state;
    var er = null;
    var obj = {};
    toast.loading("加载中...");
    if (item && item.id) {
      var rt = await hmssxx.GetItem({ id: item.id });
      er = (rt.err && rt.err.message) || rt.data.Data.ErrorMessage;
      if (!er) {
        obj.item = rt.data.Data;
      }
    }
    rt = await Post("xmxx", "GetList", { isvalid: true });
    er = rt.err ? rt.err.message : rt.data.ErrorMessage;
    if (!er) {
      obj.xmxxList = rt.data.Data;
    }

    if (er) {
      toast.fail(er);
    } else {
      toast.hide();
      this.setState(obj);
    }
  }

  componentDidMount() {
    this.getInitData();
    userUtils.getCurrentUser(e => {
      this.setState({ user: e });
    });
  }

  getHMSSTypes(types) {
    var lx = [];
    for (let t of types) {
      lx.push({ value: t, label: t });
    }
    return lx;
  }

  render() {
    const { getFieldProps } = this.props.form;
    var { xmxxList, showLocationMap, item, user } = this.state;
    var { CreateUserID } = item;
    var { onCloseClick } = this.props;
    return (
      <div className={st.hmssxxform}>
        {onCloseClick ? (
          <Icon
            size="lg"
            className={st.close_btn}
            type="cross-circle-o"
            onClick={e => this.onCloseClick()}
          />
        ) : null}
        <div className={st.header}>
          海绵设施<span>{item && item.id ? "修改" : "新增"}</span>
        </div>
        <List>
          <Picker
            disabled={!!item.xm_id}
            {...getFieldProps("xm_id", {
              initialValue: [item.xm_id],
              rules: [{ required: true, message: "请选择所属海绵项目" }]
            })}
            data={xmxxList.map(i => ({ value: i.id, label: i.xmmc }))}
            extra="请选择"
            title="项目名称"
            cols={1}
          >
            <List.Item arrow="horizontal">项目名称</List.Item>
          </Picker>
          <Picker
            disabled={!!item.sslx}
            {...getFieldProps("sslx", {
              initialValue: [item.sslx],
              rules: [{ required: true, message: "请选择设施类型" }]
            })}
            data={this.getHMSSTypes(sslx)}
            extra="请选择"
            title="设施类型"
            cols={1}
          >
            <List.Item arrow="horizontal">设施类型</List.Item>
          </Picker>
          <InputItem
            ref={el => (this.ssmc = el)}
            {...getFieldProps("ssmc", {
              initialValue: item.ssmc,
              rules: [{ required: true, message: "请填写设施名称" }]
            })}
            type="text"
            placeholder="设施名称"
            clear
          >
            设施名称{" "}
          </InputItem>
          <InputItem
            ref={el => (this.ssbh = el)}
            {...getFieldProps("ssbh", {
              initialValue: item.ssbh,
              rules: [{ required: true, message: "请填写设施编号" }]
            })}
            type="text"
            placeholder="设施编号"
            clear
          >
            设施编号{" "}
          </InputItem>
          {CreateUserID ? (
            <InputItem type="text" disabled={true} value={CreateUserID}>
              创建人
            </InputItem>
          ) : null}
          <List.Item>
            {item.x ? (
              <span className="ydw">已定位</span>
            ) : (
              <span className="wdw">未定位</span>
            )}
            <Button
              className="locatebtn"
              type="primary"
              size="small"
              onClick={e => {
                this.setState({ showLocationMap: true });
              }}
            >
              定位
            </Button>
          </List.Item>
        </List>
        <div style={{ marginTop: "10px" }}>
          {user && ["admin", "dataadmin"].includes(user.role) ? (
            <Button
              type="primary"
              style={{ marginRight: "10px", width: "40%" }}
              inline
              onClick={e => this.onOKClick(e)}
            >
              保存
            </Button>
          ) : null}

          <Button
            type="ghost"
            style={{ width: "40%" }}
            inline
            onClick={e => this.onCancelClick()}
          >
            取消
          </Button>
        </div>
        {showLocationMap ? (
          <Modal visible={true}>
            <LocationMap
              location={item.x ? { x: item.x, y: item.y } : null}
              onOKClick={e => {
                this.setState({
                  item: {
                    ...this.state.item,
                    ...e
                  },
                  showLocationMap: false
                });
              }}
              onCloseClick={e => this.setState({ showLocationMap: false })}
            />
          </Modal>
        ) : null}
      </div>
    );
  }
}

HMSSXXForm = createForm()(HMSSXXForm);
export default HMSSXXForm;
