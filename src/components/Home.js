import React, { Component } from 'react'

export default class Home extends Component {
  render() {
      let text = 'Something'
    return (
      <div>
        <p>In the Home Component</p>
        <p> name:{this.props.name} </p>
        <p> age:{this.props.age}</p>
        {/* <p> user:{this.props.user}</p> */}
        <ul> Hobies:{this.props.user.Hobbies.map((hobbie, i) => <li key={i}>{hobbie}</li>)}</ul>
        <p> user:{text}</p>
      </div>
    )
  }
}
