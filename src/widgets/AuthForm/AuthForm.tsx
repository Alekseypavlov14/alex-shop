'use client'

import { ChangeEvent, FC, MouseEvent } from 'react'
import { Button } from '@/shared/components/Button'
import { Input } from '@/shared/components/Input'
import { Link } from '@/shared/components/Link'
import { 
  useAuthenticationLogin, 
  useAuthenticationPassword, 
  useSignIn, 
  useSignUp, 
  useUpdateLogin, 
  useUpdatePassword 
} from '@/features/authentication'
import Image from 'next/image'
import styles from './AuthForm.module.scss'
import google from '@/shared/icons/google-logo.svg'

export type AuthFormMode = 'sign-in' | 'sign-up'

export const signInMode: AuthFormMode = 'sign-in'
export const signUpMode: AuthFormMode = 'sign-up'

interface AuthFormProps {
  mode: AuthFormMode
}

export const AuthForm: FC<AuthFormProps> = ({ mode }) => {
  const title = mode === signInMode ? 'Sign In' : 'Sign Up'
  const buttonLabel = mode === signInMode ? 'Sign in' : 'Sign up'
  const alternativeLink = mode === signInMode ? 'Sign up?' : 'Sign in?'
  const alternativeHref = mode === signInMode ? '/sign-up' : '/sign-in'

  const signIn = useSignIn()
  const signUp = useSignUp()

  const login = useAuthenticationLogin()
  const password = useAuthenticationPassword()
  const updateLogin = useUpdateLogin()
  const updatePassword = useUpdatePassword()

  function updateLoginHandler(e: ChangeEvent<HTMLInputElement>) {
    updateLogin(e.target.value.trim())
  }

  function updatePasswordHandler(e: ChangeEvent<HTMLInputElement>) {
    updatePassword(e.target.value.trim())
  }

  function authenticationHandler(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    const authenticate = mode === signInMode ? signIn : signUp
    authenticate()
  }

  return (
    <form className={styles.AuthForm}>
      <div className={styles.Title}>{title}</div>

      <div className={styles.InputBlock}>
        <label 
          className={styles.Label}
          htmlFor='login' 
        >
          Login
        </label>
        
        <Input 
          className={styles.Input}
          onChange={updateLoginHandler}
          value={login}
          placeholder='login' 
          id='login' 
        />
      </div>

      <div className={styles.InputBlock}>
        <label 
          className={styles.Label}
          htmlFor='password' 
        >
          Password
        </label>
        
        <Input 
          className={styles.Input}
          onChange={updatePasswordHandler}
          value={password}
          placeholder='password'
          type='password' 
          id="password" 
        />
      </div>
      
      <Button 
        className={styles.Button}
        onClick={authenticationHandler}
      >
        {buttonLabel}
      </Button>  

      <hr className={styles.Separator} />

      <Button className={styles.GoogleButton} onClick={() => {}} outlined>
        <Image className={styles.GoogleButtonLogo} src={google} alt='' />
        Google
      </Button>

      <div className={styles.AlternativeContainer}>
        <Link className={styles.Alternative} href={alternativeHref}>{alternativeLink}</Link>
      </div>
    </form> 
  )
}