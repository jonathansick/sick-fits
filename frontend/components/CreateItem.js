import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';

class CreateItem extends Component {
  state = {
    title: 'Pencil',
    description: 'A nice HB',
    image: 'pencil.jpg',
    largeImage: 'pencil-big.jpg',
    price: 1.0,
  };

  // Generic change handler for all inputs in fieldset
  // arrow function is instance property, so "this" is available.
  handleChange = e => {
    const { name, type, value } = e.target;
    // Convert val to number if input's type is number
    const val = type === 'number' ? parseFloat(value) : value;
    console.log({ name, type, val });
    // uses computed property name based on input name.
    this.setState({ [name]: val });
  };

  render() {
    return (
      <Form
        onSubmit={e => {
          e.preventDefault();
          console.log(this.state);
        }}
      >
        <fieldset>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              required
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="price">
            Price
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Price"
              required
              value={this.state.price}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="description">
            Description
            <textarea
              type="text"
              id="description"
              name="description"
              placeholder="Enter
              a description"
              required
              value={this.state.description}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </fieldset>
      </Form>
    );
  }
}

export default CreateItem;
