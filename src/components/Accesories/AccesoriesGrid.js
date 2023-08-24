import { List, Radio, Space } from 'antd';
import { useState } from 'react';
import RoundCard from '../Globals/RoundCard/RoundCard';
import { pathRoutes } from '../../routes/PathRoutes';
import { Link } from 'react-router-dom';

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

    const [position, setPosition] = useState('both');
    const [align, setAlign] = useState('center');

    return(
    <section className='accesories-cards'>
        
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
                    <Link to={pathRoutes.uniform}><RoundCard /> </Link> 
                </List.Item>
            )}
        />
        </section>
    )
};


export default AccesoriesGrid;