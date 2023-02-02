import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import IndexPage from "./pages/IndexPage/IndexPage";
import AuthPage from "./pages/AuthPage/AuthPage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
