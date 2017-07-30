/**
*
* Drawer
*
*/

import React from 'react';
import styled from 'styled-components';

function Drawer({ items, selectItem, itemLabelAttr, itemKeyAttr, isDrawerOpen }) {
  const ItemContainer = styled.div`
position: fixed;
top: 0;
left: -300px;
height: 100px;
width: 300px;
background-color: #fff;
padding: 0px;
transform: translateX(${props => props.isDrawerOpen ? '300px' : '0'});
transition: transform 1s ease-in-out;
box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 10px, rgba(0, 0, 0, 0.22) 0px 3px 10px;
z-index: 1000;
`;

  const Item = styled.div`
padding: 25px;
text-transform: uppercase;
cursor: pointer;
border-bottom: solid 1px #f6f6f6;
background-color: #fff;
&:hover {
	background-color: #f6f6f6;
}`;

  const itemNodes = items.map(item => (
	<Item
	   key={item[itemKeyAttr]}
	   onClick={() => selectItem(item)}
	  >
	  {item[itemLabelAttr]}
	</Item>
  ));

  return (
    <ItemContainer
	   isDrawerOpen={ isDrawerOpen }>
	  {itemNodes}
    </ItemContainer>
  );
}

Drawer.propTypes = {
  items: React.PropTypes.array.isRequired,
  selectItem: React.PropTypes.func.isRequired,
  itemLabelAttr: React.PropTypes.string.isRequired,
  itemKeyAttr: React.PropTypes.string.isRequired,
  isDrawerOpen: React.PropTypes.bool.isRequired,
};

export default Drawer;
