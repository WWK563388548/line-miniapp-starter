import React from 'react';
import { connect } from "react-redux";
import {
  changeTestData,
  getTestData,
} from '../store/example/actions';

const Home = (props: any) => {
  return (
    <div>Home</div>
  );
}

const mapStateToProps = (state) => {
  return {
    example: state.example,
  };
};

export default connect(
  mapStateToProps,
  {
    changeTestData,
    getTestData,
  }
)(Home);