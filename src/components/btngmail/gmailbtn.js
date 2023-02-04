import React, { Component } from 'react';
import './gmailbtn.css';

class Buttongml  extends Component {
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
    let positionClass = this.state.fixed ? 'fixed-butgml' : 'static-buttons';
    return (
      <div className={positionClass}>
        <a href="mailto:edizonchavi@gmail.com" className="social-button gmail" target="_blank">
          <i className="fa fa-envelope"></i>
        </a>
        
      </div>
    );
  }
}

export default Buttongml;
