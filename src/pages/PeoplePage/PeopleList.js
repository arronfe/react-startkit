/**
 * Created by arron on 2017/7/18.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Person from './Person';

const PeopleList = ({people}) => (
  <div>
    {people.map(person =>
      <Person key={person.lastname} person={person}/>
    )}
  </div>
);

PeopleList.propTypes = {
  people: PropTypes.array.isRequired
};

export default PeopleList;


