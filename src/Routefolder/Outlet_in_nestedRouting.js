/*Use of Outlet : 


1.Home.js (ParentComponent)

import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          <li><Link to="dashboard">Go to Dashboard</Link></li>
          <li><Link to="profile">Go to Profile</Link></li>
        </ul>
      </nav>

    // This is where the child components will be rendered 
      <Outlet />
    // </div>
  );
}

export default Home;


2.Dashboard.js (Child Component 1)
import React from 'react';

function Dashboard() {
  return <h2>Dashboard</h2>;
}

export default Dashboard;

3. Profile.js (Child Component 2)
import React from 'react';

function Profile() {
  return <h2>Profile</h2>;
}

export default Profile;

#Define Routes in App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Routes>
        // Parent route 
        <Route path="/" element={<Home />}>
         // Child routes  
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


##NOte: Step 3: Start the Application
Now, when you run the app:

At the root path (/), the Home component will render, along with the navigation links.
When you click on the Dashboard link (/dashboard), the Dashboard component will render inside the Outlet of the Home component.
When you click on the Profile link (/profile), the Profile component will render inside the Outlet of the Home component.
How it works:
The Outlet component in the Home.js file acts as a placeholder where the child routes (Dashboard and Profile) are rendered.
When the URL changes (e.g., /dashboard or /profile), React Router automatically renders the corresponding child route inside the Outlet.
Benefits of Outlet:
Enables nested routing, keeping the parent layout or content persistent while swapping out the child components.
Ideal for creating layouts like dashboards, where you want a constant sidebar or navbar with dynamic content changing in a specific area.




*/

