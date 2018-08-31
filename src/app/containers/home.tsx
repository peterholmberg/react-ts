import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

interface HomeProps {
  allurbaserbelongtous: string;
}

class Home extends PureComponent<HomeProps, any> {
  render() {
    const { allurbaserbelongtous } = this.props;
    return (
      <div>
        <h1>Home! 🏠</h1>
        <div>
          Allurbaserbelongtous:
          <strong>{allurbaserbelongtous}</strong>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    allurbaserbelongtous: state.appState.get('allurbaserbelongtous'),
  };
}

export default connect(mapStateToProps)(Home);
