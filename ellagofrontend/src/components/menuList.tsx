import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "../components"

import menuItems from "@/helpers/menuItems";

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
