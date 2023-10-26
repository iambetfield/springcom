import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useAppDispatch } from "../../../State/Auth/hooks";
import { removeItemToCart, updateItemToCart } from "../../../State/Cart/Action";

interface Props {
  item: any;
}

const CartItem = ({ item }: Props) => {
  const dispatch = useAppDispatch();


  const handleUpdateCartItem = (num: number) => {
    
    const updatedData = {
      data: { quantity: item.quantity + num },
      cartItemId: item?.id,
    };
    
    dispatch(updateItemToCart(updatedData));
    
  };

  const handleRemoveCartItem=()=>{
    dispatch(removeItemToCart(item.id))
  }
  return (
    <div className="p-5 shadow-lg border rounded-md mt-4">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] rounded">
          <img
            className="w-full h-full object-cover object-top rounded-lg"
            src={item.product.imageUrl}
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item.product.title}</p>
          <p className="opacity-50">Size: {item.size}</p>
          <p className="opacity-70 mt-2 text-sm">
            Seller: {item.product.brand}
          </p>
          <div className="flex space-x-4 items-center text-gray-900 pt-6">
            <p className="font-semibold">${item.product.price}</p>
            <p className="opacity-50 line-through"> ${item.discountedPrice}</p>
            <p className="text-green-600 font-semibold">
              {item.product.discountPercent}% OFF
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-5">
        <div className="flex items-center space-x-2 pl-2">
          <IconButton
            sx={{ color: "RGB(145 85 253)" }}
            onClick={() => handleUpdateCartItem(-1)}
            disabled={item.quantity <= 1}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-3 rounded-sm">{item.quantity} </span>
          <IconButton
            sx={{ color: "RGB(145 85 253)" }} 
           onClick={() => handleUpdateCartItem(1)}
          >
            <AddCircleOutlineIcon />
          </IconButton>
          <Button sx={{ color: "RGB(145 85 253)" }}
          onClick={handleRemoveCartItem}
          >remove</Button>
        </div>
        <div className="flex lg:flex items-center"></div>
      </div>
    </div>
  );
};

export default CartItem;
