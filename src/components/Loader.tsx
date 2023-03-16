import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute top-0 left-0 w-full h-full bg-shaw-0 dark:bg-shaw-900 opacity-50"></div>
      <div className="text-center">
        <button className="btn btn-square loading"></button>
      </div>
    </div>
  );
};

const Loader2: React.FC = () => {
  return (

      <div className="text-center" style={{ margin: '40%' }}>
        <button className="btn btn-square loading"></button>
      </div>
  );
};

export default Loader;
export {
  Loader2
}
