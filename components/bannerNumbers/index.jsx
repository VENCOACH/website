import styles from './bannerNumbers.module.scss';

export default function BannerNumbers() {
  const {bannerNumbers_vertical, bannerNumbers} = styles;
  return (
    <>
        <img className={bannerNumbers} src="img/banner_numbers.png" alt="" />
        <img className={bannerNumbers_vertical} src="img/banner_numbers_vertical.png" alt="" />
    </>
  )
}
