'use strict';

import React from 'react';

require('styles/charts/BarPn.scss');

class BarPnComponent extends React.Component {
  render() {
  	var ReactD3 = require('react-d3-components')
  	var BarChart = ReactD3.BarChart;
  	var data = [{
	    label: 'somethingA',
	    values: [{x: 'SomethingA', y: -10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
	}];

    return (
      <div className="barpn-component">
         <BarChart
        data={data}
        width={395}
        height={200}
        margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
      </div>
    );
  }
}

BarPnComponent.displayName = 'ChartsBarPNComponent';

// Uncomment properties you need
// BarPnComponent.propTypes = {};
// BarPnComponent.defaultProps = {};

export default BarPnComponent;
