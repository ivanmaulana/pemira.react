import React from 'react';
import Helmet from 'react-helmet';

import Login from './Login';

function HomeRoute() {
  return (
    <div style={{ paddingTop: '20px' }}>
      <Helmet>
        <title>Pemira Himalkom</title>
      </Helmet>

      <Login />
    </div>
  );
}

export default HomeRoute;
