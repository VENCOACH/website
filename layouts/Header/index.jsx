import NavigationBar from '../../components/navigationBar';
import style from './header.module.scss'
import useWindowSize from '../../hooks/useWindowSize';
import MobileNavigationBar from '../../components/mobileNavigationBar';
import navMenuData from '../../data/navMenuData'

export default function Header() {

  const {container} = style;

  

  const size = useWindowSize();

  return (
    <div className={container}>
      {size.width > 990 ? (
        <NavigationBar  data={navMenuData}/>
      ) : (
        <MobileNavigationBar />
      )}
    </div>
  );
}