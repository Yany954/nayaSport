import { Menu } from 'antd';
import { useState } from 'react';
import { SubMenuAccesories, SubMenuAccesoriesSection } from '../../../Models/SubMenu';
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('DEPORTES', `sub1`, null)
];
console.log(SubMenuAccesories)
function fx() {
    for (let i = 0; i < SubMenuAccesoriesSection.length; i++) {
        if (SubMenuAccesories.hasOwnProperty(SubMenuAccesoriesSection[i])){
        
              return(
                SubMenuAccesories.map((item, i) => (
                  
                    getItem(item.name, `sub.${i}`, null , 
                    item.items.length>0 ?  item.items.map((item2, j) => (
                        getItem(item2, `sub.${j}`)
                    )): null
                )))
                )
        }
    } 
}

console.log(items)









const SubMenu = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div
            style={{

            }}
        >

            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="horizontal"
                theme="light"
                inlineCollapsed={collapsed}
                items={items}
            />
        </div>
    );
};
export default SubMenu;