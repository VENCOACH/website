import '../sass/index.sass'
import WrapperLayout from '../layouts/WrapperLayout';

function MyApp({ Component, pageProps }) {
  return (

    //WrapperLayout is a wrapper for the header and footer to appear in all pages render by Next
    //trough <Component> component.

    <WrapperLayout>
      <Component {...pageProps} />
    </WrapperLayout>
  )
}

export default MyApp
