import { Component } from "react";
import { ImagePicker, ActionSheet, Modal } from "antd-mobile";
import $ from "jquery";
import { toast, compress } from "../../../common/commonTools";
import config from "../../../common/config";
import { Post } from "../../../services/common";
import PictureViewer from "../../Common/PictureViewer/PictureViewer";
import st from "./PicturePicker.less";
let postUrl = config.postUrl;

class PicturePicker extends Component {
  constructor(ps) {
    super(ps);

    this.state = {
      pics: [],
      showPictureViewer: false
    };
  }

  regExp = new RegExp(/\\/, "g");

  uploadUrl = `${postUrl}/Picture/UploadPicture`;
  removeUrl = `${postUrl}/Picture/DeletePictures`;
  getUrl = `${postUrl}/Picture/GetPictures`;

  showDeleteConfirm(file) {
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
          toast.loading("图片删除中...");
          let { id } = file;
          this.removePicture(id);
        }
      }
    );
  }

  async removePicture(id) {
    let rt = await Post(`Picture`, "DeletePictures", {
      p_id: this.props.p_id,
      id: id,
      returnall: true
    });
    let er = rt.err ? rt.err.message : rt.data.ErrorMessage;
    if (!er) {
      let pics = this.getPics(rt.data.Data || []);
      this.setState({ pics: pics });
      toast.hide();
    } else {
      toast.fail(er);
    }
  }

  async getPictures(p_id, tb_name) {
    let rt = await Post(`Picture`, "GetPictures", {
      p_id: p_id
    });
    let er = rt.err ? rt.err.message : rt.data.ErrorMessage;
    if (!er) {
      let pics = this.getPics(rt.data.Data || []);
      this.setState({ pics: pics });
      toast.hide();
    } else {
      toast.fail(er);
    }
  }

  upCount = 0;

  onChange = (files, type, index) => {
    // 判断是否是删除图片，如果是删除图片的话，则需要确定删除
    if (type === "remove") {
      this.showDeleteConfirm(this.state.pics[index]);
    } else {
      this.upCount += 1;
      if (this.upCount === 1) toast.loading("图片上传中...");
      // 对新增图片进行压缩
      let index = files.length - 1;
      let file = files[index];
      let name = file.file.name;
      compress(file.url, e => {
        let { p_id, tb_name } = this.props;
        var formData = new FormData();

        var datas = { p_id, tb_name, returnall: true, fileName: name };

        for (let i in datas) {
          formData.append(i, datas[i]);
        }
        formData.append("file", e);

        $.ajax({
          url: this.uploadUrl,
          type: "POST",
          data: formData,
          processData: false,
          contentType: false,
          success: res => {
            let rt = JSON.parse(res);
            if (rt.ErrorMessage) {
              toast.fail(rt.ErrorMessage);
            } else {
              let pics = this.getPics(rt.Data || []);
              this.setState({ pics: pics });
            }
            this.upCount -= 1;
            if (this.upCount === 0) {
              toast.hide();
            }
          },
          error: res => {
            toast.fail("上传失败！");
            this.upCount -= 1;
          }
        });
      });
    }
  };

  getPics(pics) {
    return pics.map(i => {
      let f_url = `${postUrl}/pictures/${i.url.replace(this.regExp, "/")}`;
      let url = i.t_url
        ? `${postUrl}/pictures/${i.t_url.replace(this.regExp, "/")}`
        : f_url;
      return {
        id: i.id,
        url: url,
        f_url: f_url
      };
    });
  }

  UNSAFE_componentWillReceiveProps(ps) {
    let { p_id } = ps;
    if (p_id) {
      this.getPictures(p_id);
    }
  }

  render() {
    let { pics, showPictureViewer } = this.state;
    return (
      <div className={st.PicturePicker}>
        <ImagePicker
          files={pics}
          onChange={this.onChange.bind(this)}
          multiple={true}
          onImageClick={(index, fs) => {
            this.selectedIndex = index;
            this.setState({ showPictureViewer: true });
          }}
        />
        {showPictureViewer ? (
          <Modal visible={true}>
            <PictureViewer
              onCloseClick={e => this.setState({ showPictureViewer: false })}
              files={pics}
              selectedIndex={this.selectedIndex}
            />
          </Modal>
        ) : null}
      </div>
    );
  }
}

export default PicturePicker;
