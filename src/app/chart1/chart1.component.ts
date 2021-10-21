import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  highcharts = Highcharts;

  chartOptions = {
    chart: {
      type: "spline"
    },
    title: {
      text: "Starting month"
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr"],
    },
    yAxis: {
      min: 0,
      title: {
        text: ""
      },
      gridLineColor: 'transparent',
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
        data: [50, 60, 65, 80]
      },
      {
        name: 'Forecast',
        data: [50, 40, 55, 70]
      },
      {
        name: 'Last Year',
        data: [40, 45, 35, 50]
      },
    ],
    credits: {
      enabled: false
    },
  };

}
