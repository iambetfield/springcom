import { Grid } from "@mui/material";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";

const OrderCard = () => {

  const navigate =useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-lg hover:shadow-md border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer ">
            <img
              src="src\assets\images\pic.jpg"
              alt=""
              className="w-[5rem] h-[5rem] object-cover object-top"
            />
            <div className="space-y-2 mñ-5">
              <p className="">Men Sim</p>
              <p className="opacity-50 text-xs font-semibold ">Size: M</p>
              <p className="opacity-50 text-xs font-semibold ">Color: Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>$9292</p>
        </Grid>
        <Grid item xs={4}>
          {true && <div>
            <p>
            <AdjustIcon  sx={{width:"15px", height:"15px"}} className="text-green-600 mr-2 text-sm"/>
            <span>Delivered on March 03</span>
          </p>
          <p className="text-xs">
            Your item has been delivered
          </p>
          </div> }
          {false &&<p>
            <span>
              Expected Delivery on Mar 19
            </span>
          </p>}

        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
