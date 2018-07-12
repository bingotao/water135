import { Component } from "react";
import {
  InputItem,
  Icon,
  Button,
  SwipeAction,
  List,
  Modal,
  DatePicker
} from "antd-mobile";
import { toast, userUtils } from "../../../common/commonTools";
import XMXXForm from "../XMXXForm/XMXXForm";
import HMSSXXList from "../HMSSXXList/HMSSXXList";

import { GetList, Delete } from "../../../services/xmxx";
import st from "./XMXXList.less";

class XMXXList extends Component {
  keyword = "";
  item = {};

  state = {
    list: [],
    showXMXXForm: false,
    showHMSSList: false,
    user: null
  };

  onAddClick() {
    this.item = {};
    this.setState({ showXMXXForm: true });
  }

  onSearchClick(showLoading = true) {
    this.search(this.keyword, showLoading);
  }

  async search(keyword, showLoading = true) {
    if (showLoading) toast.loading("搜索中...");
    var rt = await GetList({ xmmc: keyword, isvalid: true });
    var er = rt.err ? rt.err.message : rt.data.ErrorMessage;
    if (er) {
      toast.fail(er);
    } else {
      this.setState({ list: rt.data.Data });
      if (showLoading) toast.hide();
    }
  }

  onItemEditClick(item) {
    this.item = item;
    this.setState({ showXMXXForm: true });
  }

  onItemDeleteClick(item) {
    if (item && item.id) {
      Modal.alert("删除", "确定删除该项目？", [
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
    var rt = await Delete({ id: id });
    var er = rt.err ? rt.err.message : rt.data.ErrorMessage;
    if (er) {
      toast.fail(er);
    } else {
      toast.success("删除成功！");
      this.onSearchClick(false);
    }
  }

  onItemClick(item) {
    this.item = item;
    this.setState({ showHMSSList: true });
  }

  componentDidMount() {
    this.onSearchClick();

    userUtils.getCurrentUser(e => {
      this.setState({ user: e });
    });
  }

  render() {
    var { list, showXMXXForm, showHMSSList, user } = this.state;
    return (
      <div className="xmxxlist">
        <div className="xmxxlist-header">
          海绵项目
          <div />
          {user && ["admin", "dataadmin"].includes(user.role) ? (
            <Button type="ghost" size="small" onClick={e => this.onAddClick()}>
              {" "}
              + 项目
            </Button>
          ) : null}
        </div>
        <div className="xmxxlist-search">
          <InputItem
            placeholder="请输入项目名称"
            onChange={e => (this.keyword = e)}
            clear
          >
            <Icon type="search" size="md" />
          </InputItem>
          <Button type="primary" onClick={e => this.onSearchClick()}>
            搜索
          </Button>
        </div>
        <div className="xmxxlist-body">
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
                  >
                    <List.Item
                      arrow="horizontal"
                      onClick={e => this.onItemClick(i)}
                    >
                      <div className={"item"}>{i.xmmc}</div>
                      <List.Item.Brief>
                        <span>编号：{i.xmbh}</span>
                      </List.Item.Brief>
                    </List.Item>
                  </SwipeAction>
                );
              })
            ) : (
              <List.Item>
                <div className="no-result">未找到相应项目，请重新检索</div>
              </List.Item>
            )}
          </List>
        </div>
        {showXMXXForm ? (
          <Modal visible={true}>
            <XMXXForm
              item={this.item}
              onCloseClick={e => this.setState({ showXMXXForm: false })}
              onCancelClick={e => this.setState({ showXMXXForm: false })}
              onOKClick={e => {
                this.onSearchClick(false);
                //this.setState({ showXMXXForm: false });
              }}
            />
          </Modal>
        ) : null}
        {showHMSSList ? (
          <Modal visible={true}>
            <HMSSXXList
              xmxx={this.item}
              onCloseBtnClick={e => this.setState({ showHMSSList: false })}
            />
          </Modal>
        ) : null}
      </div>
    );
  }
}

export default XMXXList;
