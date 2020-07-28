import React from 'react';
import { connect } from "react-redux";
import {
  changeTestData,
  getTestData,
} from '../store/example/actions';
import * as styles from '../app.scss';

const Home = (props: any) => {
  return (
    <div className={styles.home}>Home</div>
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