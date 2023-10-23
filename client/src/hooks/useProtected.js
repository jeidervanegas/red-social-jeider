import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './useAuth'

export const useProtected = () => {
  const navigate = useNavigate()
  const { user } = useAuth()

  useEffect(() => {
    if (user === null) {
      navigate('/login', {
        replace: true
      })
    }
  }, [user])
}
