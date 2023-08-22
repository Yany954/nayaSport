import { List, Radio, Space } from 'antd';
import { useState } from 'react';
import RoundCard from '../Globals/RoundCard/RoundCard';

const data = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
    {
        title: 'Title 5',
    },
    {
        title: 'Title 6',
    },
    {
        title: 'Title 6',
    },
    {
        title: 'Title 6',
    },
    {
        title: 'Title 6',
    },
    {
        title: 'Title 6',
    },
    {
        title: 'Title 6',
    },
    {
        title: 'Title 6',
    },
    {
        title: 'Title 6',
    },
];

const positionOptions = ['top', 'bottom', 'both'];
const alignOptions = ['start', 'center', 'end'];



const AccesoriesGrid = () => {

    const [position, setPosition] = useState('bottom');
    const [align, setAlign] = useState('center');

    return(
    <>
        <Space
            direction="vertical"
            style={{
                marginBottom: '20px',
            }}
            size="middle"
        >
            <Space>
                <span>Pagination Position:</span>
                <Radio.Group
                    optionType="button"
                    value={position}
                    onChange={(e) => {
                        setPosition(e.target.value);
                    }}
                >
                    {positionOptions.map((item) => (
                        <Radio.Button key={item} value={item}>
                            {item}
                        </Radio.Button>
                    ))}
                </Radio.Group>
            </Space>
            <Space>
                <span>Pagination Align:</span>
                <Radio.Group
                    optionType="button"
                    value={align}
                    onChange={(e) => {
                        setAlign(e.target.value);
                    }}
                >
                    {alignOptions.map((item) => (
                        <Radio.Button key={item} value={item}>
                            {item}
                        </Radio.Button>
                    ))}
                </Radio.Group>
            </Space>
        </Space>
        <List
         pagination={{
            position,
            align,
        }}
            grid={{
                gutter: 6,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 3,
                xl: 3,
                xxl: 6,
            }}

            dataSource={data}
            renderItem={(item) => (
                <List.Item>
                    <RoundCard />
                </List.Item>
            )}
        />
    </>
    )
};


export default AccesoriesGrid;