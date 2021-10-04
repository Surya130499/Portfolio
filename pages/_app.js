import '../styles/globals.css'
import '../styles/styles/style.css';

function MyApp({
  Component,
  pageProps
}) {
  return <Component {
    ...pageProps
  }
  />
}

export default MyApp