import { Component } from 'react';
import { Carousel, Icon } from 'antd-mobile';
import st from "./PictureViewer.less";

class PictureViewer extends Component {

    static defaultProps = {
        selectedIndex: 0,
        files: []
    }

    onCloseClick() {
        this.props.onCloseClick();
    }

    componentDidMount() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 0);
    }

    render() {
        const { files, selectedIndex, onCloseClick } = this.props;
        let i = 0;
        return (
            <div className={st.pictureviewer}>
                {onCloseClick ? <Icon className={st.closebtn} size="lg" type="cross-circle-o" onClick={this.onCloseClick.bind(this)} /> : null}
                <Carousel autoplay={false} selectedIndex={selectedIndex} infinite={true}>
                    {
                        files.map(f => {
                            return (<div key={i++}>
                                <img key={i++}
                                    src={f.url}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        window.dispatchEvent(new Event('resize'));
                                    }} />
                            </div>);
                        })
                    }
                </Carousel>
            </div>);
    }
}

export default PictureViewer;