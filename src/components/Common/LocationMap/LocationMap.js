import { Component } from "react";
import { Icon, Button } from "antd-mobile";
import st from "./LocationMap.less";
import L from '../../../common/leafletExtends';
import { toast } from '../../../common/commonTools';
import tools from '../../../common/commonTools';
import t from '../../../assets/marker-icon.png';

var isWx = tools.isWx;

class LocationMap extends Component {
    marker = null
    icon = L.icon({ iconUrl: t, iconAnchor: [12, 41] })

    constructor(ps) {
        super(ps);
        this.state.location = ps.location;
    }
    static defaultProps = {
        onCloseClick: () => { },
        onOKClick: () => { },
        onCancelClick: () => { }
    }

    state = {
        location: null
    }

    onOKClick() {
        var { location } = this.state;
        if (!location) {
            toast.fail("请先定位再保存！");
        } else {
            this.props.onOKClick(location);
        }
    }

    onCancelClick() {
        this.props.onCancelClick();
    }

    onCloseClick() {
        this.props.onCloseClick();
    }

    setPosition() {
        var { location } = this.state;
        this.marker = L.marker({ lat: location.y, lng: location.x }, { icon: this.icon }).addTo(this.map);
    }

    zoomToPosition(zoom = 17) {
        var { location } = this.state;
        this.map.setView({ lat: location.y, lng: location.x }, zoom);
    }

    getPosition() {
        navigator.geolocation.getCurrentPosition(
            e => {
                this.setState(
                    {
                        location: {
                            x: e.coords.longitude,
                            y: e.coords.latitude
                        }
                    }, e => { this.setPosition(); this.zoomToPosition(); });
            },
            e => {
                toast.fail("无法获取位置信息");
            });
    }

    initMap() {
        var vec = L.tileLayer.TDTJX({ type: 'img' });
        var vec_anno = L.tileLayer.TDTJX({ type: 'img_anno' });
        var map = L.map(this.mapDom, {
            crs: L.CRS.EPSG4490,
            center: [30.75, 120.75],
            zoom: 12,
            attributionControl: false
        });
        map.addLayer(vec);
        map.addLayer(vec_anno);

        map.on('click', e => {
            if (this.marker) {
                this.marker.remove();
                this.marker = null;
            };
            this.setState(
                {
                    location: {
                        x: e.latlng.lng,
                        y: e.latlng.lat
                    }
                }, e => this.setPosition());
        });
        this.map = map;
    }

    componentDidMount() {
        this.initMap();
        if (!this.state.location)
            this.getPosition();
        else {
            this.setPosition();
            this.zoomToPosition();
        }
    }

    render() {
        var { onCloseClick } = this.props;
        var { location } = this.state;
        return (
            <div className={st.locationmap} >
                {onCloseClick ? <Icon size="lg" className={st.close_btn} type="cross-circle-o" onClick={e => this.onCloseClick()} /> : null}
                < div className={st.map} ref={e => this.mapDom = e} >
                </div >

                <div className={st.btns}>
                    <Button onClick={e => this.getPosition()} className={st.locateBtn} type={location ? "primary" : "default"} size="small">{location ? "已定位" : "点击定位"}</Button>
                    <Button type="primary" onClick={e => this.onOKClick()}>保存位置</Button>
                    &emsp;
                    <Button type="default" onClick={e => this.onCancelClick()}>取消</Button>
                </div>
            </div >);
    }
}

export default LocationMap;