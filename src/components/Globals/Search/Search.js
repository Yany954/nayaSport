import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
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

function onSearch() {

}

function SearchBox() {
    return (
        <section className='section-search'>
            <Space direction="vertical">
                <Search
                    placeholder="Buscar"
                    enterButton="Buscar"
                    size="large"
                    suffix={suffix}
                    onSearch={onSearch}
                />
            </Space>
        </section>
    )
}

export default SearchBox