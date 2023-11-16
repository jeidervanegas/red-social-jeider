import { useContext } from 'react'
import { AuthContext} from '../context/Auth'

export function useAuth() {
    const { user, getUser } = useContext(AuthContext)

    return { user, getUser }
}
