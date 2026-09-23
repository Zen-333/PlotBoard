import {createContext, useState} from 'react'
import type {Session, User} from '@supabase/supabase-js'
import supabase from '../config/supabaseClient'

interface AuthContextType {
    user: User | null
    session: Session | null
    signInWithGoogle: () => Promise<void>
    signInWithEmail: (email: string, password: string) => Promise<string | null>
    signInWithUsername: (username: string, password: string) => Promise<string | null>
    signUpWithEmail: (email: string, password: string, avatarFile?: File) => Promise<string | null>
    signOut: () => Promise<void>
    getProfile: () => Promise<{username: string; avatar_url: string | null} | null>
    updateProfile: (username: string, avatarFile?: File) => Promise<string | null>
    deleteAccount: () => Promise<string | null>
    profile: {username: string; avatar_url: string | null} | null
    refreshProfile: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({children}: {children: React.ReactNode})
{
    const [user, setUser] = useState<User | null>(null)
    const [session, setSession] = useState<Session | null>(null)
    const [loading, setLoading] = useState(true)
    const [profile, setProfile] = useState<{username: string | null; avatar_url: string | null} | null>(null)

    const refreshProfile = async () => {
        const {data: {session: currentSession}} = await supabase.auth.getSession()
        if(!currentSession) {setProfile(null); return}
        const {data} = await supabase
            .from('profiles')
            .select('username, avatar_url')
            .eq('user_id', currentSession.user.id)
            .single()
        setProfile(data ?? null);    
    }
}