import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: '', 1: 1, 2: 2, 3: 3,
  },
  {
    name: '2014', Ruby: 1, JavaScript: 2, Python: 3,
  },
  {
    name: '2015', Ruby: 2, JavaScript: 1, Python: 3,
  },
  {
    name: '2016', Ruby: 3, JavaScript: 1, Python: 2,
  },
  {
    name: '2017', Ruby: 3, JavaScript: 2, Python: 1,
  },
];

const SimpleLineChart = () => {
  <LineChart
    width={600}
    height={300}
    data={data}
    margin={{
      top: 5, right: 30, left: 20, bottom: 5,
    }}>
    <XAxis dataKey="name" />
    <YAxis type="category" padding={{ top: 5, bottom: 5 }} />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Legend />
    <Line dataKey="3" stroke="#ffffff" style={{ display: 'none' }} />
    <Line dataKey="2" stroke="#ffffff" style={{ display: 'none' }} />
    <Line dataKey="1" stroke="#ffffff" style={{ display: 'none' }} />
    <Line dataKey="JavaScript" stroke="#88ee88" />
    <Line dataKey="Ruby" stroke="#ee8888" />
    <Line dataKey="Python" stroke="#8888ee" />
  </LineChart>
};

export default SimpleLineChart;
