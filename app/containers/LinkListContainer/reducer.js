/*
 *
 * LinkListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_LINKS_SUCCEEDED,
  REQUEST_LINKS_FAILED,
} from './constants';

const initialState = fromJS({
  links: [
	{
	  description: 'This is the Link description.',
	  url: 'https://github.com/facebook/react',
	  topicName: 'Links',
	  id: 'fake',
	  voteCount: 0,
	},
  ]
});

function linkListContainerReducer(state = initialState, action) {
  switch (action.type) {
  case REQUEST_LINKS_SUCCEEDED:
	return state.set('links', action.links);
    default:
      return state;
  }
}

export default linkListContainerReducer;
