import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import ErrorComponent from './ErrorComponent';
import './Error.css';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message})
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div className="error">
          <h4>
            <ErrorComponent errorMessage = { this.state.errorMessage } />
          </h4>
        </div>
      );
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={ this.state.lat }/>
    }

    return <Spinner message='Please accept location reqyuest'/>
  }

  render () {
    return (
      <div className="container">
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
