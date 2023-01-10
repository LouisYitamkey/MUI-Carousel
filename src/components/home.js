
// import Button from '@mui/material/Button';

// export default function Home(){
//    return(
//     <div className='mt-6  '>
        
        
//         <Button className='bg-red-200' variant="contained" >
//           Success
//          </Button>
       
//     </div>

//    );

// }


import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Elmina Castle',
    imgPath: 
      'https://www.easytrackghana.com/images/photos2/og/St-George-castle-front.jpg',
  },
  {
    label: 'Mole National Park',
    imgPath:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Ghanaian_wildlife.JPG/1200px-Ghanaian_wildlife.JPG',
  },
  {
    label: 'Aburi Gardens',
    imgPath:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/46/24/03/aburi-botanical-gardens.jpg?w=1200&h=-1&s=1',
  },
  {
    label: 'Labadi Beach',
    imgPath:
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/74249118.jpg?k=ed214653b92b6aeede1e7d8ede6947b8086d458389e126dd045ddef65d1497c6&o=&hp=1',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    
    <Box sx={{ maxWidth: 400, flexGrow: 1, }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography className='text-blue-500 text-xl font-bold'>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;

