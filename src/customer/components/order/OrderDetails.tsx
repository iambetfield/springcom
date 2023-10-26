import Adresscard from "../adresscard/Adresscard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/StarBorderOutlined";
import { deepPurple } from "@mui/material/colors";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20 text-start">
      <div>
        <h1 className="font-bold text-lg py-10">Delivery Address</h1>
        <Adresscard />
      </div>
      <div className="py-10">
        <OrderTracker activeStep={3} />
      </div>
      <Grid container className="space-y-4">
        {[1, 1, 1, 1].map(() => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="src\assets\images\pic.jpg"
                  alt=""
                />
                <div className="space-y-2 ml-5">
                  <p className="font-semibold">Men Slim Mid</p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Color: pink</span> <span>Size: M</span>
                  </p>
                  <p>Seller: linaria</p>
                  <p>$1390</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box
                sx={{ color: deepPurple[500] }}
                className="flex items-center"
              >
                <StarIcon sx={{ fontSize: "2rem" }} className="px-2" />
                <p>Rate & Review Product</p>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
