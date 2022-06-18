import styles from './socialIcons.module.scss';

export default function SocialIcons() {

    const {socialIcons} = styles;

    return (
      <div className={socialIcons}>
        <i>
          <a href="https://www.instagram.com" target={"__blank"} rel={"noreferrer"}>
            <img src={"img/instagram.svg"} alt="instagram icon" />
          </a>
        </i>
        <i>
            <a href="https://www.twitter.com" target={"_blank"} rel={"noreferrer"}>
                <img src={"img/twitter.svg"} alt="twitter icon" />
            </a>
        </i>
        <i>
          <a href="https://www.facebook.com" target={"__blank"} rel={"noreferrer"}>
            <img src={"img/facebook.svg"} alt="facebook icon" />
          </a>
        </i>
      </div>
    );
}