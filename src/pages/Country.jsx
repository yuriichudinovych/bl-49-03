import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {

  
  const [country, setCountry] = useState({});
  const { countryId } = useParams();

  useEffect(() => {
    const getCountry = async () => {
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCountry();

  }, [countryId])

  const {flag, capital, countryName, id, languages, population} = country

  return (
    <Section>
      <Container>
        <CountryInfo flag={flag} capital={capital} country={countryName} id={id} languages={languages} population={population} />
      </Container>
    </Section>
  );
};
