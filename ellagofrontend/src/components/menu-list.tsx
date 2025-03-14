import {
    NavigationMenu,
    NavigationMenuLink,
    NavigationMenuList
} from "."

import menuItems from "@/helpers/menu-items";

const MenuList = () => {
    return (
        <div>
            <NavigationMenu>
                <NavigationMenuList>
                    {menuItems.map(({ id, link, name }) => (
                        <NavigationMenuLink key={id} href={link}>
                            {name}
                        </NavigationMenuLink>
                    ))}

                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}

export default MenuList;
