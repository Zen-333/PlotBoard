import './App.css'
import { useState } from 'react'
import EntryPage from "./pages/entryPage"
import HomePage from "./pages/homePage"
import supabase from "./config/supabaseClient"

function App() {
  console.log(supabase);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn? <HomePage setLoggedIn=(setIsLoggedIn)/>: <EntryPage/>}
    </>
  )
}

export default App
