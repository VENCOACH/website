import Header from '../Header';
import Footer from '../Footer';
import style from './wrapperLayout.module.sass';

export default function WrapperLayout({children}) {

  const { container } = style;
  
  return (
    <main className={container}>
        <Header/>
        {children}
        <Footer/>
    </main>
  )
}
