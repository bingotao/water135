import { Component } from "react";
import {
  Accordion,
  InputItem,
  Icon,
  ImagePicker,
  Button,
  Picker,
  List,
  DatePicker,
  ActionSheet,
  Modal,
  Flex
} from "antd-mobile";
import { Radio } from "antd";
import moment from "moment";
import { createForm } from "rc-form";
import PictureViewer from "../../Common/PictureViewer/PictureViewer";
import { toast, compress, userUtils } from "../../../common/commonTools";
import { Post } from "../../../services/common";
import st from "./DCBForm.less";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

function createDCB(cfg) {
  var tb = cfg.id;

  class Form extends Component {
    constructor(ps) {
      super(ps);
      this.state.item = ps.item || {};
    }

    dFiles = [];
    item = {};

    state = {
      showPictureViewer: false,
      item: {},
      xmxxList: [],
      hmssxxList: [],
      files: []
    };
    static defaultProps = {
      onCloseClick: () => {},
      onOKClick: () => {},
      onCancelClick: () => {}
    };

    getModifiedFiles() {
      let aFiles = [],
        oFiles = [],
        { files } = this.state;
      for (let f of files) {
        if (f.id) {
          oFiles.push(f.id);
        } else {
          aFiles.push(f.url);
        }
      }
      return {
        aFiles: JSON.stringify(aFiles),
        oFiles: oFiles
      };
    }

    onOKClick(e) {
      e.preventDefault();
      this.props.form.validateFields(
        async function(err, values) {
          if (!err) {
            var xm_id = values.xm_id[0],
              hmss_id = values.hmss_id[0];

            if (!xm_id) {
              toast.fail("海绵项目不能为空！");
              return;
            }
            if (!hmss_id) {
              toast.fail("设施名称不能为空！");
              return;
            }

            var item = {
              ...this.state.item,
              ...values,
              ...this.item,
              dcsj: moment(values.dcsj).format('YYYY-MM-DD HH:mm:ss'),
              hmss_id: hmss_id,
              xm_id: xm_id,
              xczp: null,
              xmxx: null,
              hmssxx: null
            };

            var obj = {
              entity: JSON.stringify(item),
              table: tb,
              hasFiles: true,
              ...this.getModifiedFiles()
            };

            toast.loading("保存中...");
            var rt = await Post("dcb", "AddOrModify", obj);
            var er = rt.err ? rt.err.message : rt.data.ErrorMessage;
            if (er) {
              toast.fail(er);
            } else {
              toast.success("保存成功");
              this.setState({ item: rt.data.Data });
              this.props.onOKClick();
            }
          } else {
            for (var i in err) {
              toast.fail(err[i].errors[0].message);
            }
          }
        }.bind(this)
      );
    }

    onCancelClick() {
      this.props.onCancelClick();
    }

    async getInitData() {
      var rt, er;
      var item = this.state.item;
      var obj = {};
      toast.loading("加载中...");
      if (item.id) {
        rt = await Post("dcb", "GetItem", { id: item.id, table: tb });
        er = rt.err ? rt.err.message : rt.data.ErrorMessage;

        if (!er) {
          item = rt.data.Data;
          obj.item = item;
          obj.files = item.xczp
            ? item.xczp.map(e => ({ id: e.id, url: e.picture }))
            : [];
        }
      }

      rt = await Post("xmxx", "GetList", { isvalid: true });
      er = rt.err ? rt.err.message : rt.data.ErrorMessage;
      if (!er) {
        obj.xmxxList = rt.data.Data;
      }

      rt = await Post("hmssxx", "GetList", {
        xm_id: item.xm_id,
        sslx: [cfg.type],
        isvalid: true
      });
      er = rt.err ? rt.err.message : rt.data.ErrorMessage;
      if (!er) {
        obj.hmssxxList = rt.data.Data;
      }
      if (er) toast.fail(er);
      else {
        this.setState(obj);
        toast.hide();
      }
    }

    onCloseClick() {
      this.props.onCloseClick();
    }

    onChange = (files, type, index) => {
      //   debugger;
      // 判断是否是删除图片，如果是删除图片的话，则需要确定删除
      if (type === "remove") {
        this.showDeleteConfirm(files, type, index);
      } else {
        this.setState({ files: files });
        // 对新增图片进行压缩
        let index = files.length - 1;
        let file = files[index];
        compress(file.url, e => {
          this.state.files[index] = { url: e };
        });
      }
    };

    showDeleteConfirm = (files, type, index) => {
      const BUTTONS = ["删除", "取消"];
      ActionSheet.showActionSheetWithOptions(
        {
          options: BUTTONS,
          cancelButtonIndex: BUTTONS.length - 1,
          destructiveButtonIndex: BUTTONS.length - 2,
          title: "确定删除该图片？",
          maskClosable: true
        },
        buttonIndex => {
          if (buttonIndex !== BUTTONS.length - 1) {
            this.setState({ files: files });
          }
        }
      );
    };

    getFields() {
      var fieldsGroup = [];
      var { getFieldProps } = this.props.form;
      var { item } = this.state;
      for (let c of cfg.configs) {
        let cmp = null;
        if (c.extensible) {
          cmp = (
            <Accordion key={c.id} activeKey={["0"]}>
              <Accordion.Panel key="0" header={c.title}>
                <List>
                  {c.children.map(e => {
                    var field = e.field;
                    return e.values ? (
                      <List.Item key={e.id}>
                        <Flex>
                          {e.title && (
                            <Flex.Item style={{ flex: "none" }}>
                              {e.title}
                            </Flex.Item>
                          )}
                          <Flex.Item>
                            <RadioGroup
                              className={e.smallSize ? st.small : ""}
                              defaultValue={item[field]}
                              onChange={e =>
                                (this.item[field] = e.target.value)
                              }
                            >
                              {e.values.map(i => (
                                <RadioButton key={i} value={i}>
                                  {i}
                                </RadioButton>
                              ))}
                            </RadioGroup>
                          </Flex.Item>
                        </Flex>
                      </List.Item>
                    ) : (
                      <InputItem
                        key={e.id}
                        {...getFieldProps(e.field, {
                          initialValue: item[e.field]
                        })}
                        type={e.type}
                        placeholder={e.placeholder || e.title}
                        extra={e.extra}
                        clear
                      >
                        {e.title}
                      </InputItem>
                    );
                  })}
                </List>
              </Accordion.Panel>
            </Accordion>
          );
        } else {
          cmp = (
            <List key={c.id}>
              {c.children.map(e => {
                var field = e.field;
                return e.values ? (
                  <List.Item key={e.id}>
                    <Flex>
                      {e.title && (
                        <Flex.Item style={{ flex: "none" }}>
                          {e.title}
                        </Flex.Item>
                      )}
                      <Flex.Item>
                        <RadioGroup
                          className={e.smallSize ? st.small : ""}
                          defaultValue={item[field]}
                          onChange={e => (this.item[field] = e.target.value)}
                        >
                          {e.values.map(i => (
                            <RadioButton key={i} value={i}>
                              {i}
                            </RadioButton>
                          ))}
                        </RadioGroup>
                      </Flex.Item>
                    </Flex>
                  </List.Item>
                ) : (
                  <InputItem
                    key={e.id}
                    {...getFieldProps(e.field, { initialValue: item[e.field] })}
                    type={e.type}
                    placeholder={e.placeholder || e.title}
                    extra={e.extra}
                    clear
                  >
                    {e.title}
                  </InputItem>
                );
              })}
            </List>
          );
        }
        fieldsGroup.push(cmp);
      }

      return fieldsGroup;
    }

    showPictureViewer(index, files) {
      this.selectedIndex = index;
      this.files = files;
      this.setState({ showPictureViewer: true });
    }

    componentDidMount() {
      this.getInitData();
      userUtils.getCurrentUser(e => {
        this.setState({ user: e });
      });
    }

    render() {
      var { getFieldProps } = this.props.form;
      var { onCloseClick } = this.props;
      var {
        item,
        xmxxList,
        hmssxxList,
        files,
        showPictureViewer,
        user
      } = this.state;
      var { CreateUserID } = item;

      return (
        <div className={st.dcbform}>
          {onCloseClick ? (
            <Icon
              size="lg"
              className={st.close_btn}
              type="cross-circle-o"
              onClick={e => this.onCloseClick()}
            />
          ) : null}
          <div className={st.dcbform_header}>
            {cfg.name}
            <span>{item.id ? "修改" : "新增"}</span>
          </div>
          <div className={st.dcbform_body}>
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
                disabled={!!item.hmss_id}
                {...getFieldProps("hmss_id", {
                  initialValue: [item.hmss_id],
                  rules: [{ required: true, message: "请选择所属海绵设施" }]
                })}
                data={hmssxxList.map(i => ({ value: i.id, label: i.ssmc }))}
                extra="请选择"
                title="设施名称"
                cols={1}
              >
                <List.Item arrow="horizontal">设施名称</List.Item>
              </Picker>
              <DatePicker
                title="调查时间"
                extra="请选择时间"
                {...getFieldProps("dcsj", {
                  initialValue: item.dcsj
                    ? moment(item.dcsj).toDate()
                    : moment().toDate(),
                  rules: [{ required: true, message: "请填写调查时间" }]
                })}
              >
                <List.Item arrow="horizontal">调查时间</List.Item>
              </DatePicker>
            </List>
            {this.getFields()}
            {CreateUserID ? (
              <List>
                <InputItem type="text" disabled={true} value={CreateUserID}>
                  创建人
                </InputItem>
              </List>
            ) : null}
            {cfg.hasPictures ? (
              <ImagePicker
                files={files}
                onChange={this.onChange.bind(this)}
                onImageClick={(index, fs) => this.showPictureViewer(index, fs)}
                multiple={true}
              />
            ) : null}
          </div>
          <div className={st.dcbform_btns}>
            {user && ["admin", "dataadmin", "customer"].includes(user.role) ? (
              <Button type="primary" onClick={e => this.onOKClick(e)}>
                保存
              </Button>
            ) : null}
            &ensp;
            <Button type="ghost" onClick={e => this.onCancelClick()}>
              取消
            </Button>
          </div>
          {showPictureViewer ? (
            <Modal visible={true}>
              <PictureViewer
                onCloseClick={e => this.setState({ showPictureViewer: false })}
                files={this.files}
                selectedIndex={this.selectedIndex}
              />
            </Modal>
          ) : null}
        </div>
      );
    }
  }
  return createForm()(Form);
}

export default createDCB;
