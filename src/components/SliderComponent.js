import React from 'react';
import TabsComponent from './TabsComponent'
import AccordionComponent from './AccordionComponent'

require('styles//Slider.scss');
var SideBar = React.createClass({
  render: function() {
    var sidebarClass = this.props.isOpen ? 'sidebar open' : 'sidebar';
    return (
      <div className={sidebarClass}>
      	<section className="menu-heading-holder clearfix">
      		<h3>Interactive Views</h3>
      		<a href="javascript:void(0);" className="icon plus-icon"></a>
      		<div>
      			<article className="menu-inner-search">
      				<input type="search" className="menu-inner-search" placeholder="Search here"/>
      			</article>
      			<a href="javascript:void(0);" className="icon settings-icon"></a>
      			<a href="javascript:void(0);" className="icon close-menu-icon"></a>
      		</div>
      	</section>
      	  <TabsComponent />
          <AccordionComponent />
       </div>
    );
  }
});
export default SideBar
