import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getDate } from './redux/actions';

import './App.css';
import Calendar from './components/Calendar/Calendar';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

class App extends PureComponent {
  componentDidMount() {
    this.props.fetchDate();
  }

  render() {
    console.log('cal: ', this.props);
    return (
      <div className="App">
        <h3>Calendar App</h3>
        <div className="calendar-container">
          <div className="weekdays">
            {weekDays.map(day => (
              <div key={day} className="day">
                {day}
              </div>
            ))}
          </div>
          <Calendar dates={this.props.dates} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dates: state.allDates
});

const mapDispatchToProps = dispatch => ({
  fetchDate: getDate(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
