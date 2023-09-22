import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { useState } from 'react';
import './Search.css';
const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#329FAE',
            cursor: 'pointer'
        }}
    />
);

function SearchBox() {


    const [search, setSearch] = useState('');

    function onSearch() {

    }
    
    function handleChange(e){
        setSearch(e.target.value)
    }

    console.log(search)

    return (
        <section className='section-search'>
            <Space direction="vertical">
                <Search
                    placeholder="Buscar"
                    enterButton="Buscar"
                    size="large"
                    suffix={suffix}
                    onSearch={onSearch}
                    onChange={handleChange}
                />
            </Space>
        </section>
    )
}

export default SearchBox