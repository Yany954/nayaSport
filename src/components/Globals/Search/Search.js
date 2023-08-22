import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;


const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1677ff',
            cursor: 'pointer'
        }}
    />
);

function onSearch() {

}

function SearchBox() {
    return (

        <Space direction="vertical">
            <Search
                placeholder="Buscar"
                enterButton="Buscar"
                size="large"
                suffix={suffix}
                onSearch={onSearch}
            />
        </Space>

    )
}

export default SearchBox