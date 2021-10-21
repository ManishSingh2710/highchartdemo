import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  highcharts = Highcharts;

  chartOptions = {
    chart: {
      type: "spline"
    },
    title: {
      text: "Productivity"
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr"],
    },
    yAxis: {
      min: 0,
      max: 5,
      categories: ["0 hrs", "1 hrs", "2 hrs", "3 hrs", "4 hrs", "5 hrs"],
      gridLineColor: 'transparent',
      title: {
        text: ""
      },
    },
    tooltip: {
      valueSuffix: "°C"
    },
    colors: ["#80D7F6", "#5525B3", "#6D6464"],
    plotOptions: {
      series: {
        marker: {
          enabled: false
        }
      }
    },
    series: [
      {
        name: 'Present',
        data: [3, 4, 5, 4, 3.5]
      },
      {
        name: 'Forecast',
        data: [4, 3, 1, 2, 3]
      },
      {
        name: 'Last Year',
        data: [3.5, 4, 3, 5, 4]
      },
    ],
    credits: {
      enabled: false
    },
  };
}
