import { Link, useParams } from 'react-router-dom'

const CountryDetails = ({ countries }) => {
    const { alpha3Code } = useParams()

    return (
        <div>
            <div>
                {countries
                    .filter((country) => country.alpha3Code === alpha3Code)
                    .map((item) => (
                        <div>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${item.alpha2Code.toLowerCase()}.png`} alt="flag"></img>
                            <h1>País: {item.name.common}</h1>
                            <p>Capital: {item.capital} </p>
                            <p>Area: {item.area} km²</p>
                            <p>Borders: {item.borders.map((fronteira) => (
                                <li><Link to={`/${fronteira}`}>{fronteira}</Link></li>
                            ))}</p>

                        </div>
                    ))
                }
                <Link className='btn btn-primary' to='/'>Voltar</Link>
            </div>
          
        </div>
    );  
}

export default CountryDetails;