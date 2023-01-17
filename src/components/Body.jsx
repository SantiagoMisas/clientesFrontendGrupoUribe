import React from 'react'
import ClientTable from './ClientTable.jsx'
import Buttons from './Buttons.jsx'
import Form from './Form.jsx'


const Body = () => {
  return (
<section className='Body'>
<Form/>
    <Buttons/>
    <ClientTable/>


</section>
  )
}

export default Body