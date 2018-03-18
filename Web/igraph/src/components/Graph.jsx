import React, { Component } from 'react';
import * as d3 from 'd3';

class Graph extends Component {
  constructor(props) {
    super(props);
    this.createLineChart = this.createLineChart.bind(this);
  }

  componentDidMount() {
    this.createLineChart();
  }
  componentDidUpdate() {
    this.createLineChart();
  }

  createLineChart() {
    const { node } = this;
    const width = 500;
    const height = 500;
    const margin = 50;
    const x = d3.scaleLinear()
      .domain([0, 10])
      .range([margin, width - margin]);
    const y = d3.scaleLinear()
      .domain([0, 10])
      .range([height - margin, margin]);

    // d3.range(10).map((i) => {
    //   {x: i, y: Math.sin(i) + 5};
    // });

    const line = d3.line()
      .x((d) => { x(d.x); })
      .y((d) => { y(d.y); });

    const svg = d3.select(node);

    svg.attr('height', height)
      .attr('width', width);

    svg.selectAll('path')
      .data(this.props.data)
      .enter()
      .append('path')
      .attr('class', 'line')
      .attr('d', (d) => { line(d); });

    renderAxes(svg);

    const renderAxes = (svg) => {
      const xAxis = d3.axisBottom()
        .scale(x.range([0, quadrantWidth()]))
        .scale(x);

      const yAxis = d3.axisLeft()
        .scale(y.range([quadrantHeight(), 0]))
        .scale(y);

      svg.append('g')
        .attr('class', 'axis')
        .attr('transform', () => {
          'translate(' + xStart()
            + ',' + yStart() + ')';
        })
        .call(xAxis);

      svg.append('g')
        .attr('class', 'axis')
        .attr('transform', () => {
          'translate(' + xStart()
          + ',' + yEnd() + ')';
        })
        .call(yAxis);
    };

    const xStart = () => { margin; }
    const yStart = () => { height - margin;}
    const xEnd = () => { width - margin;}
    const yEnd = () => { margin;}
    const quadrantWidth = () => { width - 2 * margin;}
    const quadrantHeight = () => { height - 2 * margin;}
  }

  render() {
    return <svg ref={node => this.node = node} />
  }
}

export default Graph;
