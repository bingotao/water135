import { Component } from "react";
import {
  SwipeAction,
  InputItem,
  Icon,
  Button,
  Modal,
  List,
  Checkbox
} from "antd-mobile";
import { toast, userUtils } from "../../../common/commonTools";
import { forms, formsConfig, sslx } from "../DCBForms/forms";
import hmssxx from "../../../services/hmssxx";
import HMSSXXForm from "../HMSSXXForm/HMSSXXForm";
import SSDCBList from "../SSDCBList/SSDCBList";
import "./HMSSXXList.less";

const CheckboxItem = Checkbox.CheckboxItem;
const baseClass = "hmssxxlist";
const hmsslx = sslx.map(i => ({ id: i, name: i, checked: false }));

class HMSSXXList extends Component {
  static defaultProps = {
    xmxx: {}
  };

  keyword = "";
  selectTypes = {};

  state = {
    showHMSSXXForm: false,
    showCondition: false,
    showSSDCBList: false,
    showDCForm: false,
    list: [],
    user: null
  };

  getTypes() {
    var types = [];
    for (var i in this.selectTypes) {
      if (this.selectTypes[i]) {
        types.push(i);
      }
    }
    return types;
  }

  showCondition() {
    this.setState({ showCondition: true });
  }

  hiddenCondition() {
    this.setState({ showCondition: false });
  }

  onAddClick() {
    this.item = { xm_id: this.props.xmxx.id };
    this.setState({ showHMSSXXForm: true });
  }

  onSearchClick(showLoading = true) {
    this.search(this.props.xmxx.id, this.keyword, this.getTypes(), showLoading);
  }

  async search(xm_id, keyword, types, showLoading) {
    if (showLoading) toast.loading("查询中...");
    var rt = await hmssxx.GetList({
      xm_id: xm_id,
      ssmc: keyword,
      sslx: types,
      isvalid: true
    });
    var er = rt.err ? rt.err.message : rt.data.ErrorMessage;
    if (er) {
      toast.fail(er);
    } else {
      this.setState({ list: rt.data.Data });
      if (showLoading) toast.hide();
    }
  }

  showDCForm({ xm_id, ss_id, Form }) {
    this.Form = (
      <Form
        item={{
          hmss_id: ss_id,
          xm_id: xm_id
        }}
        //onOKClick={e => this.setState({ showDCForm: false })}
        onCancelClick={e => this.setState({ showDCForm: false })}
        onCloseClick={e => this.setState({ showDCForm: false })}
      />
    );
    this.setState({ showDCForm: true });
  }

  onNewItemClick(item, table) {
    var ss_id = item.id,
      xm_id = item.xm_id;
    var Form = forms[table];
    if (Form) {
      this.showDCForm({
        xm_id,
        ss_id,
        Form
      });
    }
  }

  onItemClick(item) {
    this.item = item;
    this.setState({ showSSDCBList: true });
  }

  onItemEditClick(item) {
    this.item = item;
    this.setState({ showHMSSXXForm: true });
  }

  onItemDeleteClick(item) {
    if (item && item.id) {
      Modal.alert("删除", "确定删除该设施？", [
        {
          text: "取消",
          onPress: () => {},
          style: "default"
        },
        {
          text: "确定",
          onPress: () => {
            this.deleteItem(item.id);
          },
          style: "primary"
        }
      ]);
    }
  }

  async deleteItem(id) {
    toast.loading("删除中...");
    var rt = await hmssxx.Delete({ id: id });
    var er = rt.err ? rt.err.message : rt.data.ErrorMessage;
    if (er) {
      toast.fail(er);
    } else {
      toast.success("删除成功！");
      this.onSearchClick();
    }
  }

  getDCBBtns(item, type) {
    var btns = [],
      colors = ["#108ee9", "rgb(61, 168, 245)"];
    if (type) {
      var i = 0;
      for (let tb of type.tables) {
        btns.push({
          text: tb.alias,
          onPress: () => this.onNewItemClick(item, tb.id),
          style: {
            padding: "0 5px",
            backgroundColor: colors[i % 2],
            color: "white"
          }
        });
        i++;
      }
    }
    return btns;
  }

  getTypesCheckbox(types) {
    var checkboxs = [];
    for (let name in types) {
      let i = types[name];
      checkboxs.push(
        <CheckboxItem
          key={i.id}
          defaultChecked={i.checked}
          onChange={e => {
            this.selectTypes[i.name] = e.target.checked;
            i.checked = e.target.checked;
          }}
        >
          {i.name}
        </CheckboxItem>
      );
    }
    return checkboxs;
  }

  componentDidMount() {
    this.onSearchClick();
    userUtils.getCurrentUser(e => {
      this.setState({ user: e });
    });
  }

  render() {
    var { xmxx, onCloseBtnClick } = this.props;
    var {
      showCondition,
      showHMSSXXForm,
      showSSDCBList,
      showDCForm,
      list,
      user
    } = this.state;

    return (
      <div className={baseClass}>
        <div className={`${baseClass}-header`}>
          海绵设施
          <span>{xmxx ? xmxx.xmmc : null}</span>
          <div>
            {user && ["admin", "dataadmin"].includes(user.role) ? (
              <Button
                type="ghost"
                size="small"
                onClick={e => this.onAddClick()}
              >
                {" "}
                + 设施
              </Button>
            ) : null}
            &ensp;
            {onCloseBtnClick ? (
              <Icon size="lg" type="cross-circle-o" onClick={onCloseBtnClick} />
            ) : null}
          </div>
        </div>
        <div className={`${baseClass}-search`}>
          <InputItem
            placeholder="请输入设施名称"
            onChange={e => (this.keyword = e)}
            clear
          >
            <Icon type="search" size="md" />
          </InputItem>
          <Button type="ghost" onClick={e => this.showCondition()}>
            条件
          </Button>
          &ensp;
          <Button type="primary" onClick={e => this.onSearchClick()}>
            搜索
          </Button>
        </div>
        <div className={`${baseClass}-body`}>
          <List>
            {list && list.length ? (
              list.map(i => {
                return (
                  <SwipeAction
                    key={i.id}
                    autoClose
                    right={
                      user && ["admin", "dataadmin"].includes(user.role)
                        ? [
                            {
                              text: "查看",
                              onPress: () => this.onItemEditClick(i),
                              style: {
                                padding: "0 5px",
                                backgroundColor: "#108ee9",
                                color: "white"
                              }
                            },
                            {
                              text: "删除",
                              onPress: () => this.onItemDeleteClick(i),
                              style: {
                                padding: "0 5px",
                                backgroundColor: "#F4333C",
                                color: "white"
                              }
                            }
                          ]
                        : [
                            {
                              text: "查看",
                              onPress: () => this.onItemEditClick(i),
                              style: {
                                padding: "0 5px",
                                backgroundColor: "#108ee9",
                                color: "white"
                              }
                            }
                          ]
                    }
                    // 将设施的信息，以及设施对应的表的配置信息传入
                    left={this.getDCBBtns(i, formsConfig[i.sslx])}
                  >
                    <List.Item
                      arrow="horizontal"
                      onClick={e => this.onItemClick(i)}
                    >
                      {i.ssmc}
                      <List.Item.Brief>
                        <span>{i.sslx}</span>
                        <span>编号：{i.ssbh}</span>
                      </List.Item.Brief>
                    </List.Item>
                  </SwipeAction>
                );
              })
            ) : (
              <List.Item>
                <div className="no-result">未找到相应设施，请重新检索</div>
              </List.Item>
            )}
          </List>
        </div>
        <Modal className={`${baseClass}-types`} visible={showCondition}>
          <div className={`${baseClass}-types-header`}>
            设施类型<div />
          </div>
          <List className={`${baseClass}-types-body`}>
            {this.getTypesCheckbox(hmsslx)}
          </List>
          <div className={`${baseClass}-types-btns`}>
            <Button
              type="primary"
              onClick={e => {
                this.onSearchClick();
                this.hiddenCondition();
              }}
            >
              确定
            </Button>
            &ensp;
            <Button type="ghost" onClick={e => this.hiddenCondition()}>
              取消
            </Button>
          </div>
        </Modal>

        {showHMSSXXForm ? (
          <Modal visible={true}>
            <HMSSXXForm
              item={this.item}
              onCloseClick={e => this.setState({ showHMSSXXForm: false })}
              onOKClick={e => {
                // this.setState({ showHMSSXXForm: false });
                this.onSearchClick(false);
              }}
              onCancelClick={e => this.setState({ showHMSSXXForm: false })}
            />
          </Modal>
        ) : null}

        {showSSDCBList ? (
          <Modal visible={true}>
            {
              <SSDCBList
                hmssxx={this.item}
                xmxx={xmxx}
                onCloseBtnClick={e => this.setState({ showSSDCBList: false })}
              />
            }
          </Modal>
        ) : null}
        {showDCForm ? <Modal visible={true}>{this.Form}</Modal> : null}
      </div>
    );
  }
}

export default HMSSXXList;
