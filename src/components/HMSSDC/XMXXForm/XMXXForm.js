import { Component } from "react";
import { createForm } from "rc-form";
import {
  List,
  InputItem,
  TextareaItem,
  Button,
  Modal,
  Icon
} from "antd-mobile";
import { toast, userUtils } from "../../../common/commonTools";
import { GetItem, AddOrModify } from "../../../services/xmxx";
import LocationMap from "../../Common/LocationMap/LocationMap";
import "./XMXXForm.less";

class XMXXForm extends Component {
  state = {
    item: {},
    showLocationMap: false
  };

  static defaultProps = {
    onOKClick: () => {},
    onCancelClick: () => {},
    onCloseClick: () => {}
  };
  onCloseClick() {
    this.props.onCloseClick();
  }
  onCancelClick() {
    this.props.onCancelClick();
  }

  onOKClick = e => {
    e.preventDefault();
    this.props.form.validateFields(
      async function(err, values) {
        if (!err) {
          var item = {
            ...this.state.item,
            ...values
          };
          var rt = await AddOrModify(item);
          var er = rt.err ? rt.err.message : rt.data.ErrorMessage;
          if (er) {
            toast.fail(er);
          } else {
            toast.success("保存成功");
            this.setState({ item: rt.data.Data });
            this.props.onOKClick();
          }
        } else {
          if (err.xmmc) {
            toast.fail(err.xmmc.errors[0].message);
          } else if (err.xmbh) {
            toast.fail(err.xmbh.errors[0].message);
          }
        }
      }.bind(this)
    );
  };

  async GetItem() {
    var { item } = this.props;
    if (item && item.id) {
      var rt = await GetItem({ id: item.id });
      var er = (rt.err && rt.err.message) || rt.data.Data.ErrorMessage;
      if (er) {
        toast.fail(er);
      } else {
        item = rt.data.Data;
      }
    } else {
      item = {};
    }
    this.setState({ item: item });
  }

  componentDidMount() {
    this.GetItem();
    userUtils.getCurrentUser(e => {
      this.setState({ user: e });
    });
  }

  render() {
    let { item, showLocationMap, user } = this.state;
    let { CreateUserID } = item;
    let { getFieldProps } = this.props.form;
    var { onCloseClick } = this.props;
    return (
      <div className="xmxxform">
        {onCloseClick ? (
          <Icon
            size="lg"
            className={"close_btn"}
            type="cross-circle-o"
            onClick={e => this.onCloseClick()}
          />
        ) : null}
        <div className="header">
          海绵项目<span>{item && item.id ? "修改" : "新增"}</span>
        </div>
        <List>
          <InputItem
            ref={el => (this.xmmc = el)}
            {...getFieldProps("xmmc", {
              initialValue: item.xmmc,
              rules: [{ required: true, message: "请填写项目名称" }]
            })}
            type="text"
            placeholder="项目名称"
            clear
          >
            项目名称{" "}
          </InputItem>
          <InputItem
            ref={el => (this.xmbh = el)}
            {...getFieldProps("xmbh", {
              initialValue: item.xmbh,
              rules: [{ required: true, message: "请填写项目编号" }]
            })}
            type="text"
            placeholder="项目编号"
            clear
          >
            项目编号{" "}
          </InputItem>
          <TextareaItem
            title="备注说明"
            placeholder="备注说明"
            style={{ textAlign: "right" }}
            {...getFieldProps("mark", { initialValue: item["mark"] })}
            autoHeight
          />
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
          {CreateUserID ? (
            <InputItem type="text" disabled={true} value={CreateUserID}>
              创建人
            </InputItem>
          ) : null}
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

XMXXForm = createForm()(XMXXForm);
export default XMXXForm;
