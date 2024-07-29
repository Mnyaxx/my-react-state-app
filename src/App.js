import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Myra Donnavan',
        bio: 'Software Developer',
        imgSrc: 'https://toppng.com/uploads/preview/erson-outline-icon-png-person-icon-png-white-11562864385wyirbbsupu.png',
        profession: 'React Developer'
      },
      shows: false,
      timeInterval: 0
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  // Toggle show state
  handleToggle() {
    this.setState(prevState => ({ shows: !prevState.shows }));
  }

  // Set up timer on component mount
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // Clear timer on component unmount
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // Update time interval
  tick() {
    this.setState(prevState => ({ timeInterval: prevState.timeInterval + 1 }));
  }

  render() {
    const { person, shows, timeInterval } = this.state;
    return (
      <div className="App">
        <button onClick={this.handleToggle}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>{person.profession}</p>
          </div>
        )}
        <div>Time since mount: {timeInterval} seconds</div>
      </div>
    );
  }
}

export default App;
