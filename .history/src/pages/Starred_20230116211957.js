import React from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { useShow } from '../misc/custom-hooks'

const Starred = () => {

  const [starred] = useShow()
  const [shows, setShows] = use
  return (
    <div>
        <MainPageLayout><h1>this is Starred page</h1></MainPageLayout>
    </div>
  )
}

export default Starred
