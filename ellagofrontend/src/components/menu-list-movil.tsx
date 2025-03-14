import { Menu } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../components";
import menuItems from "@/helpers/menu-items";

const MenuListMovil = () => {
    return (<div>
        <div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger><Menu /></NavigationMenuTrigger>
                        <NavigationMenuContent className="min-w-max">
                        {menuItems.map(({ id, link, name }) => (
                        <NavigationMenuLink key={id} href={link}>
                            {name}
                        </NavigationMenuLink>
                    ))}

                        </NavigationMenuContent>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>
        </div>
    </div>);
}

export default MenuListMovil;