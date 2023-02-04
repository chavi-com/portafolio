import React, { Component } from 'react';
import './contactobtn.css';

class SocialButtons extends Component {
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
    let positionClass = this.state.fixed ? 'fixed-buttons' : 'static-buttons';
    return (
      <div className={positionClass}>
        <a href="https://api.whatsapp.com/send?phone=+573052102814" className="social-button whatsapp" target="_blank">
          <i className="fa fa-whatsapp"></i>
          
        </a>
        
      </div>
    );
  }
}

export default SocialButtons;
