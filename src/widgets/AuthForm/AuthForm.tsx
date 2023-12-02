'use client'

import { FC } from 'react'
import { Button } from '@/shared/components/Button'
import { Input } from '@/shared/components/Input'
import { Link } from '@/shared/components/Link'
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
            placeholder='password'
            type='password' 
            id="password" 
          />
        </div>
        
        <Button 
          className={styles.Button}
          onClick={() => {}}
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