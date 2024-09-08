/* 
Topic:
Q.How setState (or setInputs) Works:
=>React provides two ways to update state:

1.Directly using the new state:
code:
setInputs(newState);

2.Using a function that gets the current state as its argument:
code:
setInputs(prevState => newState);


Q.Why Use a Function to Update State?
=> React's state updates are asynchronous. If you directly use setInputs({ [name]: value }), React may batch state updates, and you could accidentally refer to an outdated version of the state if multiple updates happen quickly.
code: By using a function in setInputs like this:
setInputs(values => ({
  ...values,        // This 'values' is the most up-to-date state
  [name]: value     // Update the specific input field
}));

=>React ensures that values refers to the most current version of inputs, even if other state updates are in progress.


EG: code: To get idea: 
import React, { useState } from 'react';

function Test() {  // Capitalize the component name
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({
      ...values,
      [name]: value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          name="username" 
          value={inputs.username || ""} 
          onChange={handleChange} 
        />
      </label>

      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange} 
        />
      </label>

      <input type="submit" />
    </form>
  );
}

export default Test;  // Capitalize the component name here too


##.1.HOw it works in above code:
handleChange Event: Each time an input field changes, the handleChange function is triggered.
Code: 
const handleChange = (event) => {
  const name = event.target.name;   // e.g., "username" or "age"
  const value = event.target.value; // The new value entered by the user
  
  setInputs(values => ({
    ...values,        // Spread the current state into a new object
    [name]: value     // Update the field with the new value
  }));
}

2. Updating the State:

values refers to the current state of the inputs object (i.e., the latest data stored for all form fields).
The spread operator ...values copies all the current values from the inputs state.
[name]: value dynamically updates the field that corresponds to the name attribute of the input being changed (e.g., "username" or "age").

Example of Why Using the Function Form is Important:
Imagine you have two input fields (username and age), and both trigger the handleChange function nearly at the same time. Without using the function form, React might not use the current state and could result in an incomplete update.

For example, if you use:
code: 
setInputs({ [name]: value });

=>If the username input changes first, the state becomes { username: 'John' }.
If the age input changes immediately after, the state would become { age: 25 }, and the username value would be lost because the previous state wasn't properly merged.

#However, with the function form:
setInputs(values => ({
  ...values,        // This keeps the previous state intact
  [name]: value     // Updates only the relevant input field
}));

1.After username changes, the state becomes { username: 'John' }.
2. After age changes, the state becomes { username: 'John', age: 25 }, because the previous state is preserved and only the relevant field is updated.
This approach ensures that state updates are handled safely and efficiently in React.

*/

