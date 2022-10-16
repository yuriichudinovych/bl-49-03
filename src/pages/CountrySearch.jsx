import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';

import { fetchByRegion } from '../service/country-service';

import { useState, useEffect} from 'react'
import {  useSearchParams } from 'react-router-dom'

export const CountrySearch = () => {
  const [regionListResult, setRegionListResult] = useState([])
  const [searchParams, setSearchParams] = useSearchParams({});


  const onSubmit = (value) => {
  
   setSearchParams({
     query: value
   })

  }

  useEffect(() => {
    const region = searchParams.get('query')

    if(!region) {
      return
    }
    const fetchByRegionFunc = async() => {
      try{
        const data = await fetchByRegion(region);
       // setSelectedOption(data);
       setRegionListResult(data);
     
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchByRegionFunc();
  }, [ searchParams])



  

  return (
    <Section>
      <Container>
        <SearchForm handleSubmit={onSubmit} />
        <CountryList countries={regionListResult} />
      </Container>
    </Section>
  );
};
