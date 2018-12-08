import * as d3 from 'd3';
import * as c3 from 'c3';

const Datas = {

    draw: () => {
        let percentage = 0.79;

        let chart = c3.generate({
            bindto: '#donut',
            data: {
                columns: [
                    ['show', percentage],
                    ['dontshow', 1 - percentage],
                ],
                type: 'donut',
                order: null
            },
            color: {
                pattern: ['#13BDD1', '#FFF']
            },
            legend: {
                show: false
            },
            donut: {
                label: {
                    show: false
                },
                title: Math.round(percentage * 100),
                width: 15,
                expand: false
            },
            tooltip: {
                show: false
            }
        });

        // baseline text properly
        d3.select(".c3-chart-arcs-title")
            .attr("dy", "0.3em");

        // add percentage symbol
        d3.select(".c3-chart-arcs")
            .append("text")
            .text("%")
            .attr("dy", "-0.5em")
            .attr("dx", "2em");

        // black background for center text
        d3.select(".c3-chart")
            .insert("circle", ":first-child")
            .attr("cx", chart.internal.width / 2)
            .attr("cy", chart.internal.height / 2 - chart.internal.margin.top)
            .attr("r", chart.internal.innerRadius);
    }
};

export default Datas;
