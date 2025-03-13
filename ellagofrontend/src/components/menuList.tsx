import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu"

const MenuList = () => {
    return (
        <div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/">Home</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/">Residential</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/">Commercial</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/">Land & Lots</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/">Rentals</NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>More</NavigationMenuTrigger>
                        <NavigationMenuContent className="min-w-max">

                            <NavigationMenuLink href="/" >
                                About Us
                            </NavigationMenuLink>

                            <NavigationMenuLink href="/">
                                Contact
                            </NavigationMenuLink>

                        </NavigationMenuContent>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}

export default MenuList;
