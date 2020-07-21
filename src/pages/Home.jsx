import React from 'react';
import { connect } from "react-redux";
import {
  changeTestData,
  getTestData,
} from '../store/example/actions';

const Home = (props) => {
  return (
    <div>Home</div>
  );
}

const mapStateToProps = (state) => ({
  example: state.example,
});

export default connect(
  mapStateToProps,
  {
    changeTestData,
    getTestData,
  }
)(Home);