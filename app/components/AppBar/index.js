/**
*
* AppBar
*
*/

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
padding: 20px;
background-color: #00afcc;
color: #fff;
font-size: 24px;
display: flex;
justify-content: space-between;
`;

const Icon = styled.i`
font-size: 20px;
color: #fff;
&:hover {
color: #e5e5e5;
}
`;

const IconButton = styled.div`
cursor: pointer;
margin-right: 15px;
`;

const Heading = styled.div`
text-align: left;
display: flex;
flex-glow: 2;
`;

const LinkContainer = styled.div`
font-size: 16px;
`;

function AppBar({ toggleDrawer }) {
  return (
    <Wrapper>
	  <IconButton>
		<Icon
		   className="fa fa-bath"
		   onClick={toggleDrawer}
		/>
	  </IconButton>
	  <Heading>
		Coder Daily
	  </Heading>
	  <LinkContainer>Log in</LinkContainer>
    </Wrapper>
  );
}

AppBar.propTypes = {
  toggleDrawer: React.PropTypes.func.isRequired,
};

export default AppBar;
