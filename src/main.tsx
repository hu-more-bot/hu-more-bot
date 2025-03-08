import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import "../index.css"
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Suspense } from 'react'
import Loading from './components/Loading.tsx'

const Index = lazy(() => import('./pages/Index.tsx'))

const router = createHashRouter([{
  path: "/",
  element: (<Index/>),
  errorElement: (<div className="min-h-screen min-w-screen content-center text-center text-4xl">404</div>)
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<Loading/>}>
     <RouterProvider router={router}/>
    </Suspense>
  </React.StrictMode>,
)
