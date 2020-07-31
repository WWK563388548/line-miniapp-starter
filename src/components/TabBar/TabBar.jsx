import React from 'react';
import styled from 'styled-components';

const TabBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  border-top: 1px solid #b6b6b6;
  background-color: rgba(246, 246, 246, 0.95);
  .tab-item {
    flex: 1;
    font-size: 11px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #999999;
    .tab-icon {
      margin-bottom: 4px;
      width: 25px;
      height: 25px;
    }
  }
`;

class TabBar extends React.Component{

  renderItems = () => {
    const {tabItems} = this.props;
    return tabItems.map((tabItem, index) => {
      let classnames = `${tabItem.key} tab-item`;
      return (
        <div key={`${tabItem.key}-${index}`} className={classnames}>
          <img className='tab-icon' src={tabItem.icon} alt={`${tabItem.key} icon`}/>
          <div className='tab-item-name'>{tabItem.itemName}</div>
        </div>
      );
    })
  }

  render(){
    return(
      <TabBarContainer>
        {this.renderItems()}
      </TabBarContainer>
    );
  }
}

export default TabBar;