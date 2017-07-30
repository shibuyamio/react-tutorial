/**
*
* LinkList
*
*/

import React from 'react';
// import styled from 'styled-components';

import Link from '../Link';


function LinkList({ links }) {
  const linkNodes = links.map(l =>(
  	<Link
  	   key={l.id}
	   link={l}
	   />
  ));

  return (
    <div>
	  {linkNodes}
    </div>
  );
}

LinkList.propTypes = {
  links: React.PropTypes.arrayOf(
	React.PropTypes.shape({
 	  voteCount: React.PropTypes.number.isRequired,
	  description: React.PropTypes.string.isRequired,
	  url: React.PropTypes.string.isRequired,
	  id: React.PropTypes.string.isRequired,
	})
  ),
};

export default LinkList;
