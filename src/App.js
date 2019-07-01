import React from 'react';
import { connect } from 'react-redux';

import Calendar from './components/Calendar/Calendar';

import './App.css';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function App(props) {
  console.log(props)
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
          <Calendar dates={props.dates} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({ dates: state.allDates });

export default connect(mapStateToProps)(App);
