//Topic1:get method to integrate API

async function getUsers() {
    try {
        const response = await fetch("http://localhost:4000/todo");
        const data = await response.json();

        setUser(data);
        setName(data[0].name);
        setMobile(data[0].mobile);
        setEmail(data[0].email);
        setUserId(data[0].id);
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

//same code as above but using .then(promise handler) , but prefer above style

// function getUsers() {
//     let resp=fetch("http://localhost:4000/todo").then((result) => {
//       result.json().then((resp) => {
//         // console.warn(resp)
//         setUser(resp)
//         setName(resp[0].name)
//         setMobile(resp[0].mobile)
//         setEmail(resp[0].email)
//         setUserId(resp[0].id)

//       })
//     })
//   }


//Topic2:delete method to integrate API(uswed for Api which delete data from database)
async function deleteUser(id) {
    try {
        const response = await fetch(`http://localhost:4000/todo/${id}`, {
            method: 'DELETE'
        });
        const result = await response.json();
        console.warn(result);
        await getUsers(); // Assuming you have an async getUsers function
    } catch (error) {
        console.error("Error deleting user:", error);
    }
}

//Topic3:PUT method to integrate API(used for API which update values in database)
async function updateUser() {
    try {
        const item = { name, email, mobile };
        const response = await fetch(`http://localhost:4000/todo/${userId}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        const result = await response.json();
        console.warn(result);
        await getUsers(); // Assuming you have an async getUsers function
    } catch (error) {
        console.error("Error updating user:", error);
    }
}

//post method to insert data in database
async function createUser(newUser) {
    try {
        const response = await fetch("http://localhost:4000/todo", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });
        const result = await response.json();  //it makes data in json format to  work further 
        console.warn(result);
        await getUsers(); // Assuming you have an async getUsers function
    } catch (error) {
        console.error("Error creating user:", error);
    }
}

//using axios for API integration: 

import axios from 'axios';

async function postData() {
  const dataToSend = {
    name: 'John Doe',
    email: 'john@example.com',
    // Other properties...
  };

  try {
    const response = await axios.post('https://api.example.com/postData', dataToSend, {
      headers: {
        'Content-Type': 'application/json',
        // Other headers if needed...
      },
    });

    if (response.status === 200) {
      console.log(response.data); // Response data
      // Handle the response or return the data if needed
      return response.data;
    } else {
      throw new Error('Request failed with status:', response.status);
    }

  } catch (error) {
    console.error('There was an error!', error);
    // Handle the error or throw it further
    throw error;
  }
}

// Call the postData function
postData()
  .then(data => {
    // Handle the returned data if needed
    console.log('Returned data:', data);
  })
  .catch(error => {
    // Handle any errors that might occur in the postData function
    console.error('Error in postData function:', error);
  });


/* Note:  VVI: 
In most cases, when you're working with APIs that return JSON (JavaScript Object Notation), using response.json() to parse the response is the appropriate method. However, it's crucial to understand the nature of the data being returned by the API.

JSON parsing using response.json() specifically converts the response body into a JavaScript object, assuming that the data returned is in JSON format. If the response is not valid JSON, this method will throw an error.

The fetch() method in JavaScript is commonly used to make HTTP requests to web servers and APIs. When sending data using fetch(), especially when working with POST requests or other methods that require a request body, you often need to format the data appropriately.
*/

//VVI topics: for API integration: 
//topic: Headers
/*
When integrating with APIs in a React application, you may need to include headers in your HTTP requests. The headers can contain information such as authentication tokens, content types, or other metadata. Here are some common headers you might include in API requests:

1.Content-Type:

=>The Content-Type header is used to indicate the media type or MIME type of the request payload (data being sent to the server). It tells the server about the format of the data being sent in the request body.

For example, when sending JSON data, you set the Content-Type to 'application/json'. If you are submitting a form, you might use 'application/x-www-form-urlencoded' or 'multipart/form-data'.
headers: {
  'Content-Type': 'application/json',
}

2.Authorization:

=>Used to include authentication tokens or API keys. The specific format depends on the authentication method used by the API.

headers: {
  'Authorization': 'Bearer your_access_token',
}

3.Accept:

=>The Accept header, on the other hand, is used to inform the server about the types of media or response formats that the client can understand or process. It specifies the desired media types for the response.
For example, if your client can handle JSON, you might include 'application/json' in the Accept header. This helps the server understand what type of data format the client prefers.

headers: {
  'Accept': 'application/json',
}

4.Custom Headers:

=>You might need to include custom headers required by the API. For example, some APIs require a specific version or expect certain custom headers.

*/