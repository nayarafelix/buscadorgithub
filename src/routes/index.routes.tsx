import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import { Home, NotFound, Results } from "../pages"

const router = createBrowserRouter (
    createRoutesFromElements ([
      <Route path="/" element={<Home />} />,
      <Route path="/results" element={<Results />} />,
      <Route path="*" element={<NotFound />} />,
    ])
)

function Router () {
  return <RouterProvider router={router} />
}

export { Router }
