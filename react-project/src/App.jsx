import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

import Hero from './components/Hero'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'

import MainLayout from './layouts/MainLayout';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage/>} />
    <Route path='/about' element={<h1>about page</h1>} />
    <Route path='/jobs' element={<JobsPage />} />
    <Route path='/job/:id' element={<NotFoundPage />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App