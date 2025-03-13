import { Heart, ShoppingCart, User } from "lucide-react";
import { useNavigate } from "react-router-dom"
import MenuList from "./menuList";
import isologo from "../assets/isologo.svg";


const Navbar = () => {

    const navigate = useNavigate()

    return (
        <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4sl md:max-w-6xl">
            <img src= {isologo} alt="logo" className="w-50"  onClick={() => navigate('/')}/>
            <div className="items-center justify-between hidden sm:flex"> 
                <MenuList />
            </div>
            <div className="flex sm:hidden">
                <p>Item menu Movil</p>

            </div>
            <div className="flex items-center justify-between gap-2 sm:gap-7">
                <ShoppingCart strokeWidth={1} className="cursor-pointer" onClick={() => navigate('/cart')} />
                <Heart strokeWidth={1} className="cursor-pointer" onClick={() => navigate('/lovedProperties')} />
                <User strokeWidth={1} className="cursor-pointer" onClick={() => navigate('/profile')} />
            </div>
        </div>
    );
}

export default Navbar;