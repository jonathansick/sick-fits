import React, { Component } from 'react';

export default class Page extends Component {
  render() {
    return (
      <div>
        <p>Hey I'm on every page.</p>
        { this.props.children }
      </div>
    )
  }
}
