import React from 'react';
import Counter from './shared/components/Counter';
// import Card from './shared/components/Card';

const WebAppTitle = () => {
  return (
    <div>
      <h2 style={{color: '#9400d3', fontSize: '32'}}>
        I'm a React app component.
      </h2>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Counter />
      <WebAppTitle />
      {/* <Card /> */}
    </>
  );
};

export default App;
