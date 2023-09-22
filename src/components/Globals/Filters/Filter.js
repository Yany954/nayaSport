import { Checkbox } from 'antd';
import React from 'react';
import "./Filter.css";
const onChange = (checkedValues) => {
  console.log('checked = ', checkedValues);
};
const plainOptions = ['Molten', 'Kamila'];
const options = [
  {
    label: 'Ropa deportiva',
    value: 'Ropa deportiva',
  },
  {
    label: 'Accesorios',
    value: 'Accesorios',
  },
  
];
const optionsWithDisabled = [
 
];
const Filter = () => (
  <div className="filter-container">
    <h3 className='filter-title'>Marca</h3>
    <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
    <br />
    <br />

    <h3 className='filter-title'>Categorias</h3>
    <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
    <br />
    <br />

    <Checkbox.Group
      options={optionsWithDisabled}
      disabled
      defaultValue={['Apple']}
      onChange={onChange}
    />
    </div>
);
export default Filter;
