import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import "../index.css"
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Suspense } from 'react'
import Loading from './components/Loading.tsx'
import eindhoven from './pages/prevcomps/eindhoven.tsx'
import porto from './pages/prevcomps/porto.tsx'
import bordeaux from './pages/prevcomps/bordeaux.tsx'
import { LadybugModel } from './3dcomponents/Ladybug.tsx'
import { BordeauxIdentifier } from './pages/prevcomps/bordeaux';

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
  element : (<PrevComp name="Porto" images={[{description:"Porto", src: "/pictures/eindhovensuperteam.jpg"}]} model={<LadybugModel/>}/>)
},{
  path: "bordeaux",
  element : (<PrevComp BordeauxIdentifier/>)

},{
  path: "eindhoven",
  element : (<PrevComp title="Eindhoven 2024" images={[{description:"Eindhoven", src: "/pictures/eindhovensuperteam.jpg"}]} model={<LadybugModel/>}/>)
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<Loading/>}>
     <RouterProvider router={router}/>
    </Suspense>
  </React.StrictMode>,
)
