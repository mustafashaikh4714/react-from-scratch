import React, { Component } from 'react'

export default class Header extends Component {
  render() {
     
    return (
      <div>
        <div className="container">
         <div className="header">
          <ul className="list">
          {/* <li><a href="#">Home</a></li> */}
          <p>
              {'Header'}
          </p>
          </ul>
         </div>
        </div>
      </div>
    )
  }
}
