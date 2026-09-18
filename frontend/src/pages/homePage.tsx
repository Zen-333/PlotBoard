import "../styles/entryPage.css"
import supabase from '../config/supabaseClient'

function HomePage() {
    return (
    <>
        <button onClick={() => supabase.auth.signOut()}>Sign out (temp)</button>
    </>
    )
}

export default HomePage;