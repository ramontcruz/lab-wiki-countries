import { ListGroup, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CountryList({ countries, setcountries }) {
  return (
    <Col sm={4} style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <ListGroup>
        
        {countries.map((country) => {
          return (
            <div key={country.alpha3Code} >
              <ListGroup.Item>
                <Link to={`/${country.alpha3Code}`}>
                  <h6>
                    <img
                      src={
                        'https://flagpedia.net/data/flags/emoji/twitter/256x256/' +
                        country.alpha2Code.toLowerCase() +
                        '.png'
                      }
                      style={{ maxWidth: '30px', marginRight: '10px' }}
                      alt="Bandeira"
                    ></img>
                    <b>{country.name.common}</b>
                  </h6>
                </Link>
              </ListGroup.Item>
            </div>
          );
        })}
      </ListGroup>
    </Col>
  );
}

export default CountryList;