import { Fragment } from "react";
import React from "react";
import ReactEcharts from "echarts-for-react"; 

function Dashboard() {

    const option = {
        tooltip: {
            trigger: 'item'
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      };
      
    return <ReactEcharts option={option} />;

}

export default Dashboard;