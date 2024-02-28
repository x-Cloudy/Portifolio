import movcont from '../Images/movcont2.png'
import siteFotos from '../Images/siteFotos.png'

export const data = [
  {
    id: 1,
    image: movcont,
    name: 'MovCont (desenvolvimento)',
    type: 'Tipo:Comisão',
    desc: 'Empresa de contabilidade, focada na criação de contéudo online.',
    tec: {
      react: true,
      data: true,
      figma: true,
      redux: false
    },
    link: 'https://x-cloudy.github.io/Mov/',
    side: true
  },
  {
    id: 2,
    image: siteFotos,
    name: 'Fotografo (em desenvolvimento)',
    type: 'Tipo:Pessoal',
    desc: 'Uma galeria de fotos para um fotografo.',
    tec: {
      react: true,
      data: true,
      figma: true,
      redux: false
    },
    link: '',
    side: true
  },
]