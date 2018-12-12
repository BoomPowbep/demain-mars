/**
 * Inversement de l'ordre
 * tempDataset[0] = dataset[1];
 * dataset[1] = dataset[0];
 * dataset[0] = tempDataset[0];
 */

import BarChart from 'britecharts/dist/umd/bar.min';
import donut from 'britecharts/dist/umd/donut.min';

const colors = require('britecharts/src/charts/helpers/color');
const miniTooltip = require('britecharts/src/charts/mini-tooltip');
const legend = require('britecharts/src/charts/legend');
const d3Selection = require('d3-selection');

import 'britecharts/dist/css/britecharts.min.css';

const Datas = {

    drawDiameter: () => {

        let container = d3Selection.select('#diameter'),
            tooltip = miniTooltip(),
            tooltipContainer,
            containerWidth = container.node() ? container.node().getBoundingClientRect().width : false,
            containerHeight = container.node() ? container.node().getBoundingClientRect().height : false,
            barChart = new BarChart(),
            dataset;

        if (container.node()) {
            barChart
                .margin({
                    left: 120,
                    right: 20,
                    top: 20,
                    bottom: 5
                })
                .percentageAxisToMaxRatio(1.3)
                .isHorizontal(true)
                .isAnimated(true)
                .on('customMouseOver', tooltip.show)
                .on('customMouseMove', tooltip.update)
                .on('customMouseOut', tooltip.hide)
                .colorSchema(['#EA3461', '#6E96D4'])
                .labelsSize(40)
                .xAxisLabel('Diamètre (km)')
                .width(containerWidth)
                .height(containerHeight);
        }

        dataset = [
            {
                value: 12742,
                name: 'Terre'
            },
            {
                value: 6779,
                name: 'Mars'
            }
        ];

        container.datum(dataset).call(barChart);

        tooltip
            .numberFormat();

        tooltipContainer = d3Selection.select('#diameter .metadata-group');
        tooltipContainer.datum([]).call(tooltip);
    },

    drawGravity: (planet) => {
        document.querySelector('#gravity').innerHTML = "";
        let container = d3Selection.select('.graph.bar#gravity'),
            tooltip = miniTooltip(),
            tooltipContainer,
            containerWidth = container.node() ? container.node().getBoundingClientRect().width : false,
            containerHeight = container.node() ? container.node().getBoundingClientRect().height : false,
            barChart = new BarChart(),
            dataset, colors;


        if (planet === 'terre') {
            dataset = [
                {
                    value: 1,
                    name: 'Normal:1G'
                },
                {
                    value: 1,
                    name: 'Terre'
                }
            ];

            colors = ['#6E96D4', '#00b33c'];
        } else {
            dataset = [
                {
                    value: 1,
                    name: 'Normal.1G'
                },
                {
                    value: 0.379,
                    name: 'Mars'
                }
            ];

            colors = ['#EA3461', '#00b33c'];
        }


        if (container.node()) {
            barChart
                .margin({
                    left: 120,
                    right: 20,
                    top: 20,
                    bottom: 5
                })
                .percentageAxisToMaxRatio(1.3)
                .isHorizontal(true)
                .isAnimated(true)
                .on('customMouseOver', tooltip.show)
                .on('customMouseMove', tooltip.update)
                .on('customMouseOut', tooltip.hide)
                .colorSchema(colors)
                .labelsSize(40)
                .xAxisLabel('Gravité (G)')
                .width(containerWidth)
                .height(containerHeight);
        }

        container.datum(dataset).call(barChart);

        tooltip
            .numberFormat();

        tooltipContainer = d3Selection.select('#gravity .metadata-group');
        tooltipContainer.datum([]).call(tooltip);
    },

    drawTime: (what) => {
        document.querySelector('#day_year').innerHTML = "";
        let container = d3Selection.select('#day_year'),
            tooltip = miniTooltip(),
            tooltipContainer,
            containerWidth = container.node() ? container.node().getBoundingClientRect().width : false,
            containerHeight = container.node() ? container.node().getBoundingClientRect().height : false,
            barChart = new BarChart(),
            dataset;

        if (container.node()) {
            barChart
                .margin({
                    left: 120,
                    right: 20,
                    top: 20,
                    bottom: 5
                })
                .percentageAxisToMaxRatio(1.3)
                .isAnimated(true)
                .on('customMouseOver', tooltip.show)
                .on('customMouseMove', tooltip.update)
                .on('customMouseOut', tooltip.hide)
                .colorSchema(['#EA3461', '#6E96D4'])
                .labelsSize(40)
                .width(containerWidth)
                .height(containerHeight);
        }


        if (what === 'day') {
            dataset = [
                {
                    value: 24,
                    name: 'Terre'
                },
                {
                    value: 24.62,
                    name: 'Mars'
                }
            ];
            barChart.xAxisLabel('Durée d\'une journée (h)');
        } else {
            dataset = [
                {
                    value: 365,
                    name: 'Terre'
                },
                {
                    value: 668,
                    name: 'Mars'
                }
            ];
            barChart.xAxisLabel('Durée d\'une année (jours terrestres)');
        }

        container.datum(dataset).call(barChart);

        tooltip
            .numberFormat();

        tooltipContainer = d3Selection.select('#day_year .metadata-group');
        tooltipContainer.datum([]).call(tooltip);

    },

    drawSuccess: () => {

        let dataset1 = [
            {
                quantity: 25,
                name: 'Succès',
                id: 1
            },
            {
                quantity: 32,
                name: 'Echec',
                id: 2
            },
            {
                quantity: 10,
                name: 'Echec de lancement',
                id: 3
            }
        ];

        let
            // legendChart = Datas.getLegendChart(dataset),
            donutChart = donut(),
            donutContainer = d3Selection.select('#success'),
            containerWidth = donutContainer.node() ? donutContainer.node().getBoundingClientRect().width : false;

        if (containerWidth) {

            donutChart
                .isAnimated(true)
                .highlightSliceById(2)
                .width(containerWidth)
                .height(containerWidth)
                .externalRadius(containerWidth / 2.5)
                .internalRadius(containerWidth / 5)
                .on('customMouseOver', function (data) {
                    // legendChart.highlight(data.data.id);
                })
                .on('customMouseOut', function () {
                    // legendChart.clearHighlight();
                })
                .on('customClick', function () {
                    // console.log(donutChart.highlightSliceById());
                });

            donutContainer.datum(dataset1).call(donutChart);

        }

        let dataset2 = [
            {
                quantity: 7,
                name: 'Succès',
                id: 1
            },
            {
                quantity: 9,
                name: 'Echec',
                id: 2
            },
        ];


        donutChart = donut();
        donutContainer = d3Selection.select('#landings');
        containerWidth = donutContainer.node() ? donutContainer.node().getBoundingClientRect().width : false;

        if (containerWidth) {

            donutChart
                .isAnimated(true)
                .highlightSliceById(2)
                .width(containerWidth)
                .height(containerWidth)
                .externalRadius(containerWidth / 2.5)
                .internalRadius(containerWidth / 5)
                .on('customMouseOver', function (data) {
                    // legendChart.highlight(data.data.id);
                })
                .on('customMouseOut', function () {
                    // legendChart.clearHighlight();
                })
                .on('customClick', function () {
                    // console.log(donutChart.highlightSliceById());
                });

            donutContainer.datum(dataset2).call(donutChart);

        }
    },

    getLegendChart: (dataset) => {
        let legendChart = legend(),
            legendContainer = d3Selection.select('.js-legend-chart-container'),
            containerWidth = legendContainer.node() ? legendContainer.node().getBoundingClientRect().width : false;

        if (containerWidth) {
            d3Selection.select('.js-legend-chart-container .britechart-legend').remove();

            legendChart
                .width(containerWidth * 0.8)
                .height(200)
                .numberFormat('s');

            legendContainer.datum(dataset).call(legendChart);

            return legendChart;
        }
    }
};

export default Datas;
