import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { useShow } from '../misc/custom-hooks'

const Starred = () => {

  const [starred] = useShow()
  const [shows, setShows] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect()
  return (
    <div>
        <MainPageLayout><h1>this is Starred page</h1></MainPageLayout>
    </div>
  )
}

export default Starred
