import { createContext, useState, useEffect} from 'react'
import { USER_STATUS } from '../constants'
import { getToken } from '../utils/tokenManager'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [user, setAuth] = useState(USER_STATUS.NOT_KNOW)

    useEffect(() => {
        if (user === USER_STATUS.NOT_KNOW) {
            getUser()
        }
    }, [])

    async function getUser(token = getToken()) {
        await fetch('http://localhost:6001/user/self', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
          .then(async res => { // Refactorizar: Sacar en un servicio por apartes.
            const data = await res.json()
            if (!res.ok) throw { ...res, data }
            return data
          })
          .then(data => {
            setAuth(data?.user) // Refactorizar: Hacer un mapeado del usuario.
            return data
          })
          .catch(error => {
            if (error?.data) {
              console.log(data.msg)
            }
          })
    }

    return (
        <AuthContext.Provider value={{ user, getUser }}>
            {children}
        </AuthContext.Provider>
    )
}
