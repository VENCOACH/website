import styles from './newsletter.module.scss';

export default function Newsletter() {
  const { inputWrapper ,bannerFooter, title, subtitle, wrapper, inputEmail, container, sentIcon} = styles;
  return (
    <div className={container}>
        <img src='img/banner_newsletter_background.png' className={bannerFooter} alt='' />
        <div className={wrapper}>
            <h3 className={title}>Subscríbete a nuestra lista de correos</h3>
            <p className={subtitle}>Entérate de nuevas noticias y eventos</p>
            <div className={inputWrapper}>
                <input type='email' placeholder='Ingresa tu correo' className={inputEmail}/>
                <img src='img/sent.png' alt='sent' className={sentIcon}/>
            </div>
        </div>
    </div>
  )
}
