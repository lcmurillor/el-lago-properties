
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Separator, useTheme } from "../components";
import isologo from "../assets/isologo.svg";
import isologoDarck from "../assets/isologo-dark.svg"

const dataFooter = [
    {
        id: 1,
        name: 'Sobre Nosotro',
        link: '#'
    },

    {
        id: 2,
        name: 'Productos',
        link: '#'
    },

    {
        id: 3,
        name: 'Mi cuenta',
        link: '#'
    },

    {
        id: 4,
        name: 'Politicas de privacidad',
        link: '#'
    },
]

const Footer = () => {

    const navigate = useNavigate()
const {theme} = useTheme()

    return (
        <footer className="mt-4">
            <div className="w-full max-w-screen-xl mx-auto p-6 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <img src={theme === "light" ? isologo: isologoDarck} alt="logo" className="w-1/8" onClick={() => navigate('/')} />

                    <ul className=" flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        {dataFooter.map((data) => (
                            <li key={data.id}>
                                <Link to={data.link} className="hover:underline me-4 md:me-6">{data.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            
            <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                &copy; 2024 
                <NavLink to={'/'}> Luis Carlos Murillo.</NavLink> Todos los derechos reservados
            </span>
            </div>
        </footer>
    );
}

export default Footer;