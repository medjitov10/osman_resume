import React, { Component } from 'react';

const FirstLastName = () => {


  return (

    <div className='first-last-name'>
      <h2 >Osman Medzhytov</h2>
      <div style={{ display: 'inline-flex', marginRight: '5%'}}>
        <div className='linksName'>

          <a href="https://github.com/medjitov10" target='_blank'>
            <i className="fa fa-github-alt fa-lg" aria-hidden="true"></i>
          </a>

        </div>

        <div className='linksName'>

          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=medjitov10@gmail.com&su=&body=&tf=1"
            target='_blank'>
            <i className="fa fa-envelope-o fa-lg" aria-hidden="true" ></i>
          </a>

        </div>

        <div className='linksName'>

          <a href="https://www.linkedin.com/in/osmanmed/"
            target='_blank'>
            <i className="fa fa-linkedin lg" aria-hidden="true"></i>
          </a>

        </div>

        <div className='linksName'>
            <a href="../../resume.pdf" target='_blank'>
              <i className="fa fa-file-pdf-o fa-lg" aria-hidden="true"></i>
            </a>
        </div>

      </div>

    </div>
  );
};

export default FirstLastName;
