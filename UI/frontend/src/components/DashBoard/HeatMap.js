/* global google */
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

// const heatMapStyle = {
//     toggleButton: {
//         position: "absolute",
//         top: 32,
//         left: 32,
//     }
// }

class HeatMap extends Component {

  static defaultProps = {
    center: { lat: 1.3521, lng: 103.8198 },
    zoom: 11
  };

  constructor(props) {
    super(props);
    
    this.locations = [
        {name:"Hougang", latlng:{lat:1.3441, lng:103.8863}},
        {name:"Hougang", latlng:{lat:1.3431, lng:103.8963}},
        {name:"Hougang", latlng:{lat:1.3421, lng:103.9763}},
        {name:"Hougang", latlng:{lat:1.3431, lng:103.9663}},
        {name:"Serangoon", latlng:{lat:1.3554, lng:103.8679}},
        {name:"Serangoon", latlng:{lat:1.3454, lng:103.8679}},
        {name:"Serangoon", latlng:{lat:1.3454, lng:103.8779}},
        {name:"Serangoon", latlng:{lat:1.3554, lng:103.8779}},
        {name:"Serangoon", latlng:{lat:1.3464, lng:103.8679}},
        {name:"Serangoon", latlng:{lat:1.3254, lng:103.8579}},
        {name:"Serangoon", latlng:{lat:1.3254, lng:103.8679}},
        {name:"Serangoon", latlng:{lat:1.3454, lng:103.8779}},
        {name:"Serangoon", latlng:{lat:1.3354, lng:103.8629}},
        {name:"Serangoon", latlng:{lat:1.3354, lng:103.8569}},
        {name:"Serangoon", latlng:{lat:1.3354, lng:103.8679}},
        {name:"Serangoon", latlng:{lat:1.3454, lng:103.8619}},
        {name:"Serangoon", latlng:{lat:1.3454, lng:103.8679}},
        {name:"Jurong", latlng:{lat:1.3329, lng:103.7436}},
        {name:"Chinatown", latlng:{lat:1.2815, lng:103.8448}},
        {name:"Little India", latlng:{lat:1.3066, lng:103.8518}},
        {name:"Aljunied", latlng:{lat:1.3164, lng:103.8828}},
        {name:"City Hall", latlng:{lat:1.2931, lng:103.8521}},
        {name:"Woodlands", latlng:{lat:1.4382, lng:103.7890}},
        {name:"Woodlands", latlng:{lat:1.4282, lng:103.7990}},
        {name:"Woodlands", latlng:{lat:1.4392, lng:103.7990}},
        {name:"Sembawang", latlng:{lat:1.4491, lng:103.8185}},
        {name:"Yio Chu Kang", latlng:{lat:1.3817, lng:103.8449}},
        {name:"Bukit Panjang", latlng:{lat:1.3774, lng:103.7719}},
        {name:"Bukit Panjang", latlng:{lat:1.3674, lng:103.7719}},
        {name:"Bukit Panjang", latlng:{lat:1.3774, lng:103.7619}},
        {name:"Changi", latlng:{lat:1.3450, lng:103.9832}},
        {name:"Changi", latlng:{lat:1.3450, lng:103.9632}},
        {name:"Yew Tee", latlng:{lat:1.3973, lng:103.7475}},
        {name:"Yew Tee", latlng:{lat:1.3993, lng:103.7575}},
        {name:"Boon Lay", latlng:{lat:1.3143, lng:103.7093}},
        {name:"Boon Lay", latlng:{lat:1.3243, lng:103.7193}},
        {name:"Boon Lay", latlng:{lat:1.3143, lng:103.7293}},
        {name:"Tuas", latlng:{lat:1.2949, lng:103.6305}},
        {name:"Tuas", latlng:{lat:1.2849, lng:103.6405}}
    ]

    this.state = {
      heatmapVisible: true,
      heatmapPoints: this.locations.map(i => i.latlng)
    };
  }

  onMapClick({ x, y, lat, lng, event }) {
    if (!this.state.heatmapVisible) {
      return;
    }

    this.setState({
      heatmapPoints: [...this.state.heatmapPoints, { lat, lng }]
    });
    if (this._googleMap !== undefined) {
      const point = new google.maps.LatLng(lat, lng);
      this._googleMap.heatmap.data.push(point);
    }
  }

  toggleHeatMap() {
    this.setState(
      {
        heatmapVisible: !this.state.heatmapVisible
      },
      () => {
        if (this._googleMap !== undefined) {
          this._googleMap.heatmap.setMap(
            this.state.heatmapVisible ? this._googleMap.map_ : null
          );
        }
      }
    );
  }

  render() {
    const apiKey = { key: "AIzaSyAmENDuRZNpYbucBC_bL0XXrQXOYWv-Tdk" };
    const heatMapData = {
      positions: this.state.heatmapPoints,
      options: {
        radius: 20,
        opacity: 0.6
      }
    };

    console.log(this.state);

    return (
      <div style={{ height: "80vh", width: "100%", borderBottom: 30 }}>
        <GoogleMapReact
          ref={el => (this._googleMap = el)}
          bootstrapURLKeys={apiKey}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          heatmapLibrary={true}
          heatmap={heatMapData}
          onClick={this.onMapClick.bind(this)}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default HeatMap;
