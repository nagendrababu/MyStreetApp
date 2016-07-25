'use strict';

import React from 'react';
import  { Tabs }  from 'react'

require('styles//Tabs.scss');

class TabsComponent extends React.Component {
  render() {
    return (
        <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
            <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
            <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
            <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
         </Tabs>
    );
  }
}

TabsComponent.displayName = 'TabsComponent';

// Uncomment properties you need
// TabsComponent.propTypes = {};
// TabsComponent.defaultProps = {};

export default TabsComponent;