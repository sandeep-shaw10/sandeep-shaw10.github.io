import React from 'react';
import Layout from '../components/Layout';


const withLayout = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: P) => {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};

export default withLayout;
