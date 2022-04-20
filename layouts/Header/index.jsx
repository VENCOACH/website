import NavigationBar from '../../components/navigationBar';
import style from './header.module.scss'
import useWindowSize from '../../hooks/useWindowSize';
import MobileNavigationBar from '../../components/mobileNavigationBar';


export default function Header() {

  const {container} = style;

  

  const size = useWindowSize();

  return (
    <div className={container}>
      {size.width > 990 ? (
        <NavigationBar />
      ) : (
        <MobileNavigationBar />
      )}
    </div>
  );
}