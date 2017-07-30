/*
 *
 * NavigationContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectNavigationContainer from './selectors';

import {
  requestTopics,
  selectTopic,
  toggleDrawer,
} from './actions';
import Navigation from '../../components/Navigation';


export class NavigationContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
	this.props.requestTopics();
	console.log(this.props);
  }

  render() {
    return (
      <div>
        <Helmet
          title="NavigationContainer"
          meta={[
            { name: 'description', content: 'Description of NavigationContainer' },
          ]}
        />
		<Navigation {...this.props} />
      </div>
    );
  }
}

NavigationContainer.propTypes = {
  requestTopics: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  NavigationContainer: makeSelectNavigationContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    requestTopics: () => dispatch(requestTopics()),
	selectTopic: (topic) => dispatch(selectTopic(topic)),
	toggleDrawer: () => dispatch(toggleDrawer()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
