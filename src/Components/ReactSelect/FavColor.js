import React, { Component } from 'react'
import Select from 'react-select'
import './ReactSelect.css';

const options = [
  { value: 'Red', label: 'Red' },
  { value: 'Green', label: 'Green' },
  { value: 'Blue', label: 'Blue' },
  { value: 'Yellow', label: 'Yellow' },
  { value: 'Black', label: 'Black' },
  { value: 'White', label: 'White' }
]


const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    borderBottom: '1px dotted pink',
    color: state.selectProps.menuColor,
    padding: 20,
  }),

  control: (_, { selectProps: { width }}) => ({
    width: width
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}


  const FavColor = () => (
    <div className ='ReactSelect'>
    <Select
      placeholder='Select Color'
      styles={customStyles}
      width='200px'
      menuColor='black'
      options={options}
    />
    </div>
  );


export default FavColor;