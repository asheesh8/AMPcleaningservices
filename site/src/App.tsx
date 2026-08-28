import { useEffect } from 'react'
import { Route, Switch, useLocation } from 'wouter'
import { SiteHeader } from './components/SiteHeader'
import { SiteFooter } from './components/SiteFooter'
import { HomePage } from './pages/HomePage'
import { EstimatePage } from './pages/EstimatePage'
import { ApplyPage } from './pages/ApplyPage'
import { ThanksPage } from './pages/ThanksPage'
import { NotFoundPage } from './pages/NotFoundPage'

function ScrollToTop() {
  const [location] = useLocation()
  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0)
  }, [location])
  return null
}

export function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <ScrollToTop />
      <main id="main">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/estimate" component={EstimatePage} />
          <Route path="/apply" component={ApplyPage} />
          <Route path="/thanks" component={ThanksPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <SiteFooter />
    </>
  )
}
