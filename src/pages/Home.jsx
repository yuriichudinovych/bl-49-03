import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from '../service/country-service';
export const Home = () => {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountries();
        setCountryList(data);
      
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCountries();
  }, []);

  return (
    <Section>
      <Container>
        <CountryList countries={countryList} />
      </Container>
    </Section>
  );
};
