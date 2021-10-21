import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-mixedchart',
  templateUrl: './mixedchart.component.html',
  styleUrls: ['./mixedchart.component.css']
})
export class MixedchartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  highcharts = Highcharts;

  chartOptions = {
    title: {
      text: "Combining chart"
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
      plotLines: [{
        color: '#FF0000',
        width: 2,
        value: 4.5
      }, {
        color: '#00FF00',
        width: 2,
        value: 5.5
      }],

    },
    yAxis: {
      min: 0,
      title: {
        text: ""
      },

    },
    colors: ["#ffa200", "#34e8eb", "#1885de", "#4214db"],
    plotOptions: {
      series: {
        fillColor: {
          linearGradient: [0, 0, 0, 300],
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
          ]
        },
        marker: {
          enabled: false
        },
      }
    },
    series: [
      {
        type: 'column',
        name: 'Adaptation',
        data: [140, 200, 320, 300, 400, 100, 240, 300, 220, 150, 200, 350],
        alternate: true,
        zIndex: 2,
      },
      {
        type: 'area',
        name: 'Fixed Staff',
        data: [1050, 1120, 900, 600, 400, 200, 300, 350, 725, 800, 575, 550],
      },
      {
        type: 'area',
        name: 'Staff',
        fillOpacity: 0.1,
        data: [450, 520, 680, 700, 750, 975, 1050, 1200, 1250, 1100, 900, 1000],
      },
      {
        type: 'spline',
        name: 'Working Hours',
        data: [1200, 1320, 1480, 1500, 1450, 1275, 1050, 1200, 1000, 900, 950, 800],
        dashStyle: 'shortdot',
      },
    ],
    credits: {
      enabled: false
    },
  };
}
