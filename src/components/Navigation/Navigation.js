import React from 'react';

import ProfileIcon from '../Profile/ProfileIcon';

const Navigation = ({ onRouteChange, isSignedIn, toggleModal }) => {
  if (isSignedIn) {
    return (
      <nav
        style={{
          marginRight: 20,
          display: 'flex',
          justifyContent: 'flex-end',
        }}>
        <ProfileIcon toggleModal={toggleModal} onRouteChange={onRouteChange} />
      </nav>
    );
  } else {
    return (
      <nav
        style={{
          marginRight: 20,
          display: 'flex',
          justifyContent: 'flex-end',
        }}>
        <p
          onClick={() => onRouteChange('signin')}
          className='f3 link dim black underline p3 pointer'>
          {' '}
          Sign In{' '}
        </p>
        <p
          style={{ marginLeft: 20 }}
          onClick={() => onRouteChange('register')}
          className='f3 link dim black underline p3 pointer'>
          {' '}
          Register{' '}
        </p>
      </nav>
    );
  }
};

export default Navigation;
