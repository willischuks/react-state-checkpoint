import React, { Component } from 'react';
import './App.css';
import ProfileImage from './Assets/mali4.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Muhhammad Ali',
        bio: 'Muhammad Ali, widely regarded as one of the greatest boxers in history, transcended the sport with his charismatic personality, unparalleled skill in the ring, and a life story that reflected resilience, social activism, and an enduring legacy.',
        imgSrc: ProfileImage,
        profession: 'Boxer',
      },
      show: false,
      mountedTime: new Date(),
    };
  }
        // toggle 
  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };
      // timed interval
  componentDidMount() {
    this.interval = setInterval(() => this.setState({}), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>    
          Toggle Profile
        </button>
        {show && (
          <div className='profileContainer'>
              <h2>Name: {fullName}</h2>
              <p>Bio: {bio}</p>
              <p>Profession: {profession}</p>
              <img src={imgSrc} alt="Profile" />
            <p>Time since mounted: {Math.round((new Date() - mountedTime) / 1000)} seconds</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;