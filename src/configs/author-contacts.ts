export interface AuthorContact {
  service: string
  contact: {
    label: string,
    href: string
  }
}

export const authorContacts: AuthorContact[] = [
  { 
    service: 'Gmail', 
    contact: {
      label: 'aleshapavlov9@gmail.com',
      href: 'mailto:aleshapavlov9@gmail.com'
    }
  },
  {
    service: 'Telegram',
    contact: {
      label: '@aleshapavlov14',
      href: 'https://t.me/aleshapavlov14'
    }
  },
  {
    service: 'Instagram',
    contact: {
      label: '@alio.sha13',
      href: 'https://instagram.com/alio.sha13'
    }
  },
  {
    service: 'WhatsApp',
    contact: {
      label: '+40 739 521 908',
      href: 'https://wa.me/40739521908'
    }
  }
]