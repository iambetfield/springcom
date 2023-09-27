import { Button, IconButton } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md mt-4'>
        <div className='flex items-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] rounded'>
                <img  className='w-full h-full object-cover object-top rounded-lg' src="src\assets\images\pic.jpg" alt=''/>
            </div>
            <div className='ml-5 space-y-1'>
                <p className='font-semibold'>Men Slim Mid  </p>
                <p className='opacity-50'>Size: L</p>
                <p className='opacity-70 mt-2 text-sm'>Seller: Cristian Saygo</p>
                <div className='flex space-x-4 items-center text-gray-900 pt-6'>
                    <p className='font-semibold'>$199</p>
                    <p className='opacity-50 line-through'> $300</p>
                    <p className='text-green-600 font-semibold'>$10% OFF</p>
                </div>

            </div>
            

        </div>
        <div className='lg:flex items-center lg:space-x-10 pt-5'>
                <div className='flex items-center space-x-2 pl-2'>
                    <IconButton sx={{color:"RGB(145 85 253)"}}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className='py-1 px-3 rounded-sm'>2 </span> 
                    <IconButton sx={{color:"RGB(145 85 253)"}}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                    <Button sx={{color:"RGB(145 85 253)"}}>remove</Button>
                                   
                </div>
                <div className='flex lg:flex items-center'>
                   
                </div>

            </div>

    </div>
  )
}

export default CartItem