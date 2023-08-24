import React from 'react';
import { Checkbox } from 'antd';
const onChange = (checkedValues) => {
  console.log('checked = ', checkedValues);
};
const plainOptions = ['Molten', 'Kmila'];
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
  <>
    <h3>Marca</h3>
    <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
    <br />
    <br />

    <h3>Categorias</h3>
    <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
    <br />
    <br />

    <Checkbox.Group
      options={optionsWithDisabled}
      disabled
      defaultValue={['Apple']}
      onChange={onChange}
    />
  </>
);
export default Filter;
