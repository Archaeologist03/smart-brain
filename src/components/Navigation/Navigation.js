import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ marginRight: 20, display: 'flex', justifyContent: 'flex-end' }}>
        <p
          onClick={() => onRouteChange('signout')}
          className="f3 link dim black underline p3 pointer">
          {' '}
          Sign Out{' '}
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ marginRight: 20, display: 'flex', justifyContent: 'flex-end' }}>
        <p
          onClick={() => onRouteChange('signin')}
          className="f3 link dim black underline p3 pointer">
          {' '}
          Sign In{' '}
        </p>
        <p
        style={{marginLeft: 20}}
          onClick={() => onRouteChange('register')}
          className="f3 link dim black underline p3 pointer">
          {' '}
          Register{' '}
        </p>
      </nav>
    );
  }
};

export default Navigation;
