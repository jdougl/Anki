import '../styles/globals.css';
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  // Provide additional context or layout to your pages
  return <Component {...pageProps} />;
}

export default MyApp;