import React from 'react';
import { connect } from "react-redux";
import TabBar from '../components/TabBar/TabBar';

const Home = (props: any) => {
  const { tab } = props;
  return (
    <div>
      <TabBar tabItems={tab.tabItems}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tab: state.tab,
  };
};

export default connect(
  mapStateToProps,
  {}
)(Home);