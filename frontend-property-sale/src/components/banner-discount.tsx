import { Link } from "react-router-dom";
import { buttonVariants } from "./ui/button";

const BannerDiscount = () => {
    return ( <div className="p-5 sm:p-20 text-center">
        <h2 className="uppercase font-black text-2xl text-primary">Consigue un descuento de hasta el 10%</h2>
        <h3 className="mt-3 font-semibold"> 40% al ayudar a hacer toda esta web</h3>
        <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
            <Link to={''} className={buttonVariants()}>Comprar</Link>
            <Link to={''} className={buttonVariants( {variant: "outline"})}>Mas información</Link>
        </div>
    </div> );
}
 
export default BannerDiscount;