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
//   const refContainer = React.useRef(null);
//
//   return (
//     <form onSubmit={(a, b) => {
//     window.alert(refContainer.current.value);
//   }}>
// <div>
//   <label htmkFor="username">Username:</label>
//   <input name="username" id="username" type="text" ref={refContainer}/>
//   </div>
//   <button type="submit">Submit</button>
//     </form>
// )
// }

  // 3
  // return <div/>
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
