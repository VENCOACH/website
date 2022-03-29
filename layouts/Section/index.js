import Image from 'next/image';
import style from './section.module.sass';

export default function Section({ height, bgimg, src}) {

  const { contentBox, backgroundImg } = style

  const sectionStyle = {
    height, 
    width: '100vw'
  }
  return (
      <section className={backgroundImg} style={sectionStyle}>
        {bgimg &&
          <Image
          src={src}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          priority
          quality={100}
          placeholder="blur"
          />
        }
        <div className={contentBox}>
        </div>
      </section>
  )
}


//todo:  hacer section un componente que acepte childrens.Luego, hacer en Home: 

// <Section>
//   <ContentSlot name={contentName}/>
// </Section>

// y entonces ehacer el componente contentslot, que va a aceptar el parametro name. y segun sea el tipo de contenido y la estructura del layout ,
// se renderizará un componente. Por ejemplo, name= editorialBanner renderiza <EditorialBanner/> y este está dentro del contentBox. 

//esto da un nivel de abstraccion y reutilizacion. 

// en cuanto a los datos de contentful, quizas lo mejor es que se pida todo en home , y este disponible a todos los componentes, a través de un Context API. 