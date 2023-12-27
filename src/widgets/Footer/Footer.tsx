import { FC } from 'react'
import { authorContacts } from '@/configs/author-contacts'
import { Container } from '@/shared/components/Container'
import { Anchor } from '@/shared/components/Anchor'
import { Logo } from '@/shared/components/Logo'
import styles from './Footer.module.scss'

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <Container className={styles.Footer}>
      <Logo />

      <div className={styles.FooterSection}>
        <div className={styles.FooterSectionTitle}>Categories</div>
        <div className={styles.FooterSectionContent}>
          <div className={styles.FooterSectionContentRow}>Computers</div>
          <div className={styles.FooterSectionContentRow}>Phones</div>
          <div className={styles.FooterSectionContentRow}>Earphones</div>
          <div className={styles.FooterSectionContentRow}>TV</div>
          <div className={styles.FooterSectionContentRow}>Devices</div>
        </div>
      </div>

      <div className={styles.FooterSection}>
        <div className={styles.FooterSectionTitle}>Author</div>
        <div className={styles.FooterSectionContent}>
          <div className={styles.FooterSectionContentRow}>Oleksii Pavlov</div>
          
          {authorContacts.map(contact => (
            <div className={styles.FooterSectionContentRow} key={contact.service}>
              {contact.service}:&nbsp;

              <Anchor 
                className={styles.FooterSectionAnchor}
                href={contact.contact.href}
              >
                {contact.contact.label}
              </Anchor>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}