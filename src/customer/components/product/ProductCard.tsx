import { useNavigate } from "react-router-dom";
import "./ProductCard.css"

interface ProductCardProps{
    product: any;
}

const ProductCard = ({product}:ProductCardProps) => {

    const navigate = useNavigate();


    
  return (
    <div onClick={()=>navigate(`/product/${product.id}`)} className='productCard w-[15rem] m-3 transition-all cursor-pointer rounded'>
        <div className="h-[13rem] w-[10rem] mx-auto" >
            <img className="h-full w-full object-cover object-left-top " alt="" src={product.imageUrl}/>
        </div>
        <div className="textPart bg-white p-3">
            <div>
                <p className="font-bold opacity-60">{product.brand}</p>
                <p className="text-xs">{product.title}</p>
            </div>
            <div className="flex justify-center space-x-2">
                <p className="font-semibold text-lg">${product.discountedPrice}</p>
                <p className="line-through opacity-50 text-lg">{product.price}</p>
                <p className="text-green-600 font-semibold text-lg">{product.discountPersent}% OFF</p>

            </div>

        </div>
        
    </div>
  )
}

export default ProductCard