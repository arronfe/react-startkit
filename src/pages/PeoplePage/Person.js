/**
 * Created by arron on 2017/7/18.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Person = ({person}) => (
  <div>
    {person.lastname}, {person.firstname}
  </div>
);

Person.propTypes = {
  person: PropTypes.object.isRequired
};


export default Person;
