import React from 'react';
import { createClient } from 'contentful';


export default function serviceDetails({ data }) {
  return (
    <div>serviceDetails Page!</div>
  )
}

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken:process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
  })

  const resp = await client.getEntries({
    content_type: 'servicePageTemplate',
  })

  return {
    props: {
      data: resp.items
    }
  }
}