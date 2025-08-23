import "../styles/globals.css"; // must be relative path to styles folder

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
