import './App.css'
import EntryPage from "./pages/entryPage"
import supabase from "./config/supabaseClient"

function App() {
  console.log(supabase);

  return (
    <>
      <EntryPage/>
    </>
  )
}

export default App
