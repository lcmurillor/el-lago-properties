import { Heart, ShoppingCart, User } from "lucide-react";
import { useNavigate } from "react-router-dom"
import {MenuList, MenuListMovil, ModeToggle, useTheme} from "../components";
import imagotipo from "../assets/imagotipo.svg";
// import isologoDarck from "../assets/isologo-dark.svg"


const Navbar = () => {

    const navigate = useNavigate()
    const {theme} = useTheme()
    

    return (
        <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4sl md:max-w-6xl">
            <img src= {theme === "light" ? imagotipo: imagotipo} alt="logo" className="w-1/8"  onClick={() => navigate('/')}/>
            <div className="items-center justify-between hidden sm:flex"> 
                <MenuList />
            </div>
            <div className="flex sm:hidden">
                <MenuListMovil />

            </div>
            <div className="flex items-center justify-between gap-2 sm:gap-7">
                <ShoppingCart strokeWidth={1} className="cursor-pointer" onClick={() => navigate('/cart')} />
                <Heart strokeWidth={1} className="cursor-pointer" onClick={() => navigate('/lovedProperties')} />
                <User strokeWidth={1} className="cursor-pointer" onClick={() => navigate('/profile')} />
                <ModeToggle/>
            </div>
        </div>
    );
}

export default Navbar;