// import React, { useState } from 'react';

// // Child component
// const ChildComponent = React.memo(({ onButtonClick }) => {
//   console.log('ChildComponent rendered');
//   return (
//     <button onClick={onButtonClick}>Click me</button>
//     // <h1>g</h1>
//   );
// });

// const ParentComponent = () => {
//   const [count, setCount] = useState(0);
//   const [value, setValue] = useState('');

//   // Function to handle button click
//   const handleClick = () => {
//     console.log('Button clicked');
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//       <input 
//         type="text" 
//         value={value} 
//         onChange={(e) => setValue(e.target.value)} 
//         placeholder="Type something..." 
//       />
//       <ChildComponent onButtonClick={handleClick} />
//     </div>
//   );
// };

// export default ParentComponent;


// ================================================================


// solution

import React, { useState, useCallback } from 'react';

// Child component
const ChildComponent = React.memo(({ onButtonClick }) => {
  console.log('ChildComponent rendered');
  return (
    <button onClick={onButtonClick}>Click me</button>
  );
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');

  // Memoize the handleClick function using useCallback
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input 
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        placeholder="Type something..." 
      />
      <ChildComponent onButtonClick={handleClick} />
    </div>
  );
};

export default ParentComponent;
