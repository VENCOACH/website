import React from 'react';
import { createClient } from 'contentful';
import styles from './servicios.module.scss';
import Image from 'next/image';
import useWindowSize from '../../hooks/useWindowSize';
import InfoBlock from '../../components/infoBlock';
import { useContext } from 'react';
import {GlobalContext} from '../../pages/_app';
import { useRouter } from 'next/router';

export default function ServiceDetails({ data }) {
  const {clikedServiceId} = useContext(GlobalContext);
  const router = useRouter();
  const {
    rightImage: {
        fields: {
            file: {
                url: rightImg_url,
            }
        }
    },
    entryTitle,
    title,
    subtitle,
    paragraph,
    paragraphSecond,
    parameters:{
      stylesParam:{
        bgimg,
        height:sectionHeight,
      }={}
    }={},
    backgroundImage: {
      fields: {
        file: {
          url:imgUrl,
        }={}
      }={}
    }={}
  } = data.fields

  const sectionGeneralStyle = {
    height: sectionHeight,
  }

  const { rightImage, leftSide, imageSmallScreens, contentBox, container, backgroundImg, firstParagraph, text, img01, img02, imagesContainer} = styles;
  const size = useWindowSize();
  return (
    <div
      className={`${backgroundImg} ${container}`}
      style={sectionGeneralStyle}
      id={entryTitle}
    >
      <div className={contentBox}>
        <InfoBlock
          titleText={title}
          subtitleText={subtitle}
          fromComponent={"ServiceDetails"}
        />
        <h3 className={firstParagraph}>
          Este Programa tiene como objetivo desarrollar y aplicar las destrezas
          de liderazgo y coaching organizacional para lograr intervenir el
          talento y los equipos de trabajo con el fin de lograr el
          empoderamiento máximo de su desempeño en pro del bienestar y la
          productividad.
        </h3>
        <ol className={text}>
          <li>
            <p>
              <strong>
                EL LÍDER COACH Y LAS DISTINCIONES CONVERSACIONALES:
              </strong>
              <br></br>
              Cuyo objetivo es reconocer y experienciar el lenguaje como
              fundamento para desarrollar competencias conversacionales.
            </p>
          </li>
          <li>
            <p>
              <strong>EL DOMINIO EMOCIONAL DEL LÍDER:</strong>
              <br></br>
              En éste módulo el objetivo es reconocer las emociones como
              elemento presente en las conversaciones.
            </p>
          </li>
          <li>
            <p>
              <strong>CORPORALIDAD:</strong>
              <br></br>
              El elemento corporal ha sido uno de los dominios más reconocidos
              en la actualidad para lograr resultados coherentes desde el
              coaching. En este módulo el objetivo es distinguir las
              disposiciones corporales como fuerzas internas que nos movilizan a
              la acción y que actúan como impulsadoras o inhibidoras para el
              logro de resultados.
            </p>
          </li>
          <li>
            <p>
              <strong>LIDERAZGO SITUACIONAL:</strong>
              <br></br>
              En este espacio de aprendizaje relacionamos los conceptos
              anteriores con el rol del liderazgo. El objetivo es aumentar la
              frecuencia y la calidad de las conversaciones entre el Líder y sus
              colaboradores acerca del desempeño de funciones y el desarrollo
              profesional en el trabajo, así como ayudar a los líderes a
              desarrollar tanto la competencia como el compromiso de su equipo.
            </p>
          </li>
          <li>
            <p>
              <strong>CONFIANZA:</strong>
              <br></br>
              Reconocer y aceptar que la confianza condiciona el desempeño de
              las personas en su vida privada y en las organizaciones, a través
              del entendimiento de los elementos que puede utilizar un líder
              para construirla y fortalecerla en sus espacios de interacción
              humana.
            </p>
          </li>
        </ol>
        <div className={imagesContainer}>
          <img className={img01} src='img/desarrollo-lideres.jpg' alt='desarrollo-lideres'/>
          <img className={img02} src='img/desarrollo-lideres-coaches.jpg' alt='desarrollo-lideres-coaches'/>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken:process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
  })

  const resp = await client.getEntries({
    'fields.entryTitle': 'programa_desarrollo',
    content_type: 'servicesTemplate'
  })

  return {
    props: {
      data: resp.items[0],
    }
  }
}