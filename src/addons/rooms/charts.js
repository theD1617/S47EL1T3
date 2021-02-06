import React, { Component } from 'react';
class Charts extends Component {
    state = {  }
    render() { 
        return ( 
            <canvas className="my-4 w-100 chartjs-render-monitor" id="myChart" width="304" height="128" style={{display: "block", width: "304px", height: "128px" }}></canvas>
         );
    }
}
 
export default Charts;