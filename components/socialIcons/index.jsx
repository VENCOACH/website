import styles from './socialIcons.module.scss';

export default function SocialIcons() {

    const {socialIcons} = styles;

    return (
      <div className={socialIcons}>
        <i>
          <a href="https://www.instagram.com/vencoach/?hl=es" target={"__blank"} rel={"noreferrer"}>
            <img src={"img/instagram.svg"} alt="instagram icon" />
          </a>
        </i>
        <i>
            <a href="https://twitter.com/vencoach" target={"_blank"} rel={"noreferrer"}>
                <img src={"img/twitter.svg"} alt="twitter icon" />
            </a>
        </i>
        <i>
          <a href="https://www.facebook.com/Vencoach/" target={"__blank"} rel={"noreferrer"}>
            <img src={"img/facebook.svg"} alt="facebook icon" />
          </a>
        </i>
      </div>
    );
}