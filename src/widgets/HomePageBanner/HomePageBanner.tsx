import { FC } from 'react'
import { Container } from '@/shared/components/Container'
import Image from 'next/image'
import homePageImage from '@/shared/images/home-page-main-image.jpg'
import styles from './HomePageBanner.module.scss'

interface HomePageBannerProps {}

export const HomePageBanner: FC<HomePageBannerProps> = () => {
  return (
    <div className={styles.HomePageBanner}>
      <Image className={styles.Image} layout='responsive' src={homePageImage} alt='' />

      <div className={styles.Content}>
        <Container className={styles.Container}>
          <div className={styles.Title}>You deserve <br/> to be successful</div>
        </Container>
      </div>
    </div>
  )
}