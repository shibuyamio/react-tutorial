/**
*
* Navigation
*
*/

import React from 'react';
// import styled from 'styled-components';
import AppBar from '../AppBar';
import Drawer from '../Drawer';


function Navigation({ NavigationContainer, selectTopic, toggleDrawer }) {
  const topicNodes = NavigationContainer.topics.map(t => (
	  <div
	     key={t.name}
		 onClick={() => selectTopic(t)}
	  >
	  {t.name}
	</div>
  ));

  return (
    <div>
	  <AppBar
		 toggleDrawer={ toggleDrawer }
		 />
	  <Drawer
		 items={NavigationContainer.topics}
		 selectItem={selectTopic}
		 itemLabelAttr="name"
		 itemKeyAttr="name"
		 isDrawerOpen={NavigationContainer.isDrawerOpen}
		 />
    </div>
  );
}

Navigation.propTypes = {
  toggleDrawer: React.PropTypes.func.isRequired,
  selectTopic: React.PropTypes.func.isRequired,
  NavigationContainer: React.PropTypes.shape({
	isDrawerOpen: React.PropTypes.bool.isRequired,
	topics: React.PropTypes.arrayOf(
	  React.PropTypes.shape({
		name: React.PropTypes.string.isRequired,
		description: React.PropTypes.string.isRequired
	  })
	).isRequired,
  }),
};

export default Navigation;
