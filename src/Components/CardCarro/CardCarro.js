import './CardCarro.css'
import carro001 from '../../assets/img/carro001.jpg'

const CardCarro = (props) => {

    return (

        <div className='card-carro'>
            <a href='/cadastro-carro'>
                <img src={carro001} alt='Foto de um rolls-royce' className='car-image' />
                <h1 className='card-title'>Cadastrar carro</h1>
            </a>
        </div>


    )

}

export default CardCarro