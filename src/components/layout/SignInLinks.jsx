import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/action/authActions';

const SingInLinks = (props) => {

  const onLogOutClick = (e) => {
    e.preventDefault();
    props.signOut();
  }

  return (
    <ul className='right'>
      <li><NavLink to='/create'>New Project</NavLink></li>
      <li><NavLink to='#signout' onClick={onLogOutClick}>Log Out</NavLink></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{props.profile.initials}</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SingInLinks);