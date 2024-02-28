import { DiReact, DiStreamline } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { Suspense } from "react";

import { data } from './Data/projetos-data'
import './Projetos.css'

const DataContent = data.map((d) => {
  let cName;
  d.side ? cName = 'data-li-rigth' : cName = 'data-li';

  const Tecno = () => {
    return (
      <div>
        {d.tec.react && <DiReact />}
        {d.tec.data && <DiStreamline />}
        {d.tec.redux && <SiRedux />}
        {d.tec.figma && <FaFigma />}
      </div>
    )
  }

  const Sus = () => {
    return (
      <div className="sus">
      </div>
    )
  }

  return (
    <li key={d.id} className={cName}>
      <a href={d.link} target="_blank">
        <div className="data-img-border">
          <Suspense fallback={<Sus />}>
            <img className='data-img' src={d.image} alt={d.desc} />
          </Suspense>
        </div>
      </a>
      <div className='desc-div'>
        <h4>{d.name}</h4>
        <p className="data-type"><strong>{d.type}</strong></p>
        <br />
        <p>{d.desc}</p>
        {d.tec && <Tecno />}
      </div>
    </li>
  )
})

const Projetos = () => {
  return (
    <div className='projetos'>
      <div className='projetos-content'>
        <div className='projetos-slider'>
          <ul>
            {DataContent}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Projetos