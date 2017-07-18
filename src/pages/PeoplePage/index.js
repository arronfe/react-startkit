/**
 * Created by arron on 2017/7/18.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as peopleActions from '../../actions/people-actions';

import PersonInput from './PersonInput';
import PeopleList from './PeopleList';

class PeoplePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    }
  }

  render() {
    const { people } = this.props;

    console.log(this.props)

    return (
      <div>
        <PersonInput addPerson={this.props.actions.addPerson} />
        <PeopleList people={people} />
      </div>
    )
  }
}

PeoplePage.propTypes = {
  people: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    people: state.people
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(peopleActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PeoplePage);
