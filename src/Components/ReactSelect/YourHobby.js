
import React, { Component } from 'react';

import CreatableSelect from 'react-select/creatable'
import './ReactSelect.css';


const options=[
    {value:'Reading',label:' Reading'},
    {value:'Listening',label:'Listening Music'},
    {value:'Riding',label:'Riding cycle'},
    {value:'Writing',label:'Writing'},
    {value:'Cooking',label:'Cooking'},
    {value:'Painting',label:'Painting'}
]
const controlStyles = {
    borderRadius: '1px solid black',
    padding: '5px',
    background: 'lightgreen',
    color: 'white',
  };

class YourHobby extends Component {
    state={
        inputValue:[],
     
    }
    handleChange = (inputValue) => {
        this.setState({ inputValue });
      };
    render() {
        return (
            <div className ='ReactSelect'>
             <CreatableSelect
              options={options}
              controlStyles={controlStyles}
              placeholder='Select Hobbies   '
             onChange={this.handleChange}
             value={this.state.inputValue}
             isClearable
             isSearchable
             isMulti
             />
            </div>
        );
    }
}

export default YourHobby;