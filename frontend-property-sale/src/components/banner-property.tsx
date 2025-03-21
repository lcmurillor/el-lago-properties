import { Link } from "react-router-dom";
import { buttonVariants } from "./ui/button";

const BannerProperty = () => {
    return ( <>
    <div className="mt'4 text-center">
        <p>Estos es un texto de preuba porque no sé que poner</p>
        <h4 className="mt-2 text-5xl font-extrabold uppercase">Propiedades a la venta</h4>
        <p className="my-2 m-5 text-lg">Compra una nueva vida</p>
        <Link to={'#'} className={buttonVariants()}>Buy</Link>
    </div>
    <div className="h-[350px] bg-cover md:h-[600px] bg-[url('./assets/volcano.jpg')] bg-center mt-5">

    </div>
    </>)
}
 
export default BannerProperty;