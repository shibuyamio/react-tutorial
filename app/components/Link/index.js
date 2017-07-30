/**
*
* Link
*
*/

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
background-color: #fff;
display: flex;
margin-bottom: 10px;
box-shadow: rgba(0, 0, 0, 0.117) 0px 1px 6px, rgba(0, 0, 0, 0.117) 0px 1px 4px;
padding: 10px;
margin-top: 20px;
`;

const VotingContainer = styled.div`
padding: 15px;
`;

const VotingCount = styled.div`
font-size: 20px;
text-align: center;
padding-bottom: 5px;
padding-top: 5px;
`;

const DetailsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 20px;
font-size: 16px;
`;

const LinkAnchor = styled.a`
text-decoration: none;
color: inherit;
&:hover {
	text-decoration: underline;
}
`;

const Description = styled.div`
color: #757575;
`;

const VotingIcon = styled.i`
font-size: 40px;
`;

function Link({ link }) {
  
  return (
    <Wrapper>
	  <VotingContainer>
		<VotingCount>{link.voteCount}</VotingCount>
	  </VotingContainer>
	  <DetailsContainer>
		<div>
		  <LinkAnchor href={link.url}>
			{link.url}
		  </LinkAnchor>
		</div>
		<Description>{link.description}</Description>
	  </DetailsContainer>
    </Wrapper>
  );
}

Link.propTypes = {
  link: React.PropTypes.shape({
	voteCount: React.PropTypes.number.isRequired,
	description: React.PropTypes.string.isRequired,
	url: React.PropTypes.string.isRequired,
	id: React.PropTypes.string.isRequired,
	}),
};

export default Link;
