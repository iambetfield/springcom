import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../homeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";
import { mens_kurta } from "../../Data/men_kurta";

interface CarrouselProps {
  data: any;
  sectionName?: string
}

const Carrousel = ({ data,sectionName }: CarrouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: {
      items: 1,
    },
    720: {
      items: 3,
    },
    1024: {
      items: 4,
      itemsFit: "contain",
    },
  };

  const items = data
    .slice(0, 10)
    .map((item: any) => <HomeSectionCard product={item} />);

  const slidePrev = () => {
    setActiveIndex(activeIndex - 1);
  };

  const slideNext = () => {
    setActiveIndex(activeIndex + 1);
  };

  const syncActiveIndex = (item: any) => setActiveIndex(item);

  //lo hacemos con el template responsivo
  return (
    <div>
        <h2 className="text-2xl font-bold text-gray-800 py-5 text-start" >{sectionName}</h2>
      <div className="relative px-4 lg:px-8">
        <div className="relative p-3">
          <AliceCarousel
            mouseTracking
            items={items}
            disableButtonsControls
            controlsStrategy="alternate"
            responsive={responsive}
            disableDotsControls
            onSlideChanged={syncActiveIndex}
            activeIndex={activeIndex}
          />

          <Button
            className="z-50"
            variant="contained"
            sx={{
              position: "absolute",
              bgcolor: "white",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
            }}
            aria-label="next"
            onClick={slidePrev}
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
          <Button
            className="z-50"
            variant="contained"
            sx={{
              position: "absolute",
              bgcolor: "white",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
            }}
            aria-label="next"
            onClick={slideNext}
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Carrousel;
