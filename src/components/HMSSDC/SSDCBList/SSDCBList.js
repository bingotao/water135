import { Component } from "react";
import { Button, Tabs, List, SwipeAction, Modal, Icon } from "antd-mobile";
import { toast, userUtils } from "../../../common/commonTools";
import { Post } from "../../../services/common";
import { forms, formsConfig } from "../DCBForms/forms";
import "./SSDCBList.less";

const bCls = "ssdcblist";

class SSDCBList extends Component {
  static defaultProps = {
    ssxx: {},
    xmxx: {}
  };

  state = {
    yxxz: [],
    ghxz: [],
    ghxzwj: [],
    yxjghxz: [],
    showSSDCBForm: false
  };

  async getSSDCB(hmssxx, showLoading = true) {
    if (showLoading) toast.loading("加载中...");
    var hmss_id = hmssxx.id,
      sslx = hmssxx.sslx;

    var newState = {};
    for (let t of formsConfig[sslx].tables) {
      let rt = await Post("dcb", "GetList", {
        table: t.id,
        hmss_id: hmss_id,
        isvalid: true
      });
      let er = rt.err ? rt.err.message : rt.data.ErrorMessage;
      if (er) {
        if (showLoading) toast.fail(er);
      } else {
        newState[t.type2] = rt.data.Data;
        if (showLoading) toast.hide();
      }
    }
    this.setState(newState);
  }

  showSSDCBForm(item, tab) {
    var Form = forms[tab.id];
    this.Form = (
      <Form
        item={item}
        onOKClick={e => this.getSSDCB(this.props.hmssxx, false)}
        onCancelClick={e => this.setState({ showSSDCBForm: false })}
        onCloseClick={e => this.setState({ showSSDCBForm: false })}
      />
    );
    this.setState({ showSSDCBForm: true });
  }

  onNewClick(tab) {
    var Form = forms[tab.id];
    this.Form = (
      <Form
        item={{
          hmss_id: this.props.hmssxx.id,
          xm_id: this.props.xmxx.id
        }}
        onOKClick={e => this.getSSDCB(this.props.hmssxx, false)}
        onCancelClick={e => this.setState({ showSSDCBForm: false })}
        onCloseClick={e => this.setState({ showSSDCBForm: false })}
      />
    );
    this.setState({ showSSDCBForm: true });
  }

  onItemDeleteClick(item, tab) {
    var id = item.id;

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
            this.deleteItem(id, tab.id);
          },
          style: "primary"
        }
      ]);
    }
  }

  async deleteItem(id, table) {
    toast.loading("删除中...");
    var rt = await Post("dcb", "DeleteItem", { table: table, id: id });
    var er = rt.err ? rt.err.message : rt.data.ErrorMessage;
    if (er) {
      toast.fail(er);
    } else {
      toast.success("删除成功");
      this.getSSDCB(this.props.hmssxx);
    }
  }

  renderTabContent(tab) {
    var tbCfg = tab.tableConfig;
    var list = this.state[tbCfg.type2];
    var { user } = this.state;
    return (
      <div className="tab-content">
        {user && ["admin", "dataadmin", "customer"].includes(user.role) ? (
          <Button
            className="tab-content-new"
            size="small"
            type="default"
            onClick={e => this.onNewClick(tab)}
          >
            新增
          </Button>
        ) : null}

        <div className="tab-content-head">
          {tab.tableConfig.name}（{list.length}）
        </div>
        <div className="tab-content-body">
          <List>
            {list.length ? (
              list.map((item, index) => {
                return (
                  <SwipeAction
                    key={item.id}
                    autoClose
                    right={
                      user &&
                      ["admin", "dataadmin", "customer"].includes(user.role)
                        ? [
                            {
                              text: "删除",
                              onPress: () => this.onItemDeleteClick(item, tab),
                              style: {
                                padding: "0 5px",
                                backgroundColor: "#F4333C",
                                color: "white"
                              }
                            }
                          ]
                        : []
                    }
                  >
                    <List.Item
                      arrow="horizontal"
                      onClick={e => this.showSSDCBForm(item, tab)}
                    >
                      <span>
                        <span>{index + 1}</span>
                        {item.dcsj}
                      </span>
                    </List.Item>
                  </SwipeAction>
                );
              })
            ) : (
              <List.Item>
                <div className="none-result">没有相应的记录</div>
              </List.Item>
            )}
          </List>
        </div>
      </div>
    );
  }

  getTabs(hmssxx) {
    var tbs = [];

    if (hmssxx.sslx) {
      var cfg = formsConfig[hmssxx.sslx];

      tbs = cfg.tables.map(i => {
        return {
          key: i.id,
          id: i.id,
          title: i.alias,
          tableConfig: i
        };
      });
    }

    return (
      <Tabs
        tabs={tbs}
        tabBarPosition="bottom"
        swipeable={false}
        animated={false}
      >
        {this.renderTabContent.bind(this)}
      </Tabs>
    );
  }

  componentDidMount() {
    var { hmssxx } = this.props;
    if (hmssxx && hmssxx.id) {
      this.getSSDCB(hmssxx);
    } else {
      toast.fail("未知的海绵设备");
    }

    userUtils.getCurrentUser(e => {
      this.setState({ user: e });
    });
  }

  render() {
    var { xmxx, hmssxx, onCloseBtnClick } = this.props;
    var { showSSDCBForm, user } = this.state;
    return (
      <div className={bCls}>
        {onCloseBtnClick ? (
          <Icon
            className={`${bCls}-close`}
            size="lg"
            type="cross-circle-o"
            onClick={e => this.props.onCloseBtnClick()}
          />
        ) : null}
        <div className={`${bCls}-header`}>
          <div>{hmssxx.ssmc}</div>
          <div>
            <span>{xmxx.xmmc}</span>
            <span>{hmssxx.sslx}</span>
          </div>
        </div>
        <div className={`${bCls}-body`}>{this.getTabs(hmssxx)}</div>
        {showSSDCBForm ? <Modal visible={true}>{this.Form}</Modal> : null}
      </div>
    );
  }
}

export default SSDCBList;
