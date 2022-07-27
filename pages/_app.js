import '../sass/index.scss'
import WrapperLayout from '../layouts/WrapperLayout';
import { createContext, useState, useMemo} from 'react';

export const GlobalContext = createContext({
  clikedServiceId: '',
  setClickedServiceId: ()=>{},
});

function MyApp({ Component, pageProps }) {

  const [clikedServiceId, setClickedServiceId] = useState('INITIAL STATE')

  const value = useMemo(
    ()=> ({clikedServiceId, setClickedServiceId}), [clikedServiceId]
  );

  return (

    //WrapperLayout is a wrapper for the header and footer to appear in all pages render by Next
    //trough <Component> component.
    <GlobalContext.Provider value={value}>
      <WrapperLayout>
          <Component {...pageProps} />
      </WrapperLayout>
    </GlobalContext.Provider>
  )
}

export default MyApp
