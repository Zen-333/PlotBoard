import {createContext} from 'react'
import type {Session, User} from '@supabase/supabase-js'

interface AuthContextType {
    user: User | null
    session: Session | null
    signInWithGoogle: () => Promise<void>
    signInWithEmail: (email: string, password: string) => Promise<string | null>
    signInWithUsername: (username: string, password: string) => Promise<string | null>
    signUpWithEmail: (email: string, password: string, avatarFile?: File) => Promise<string | null>
    signOut: () => Promise<void>
    getProfile: () => Promise<{username: string | null; avatar_url: string | null} | null>
    updateProfile: (username: string, avatarFile?: File) => Promise<string | null>
    deleteAccount: () => Promise<String | null>
    profile: {username: string | null; avatar_url: string | null} | null
    refreshProfile: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({children}: {children: React.ReactNode})
{
    
}