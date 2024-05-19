import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import Home from "./pages/Home"
import Category from "./pages/Category"
import SearchPage from "./pages/SearchPage"
import Favorites from "./pages/Favorites"
import GifPage from "./pages/GifPage"
import GifProvider from "./context/context"



const router = createBrowserRouter([
  {
    element : <AppLayout />,

    children : [
      {
        path : '/',
        element : <Home />
      },
      {
        path : '/:category',
        element : <Category />
      }, 
      {
        path : '/search/:query',
        element : <SearchPage />
      },
      {
        path : '/:type/:slug',
        element : <GifPage />
      },
      {
        path : '/favorites',
        element : <Favorites />
      }
    ]
  }
])

function App() {
  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>
  
  )
}

export default App
