import { Step, StepLabel, Stepper } from "@mui/material";


interface OrderProps{
    activeStep: any;
}

const steps = [
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out For Delivery",
    "Delivered"
]

const OrderTracker = ({activeStep}:OrderProps) => {
  return (
    <div className="w-full">
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label)=>(
                <Step>
                    <StepLabel sx={{color:"#9155FS", fontSize: "44px"}}> {label}</StepLabel>
                </Step>
            ))}
        </Stepper>

    </div>
  )
}

export default OrderTracker