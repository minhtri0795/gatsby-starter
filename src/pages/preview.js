import * as React from "react"
const Preview = ({ serverData }) => {
  console.log(serverData)
  return (
    <>
      <h1>Preview page: {serverData?.page?.title}</h1>
      <p>Check console log for more info</p>
    </>
  )
}

export default Preview

export async function getServerData({ query }) {
  const pageId = query.p || query.preview_id
  const res = await fetch(
    `https://celerity-staging.netlify.app/.netlify/functions/preview?pageId=${pageId}`
  )
  const result = await res.json()
  return {
    props: result,
  }
}
