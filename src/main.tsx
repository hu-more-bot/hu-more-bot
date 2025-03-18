import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import "../index.css"
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Suspense } from 'react'
import Loading from './components/Loading.tsx'
import eindhoven from './pages/prevcomps/eindhoven.tsx'
import porto from './pages/prevcomps/porto.tsx'
import bordeaux from './pages/prevcomps/bordeaux.tsx'

const Index = lazy(() => import('./pages/Index.tsx'))
const PrevComp = lazy(()=> import("./pages/PrevComp.tsx"))

const router = createHashRouter([{
  path: "/",
  element: (<Index/>),
  errorElement: (<div className="min-h-screen min-w-screen content-center text-center text-4xl">404</div>)
},{
  path: "history",
  element: (<Index/>)
},{
  path: "about",
  element: (<Index/>)
},{
  path: "sponsors",
  element: (<Index/>)
},{
  path: "porto",
  element : (<PrevComp title="Porto 2022" content={porto}/>)
},{
  path: "bordeaux",
  element : (<PrevComp title="Bordeaux 2023" images={[{description:"asd", src: "/pictures/eindhovensuperteam.jpg"}]} model={}/>)

},{
  path: "eindhoven",
  element : (<PrevComp title="Eindhoven 2024" content={eindhoven}/>)
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<Loading/>}>
     <RouterProvider router={router}/>
    </Suspense>
  </React.StrictMode>,
)
