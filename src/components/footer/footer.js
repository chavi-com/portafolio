import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
function Footer() {
  return (
    <div className="container-fluid bg-black py-2">
      <div className="row">
        <div className="col">
          <h5 className='text-footer'>PORTAFOLIO CREADO CON:</h5>
          <h5> React.js</h5>
          <h5>typeScript</h5>
          <h5>css</h5>
          <h5>html</h5>
          

        </div>
        <div className="col">
          <h5 className='text-footer'>CONTACTO DEL PROGRAMADOR:</h5>
          <h5>edizonchavi@gmail.com</h5>
          <h5>+57 3052102014</h5>
          <h5> https://www.linkedin.com/in/edison-chavarria-2441a123a/</h5>
          <h5>https://github.com/chavi-com</h5>
        </div>
      
      </div>
    </div>
  );
}

export default Footer;
