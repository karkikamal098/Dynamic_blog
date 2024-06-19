import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout';
import ErrorPage from './Pages/ErrorPage.jsx';
import Home from './Pages/Home';
import PostDetail from './Pages/PostDetail';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Authors from './Pages/Authors';
import Logout from './Pages/Logout';
import CategoryPosts from './Pages/CategoryPosts';
import CreatePost from './Pages/CreatePost.jsx';
import EditPost from './Pages/EditPost';
import Dashboard from './Pages/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children:[
      {index:true, element: <Home />},
      {path:"posts/:id", element: <PostDetail />},
      {Path:"profile/:id",element: <Login />},
      {path:"register", element: <Register />},
      {path:"login", element: <Login/>},
      {path:"authors", element: <Authors />},
      {path:"logout", element: <Logout />},
      {path:"posts/:category", element: <CategoryPosts />},
      {path:"myposts/:id", element: <Dashboard/>},
      {path:"createpost", element: <CreatePost/>},
      {path:"posts/id/edit", element: <EditPost/>}
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);



