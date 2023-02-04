import React, { Component } from 'react';
import './linktbtn.css';

class Buttonslin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > 50) {
      this.setState({ fixed: true });
    } else {
      this.setState({ fixed: false });
    }
  }

  render() {
    let positionClass = this.state.fixed ? 'fixed-butlin' : 'static-buttons';
    return (
      <div className={positionClass}>
        <a href="https://www.linkedin.com/in/edison-chavarria-2441a123a/" className="social-button linkedin" target="_blank">
          <i className="fa fa-linkedin"></i>
        </a>
        
      </div>
    );
  }
}

export default Buttonslin;
