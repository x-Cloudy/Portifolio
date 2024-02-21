import { useState } from 'react'
import './Sidebar.css'

const Sidebar = () => {
  const [ spinnerTrigger, setSpinnerTrigger ] = useState(false);

  return (
    <>
      <div className='sidebar'></div>
      {/* <div className='sidebar_box_string'></div>
        {spinnerTrigger && <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>}
      <div className='sidebar_box' onClick={() => setSpinnerTrigger(!spinnerTrigger)}>
      </div>
      <div className='sidebar_box_string2'></div> */}
    </>
  )
}
export default Sidebar
