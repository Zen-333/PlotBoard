import './App.css'
import {useState, useEffect} from 'react'
import type {Session} from '@supabase/supabase-js'
import EntryPage from "./pages/entryPage"
import HomePage from './pages/homePage'
import supabase from "./config/supabaseClient"

function App() {

  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
      setSession(session);
      setLoading(false);
    })

    const {data: {subscription}} = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    })

    return () => subscription.unsubscribe();
  }, []);

  if(loading) return null;

  return (
    <>
      {session ? <HomePage/>: <EntryPage/>}
    </>
  )
}

export default App
