import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react'

export const SearchForm = ({handleSubmit}) => {
  const [selected, setSelected] = useState()

  const onHandleChange = (e) => {
    setSelected(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    handleSubmit(selected)
    setSelected('')
  }
  return (
    <SearchFormStyled onSubmit={onSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select aria-label="select" defaultValue={'DEFAULT'} name="region" required onChange={onHandleChange}>
        <option value="DEFAULT" disabled defaultValue="">
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
