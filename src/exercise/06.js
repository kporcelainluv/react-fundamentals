// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 replace input's name attribute with id attribute
  // 🐨 make sure to associate the label to the input. 
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  // 1
//   return (
//     <form onSubmit={(a, b) => {
//       window.alert(a.target.username.value);
//   }}>
//       <div>
//         <label>Username:</label>
//         <input name="username" type="text" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

  // 2
  // const refContainer = React.useRef(null);

  // return (
  //   <form onSubmit={(a, b) => {
  //   window.alert(refContainer.current.value);
  // }}>
  //     <div>
  //       <label htmlFor="username">Username:</label>
  //       <input name="username" id="username" type="text" ref={refContainer}/>
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )

  // 3 Validate lower-case
  // const [error, setError] = React.useState(null);
  //
  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   const isValid = value === value.toLowerCase();
  //   setError(isValid ? null : 'Username must be lower case');
  // };
  //
  // return (
  //   <form>
  //     <div>
  //       {error && <div style={{background: 'red', color: 'white'}}>{error}</div>}
  //       <label htmlFor="username">Username:</label>
  //       <input name="username" id="username" type="text" onChange={handleChange}/>
  //     </div>
  //     <button disabled={error} type="submit">Submit</button>
  //   </form>
  // )
  
  // 4 Control the input value

  const [text, setText] = React.useState('');

  return (
    <form>
      <div>
        <label htmlFor="username">Username:</label>
        <input name="username" id="username" type="text" value={text} onChange={(e) => setText(e.target.value.toLowerCase())}/>
      </div>
      <button   type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
