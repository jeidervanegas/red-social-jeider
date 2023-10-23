import { useContext } from 'react'
import { AuthContext } from '../context/auth'

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext)
  return {
    user,
    setUser
  }
}
