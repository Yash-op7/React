import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

import Navbar from './components/Navbar';
import CardContainer from './components/CardContainer';
import Footer from './components/Footer';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index element={<h1>home page</h1>} />,
    <Route path={'/about'} element={<h1>about page</h1>} />
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App