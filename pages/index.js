import Home from './home';
import { createClient } from 'contentful';


// Home component was made to be able to have it in a folder, together with the module.sass.
// this is a way around since Next.js will always look for the home path in the index of the pages root folder 

export default function index({homeContent}) {

  return (
    <>
      <Home rawContent={homeContent}/>
    </>
  )
}

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken:process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
  })

  const resp = await client.getEntries()

  return {
    props: {
      homeContent: resp.items
    }
  }
}