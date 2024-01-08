import 'bootstrap/dist/css/bootstrap.css';
import './styles.css'
import frodo from '../images/frodo2.webp';
import samwise from '../images/samwise.webp';
import pippin from '../images/pippin.jpg'
import merry from '../images/merry.webp'
import aragorn from '../images/aragorn.webp'
import gandalf from '../images/gandalf.webp'
import gimli from '../images/gimli.webp'
import legolas from '../images/Legolas.webp'

const Characters = ({onClick}) => {
  const characters = [
    {
      id: '5cd99d4bde30eff6ebccfc15',
      name: 'Frodo Baggins',
      image: frodo,
    },

    {
      id: '5cd99d4bde30eff6ebccfd0d',
      name: 'Samwise Gamgee',
      image: samwise,
    },

    {
      id: '5cd99d4bde30eff6ebccfe2e',
      name: 'Peregrin Took',
      image: pippin,
    },

    {
      id: '5cd99d4bde30eff6ebccfc7c',
      name: 'Meriadoc Brandybuck',
      image: merry,
    },

    {
      id: '5cd99d4bde30eff6ebccfbe6',
      name: 'Aragorn II Elessar',
      image: aragorn,
    },

    {
      id: '5cd99d4bde30eff6ebccfea0',
      name: 'Gandalf',
      image: gandalf,
    },

    {
      id: '5cd99d4bde30eff6ebccfd23',
      name: 'Gimli, son of Glóin',
      image: gimli,
    },

    {
      id: '5cd99d4bde30eff6ebccfd81',
      name: 'Legolas',
      image: legolas,
    }
  ]

  const DisplayCharacters = ({character}) => {
    return (
      <div className="col-md-3">
        <div className="card border-0" style={{ width: 'auto' }}>
          <img src={character.image} style={{ width: '210px', height: '300px' }} className="card-img-top mx-auto" alt={`Image of ${character.name}`} onClick={() => onClick(character)} />
          <div id='cardBody' className="card-body mx-auto">
            <p id='cardCharacterName' className="card-text ">{character.name}</p>
            {/* <p id ='characterQuotePara' className="card-text">{characterQuote}</p> */}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="row justify-content-around">
      <div className="card-group">
        {characters.map((character) => <DisplayCharacters character={character} key={character.id} />)}
        </div>
      </div>
    </div>
  )
}

export default Characters