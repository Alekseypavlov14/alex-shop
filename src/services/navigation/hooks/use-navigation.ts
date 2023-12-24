import { pageUrls } from '@/configs/pages-urls'
import { useRouter } from 'next/navigation'

export function useNavigation() {
  const router = useRouter() 

  return ({
    navigateSignInPage: () => router.push(pageUrls.signInPage),
    navigateSignUpPage: () => router.push(pageUrls.signUpPage),
    navigateHomePage: () => router.push(pageUrls.homePage),
    navigateSearchPage: () => router.push(pageUrls.searchPage),
    navigateBlogPage: () => router.push(pageUrls.blogPage),
    navigateFavoritesPage: () => router.push(pageUrls.favoritesPage),
    navigateCartPage: () => router.push(pageUrls.cartPage)
  })
}