/**
 * Created by arron on 2017/7/18.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PersonInput extends Component {
  constructor(props) {
    super(props);
  }

  onAddPersonClick = () => {
    const firstNameElement = document.getElementById('firstname');
    const lastNameElement = document.getElementById('lastname');

    this.props.addPerson({
      firstname: firstNameElement.value,
      lastname: lastNameElement.value
    });

    // clean
    firstNameElement.value = '';
    lastNameElement.value = '';

    // firstname element autofocuss
    firstNameElement.focus();

  };

  render() {
    return (
      <div>
        <input type="text" id="firstname" placeholder="First Name"/>
        <input type="text" id="lastname" placeholder="Last Name"/>
        <button onClick={this.onAddPersonClick}>Add person</button>
      </div>
    )
  }
}

PersonInput.propTypes = {
  addPerson: PropTypes.func.isRequired
};

export default PersonInput;
