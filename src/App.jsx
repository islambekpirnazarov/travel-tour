import React, { useContext, useReducer } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Packeges from './pages/Packeges'
import Contact from './pages/Contact'
import Destinations from './pages/Destinations'
import Book from './pages/Book'
import { MainContext } from './context/context'
import { initialState, reducer } from './context/reducer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DetailDest from './pages/DetailDest'
import DetailTour from './pages/DetailTour'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const route = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='/destinations' element={<Destinations />} />
      <Route path='/packeges' element={<Packeges />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/book' element={<Book />} />
      <Route path='/book/:id' element={<Book />} />
      <Route path='/destinations/:slug' element={<DetailDest/>}/>
      <Route path='/packeges/:slug' element={<DetailTour/>}/>
    </Route>
  ))
  return (
    <MainContext.Provider value={{state, dispatch}}>
      <RouterProvider router={route} />
    </MainContext.Provider>
  )
}

export default App