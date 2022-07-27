import styles from './newsletter.module.scss';
import {useState} from 'react';
import axios from "axios";

export default function Newsletter() {
  const { inputWrapper ,bannerFooter, title, subtitle, wrapper, inputEmail, container, sentIcon, responseTextStyle} = styles;

  const [email, setEmail] = useState('');
  const [responseText, setResponseText] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (email) {
        try {
          const response = await axios.post("/api/newsletter", { email });
          if (response.status === 201) {
            setShowMessage(true);
            setResponseText('👏 Subscripción recibida, espera oir de nosotros pronto!')
            setEmail('');
            setLoading(false);
          }
        } catch (error) {
          setShowMessage(true);
          setResponseText( '🚧 Oh, este email ya existe como subscrito!')
          setLoading(false);
        }
    }
  };
  const handleChange =({target})=> {
    setEmail(target.value);
    if(email===''){
      setResponseText('');
    }
  }
  return (
    <div className={container}>
        <img src='img/banner_newsletter_background.png' className={bannerFooter} alt='' />
        <div className={wrapper}>
            <h3 className={title}>Subscríbete a nuestra lista de correos</h3>
            <p className={subtitle}>Entérate de nuevas noticias y eventos</p>
            <form className={inputWrapper} onSubmit={(e)=>handleSubmit(e)}>
                <input onChange={handleChange} value={email} type='email' placeholder='Ingresa tu correo' className={inputEmail} pattern="^[^ ]+@[^ ]+\.[a-z]{2,6}$"/>
                <img onClick={handleSubmit} src='img/sent.png' alt='sent' className={sentIcon} role="button" disabled={loading}/>
                { showMessage &&
                  <p className={responseTextStyle}>{responseText}</p>
                }
            </form>
        </div>
    </div>
  )
}
