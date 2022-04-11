export default function NavigationBar() {
  return (
    <nav>
      <section>
        <div>
          <img src="img/icon-location.png" alt="" />
          <address>Calle 72 , av 10 .Edif Las americas,</address>
          <div>
              <img src="img/icon-phone.png" alt="" />
              <p>+54 0424 6138945</p>
          </div>
          <div>
              <img src="img/icon-email.png" alt="" />
              <p>info@vencoach.org</p>
          </div>
          <div>
              <img src="img/icon-facebook.png" alt="" />
              <img src="img/icon-twitter.png" alt="" />
              <img src="img/icon-instagram.png" alt="" />
          </div>
        </div>
        <div>
            <phone></phone>
        </div>
      </section>
      <section>
        <figure>
          <img src="img/logo.png" alt="Vencoach Logo" />
        </figure>
        <ul>
          <li>Nosotros</li>
          <li>Servicios</li>
          <li>Logros</li>
          <li>Equipo</li>
          <li>Testimonios</li>
        </ul>
        <button>Contactar</button>
      </section>
    </nav>
  );
}
