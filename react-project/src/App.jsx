import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

import Hero from './components/Hero'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route index element={<Hero/>} />
    <Route path='/about' element={<h1>about page</h1>} />
    </>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App