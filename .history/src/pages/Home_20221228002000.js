import React from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {

  // const [ input , setInput]  = useState('');

const onInputChange = (ev)=>{
    // eslint-disable-next-line no-console
    console.log(ev.target.value);
}
  return (
    <div>
      <MainPageLayout>
        <input type ="text" onChange={onInputChange} />
      </MainPageLayout>
    </div>
  )
}

export default Home;

