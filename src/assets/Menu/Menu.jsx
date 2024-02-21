import { PageContext } from '../Context/PageContext';
import { useState, useRef, useContext } from 'react'
import './Menu.css'

const Menu = () => {
  const [currentButton, setCurrentButton] = useState('Home');
  const menuRef = useRef(null);
  const { setCurrentPage } = useContext(PageContext);

  function handleClick(e) {
    setCurrentButton(prev => prev = e.target.innerText)
    setCurrentPage(e.target.innerText)
  }

  function Button({ name }) {
    let isActive;
    currentButton === name ? isActive = 'active' : isActive = '';
    return (
      <button onClick={handleClick} className={`menu_button ${isActive}`}>{name}</button>
    )
  }

  return (
    <div className='menu' ref={menuRef}>
      <Button name={'Home'} />
      <Button name={'Projetos'} />
      <Button name={'Contato'} />
      <Button name={'Sobre'} />
    </div>
  )
}

export default Menu