import { AuthForm, signUpMode } from '@/widgets/AuthForm'
import Image from 'next/image'
import styles from '@/shared/styles/auth-pages.module.scss'
import bgImage from '@/shared/images/auth-background-image.jpg'

export default function SignUpPage() {
  return (
    <div className={styles.Container}>
      <div className={styles.BackgroundImage}>
        <Image src={bgImage} alt='' />
      </div>

      <AuthForm mode={signUpMode} />
    </div>
  )
}