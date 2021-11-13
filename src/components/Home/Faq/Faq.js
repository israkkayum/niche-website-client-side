import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';

const Faq = () => {
    return (
        <div>
             <Container>
                <Typography sx={{textAlign: 'center', fontWeight: 600, my: 5, py:5}} variant="h5" component="div">
                    FAQ
                </Typography>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Where is Kona Bicycle?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We are located at 766 Valencia Street in the Mission district. If you're visiting us from out of town, take BART to the 16th street station. Locals: you can also reach us via MUNI bus lines #33, 14, and 22 as well as the 16th & Mission BART station.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How can I extend the 24 hrs rental period?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Just keep cycling! You pay your rent on return, so you can keep the bike until you are done with it, unless you have decided to extend for longer than a week. By the way: longterm renters get a better rate.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Do you give a reduction on large groups or for longterm rentals?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes we do. Groups off 10 persons get a 10% reduction when they pay all together. For longer periods than 2 weeks we offer special rates. Please check the Reservations section.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Do I have to wear a helmet?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Riders under 18 are required by law to wear a helmet. One is provided with your rental.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Do I have to have lights?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          State law requires cyclists to have front and rear lights when riding at night. We'll provide you with both as part of your rental.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What do I do with the bike overnight?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Bikes like to sleep indoors, just like people. If you're staying in a hotel, check with the bellhop, concierge, or reception to find out if you can take your bike to your room or if they want to keep it in their luggage room. Keeping the bike indoors overnight is the best way to avoid potential damage or theft.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What sizes do you offer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          47cm, 50cm, 53cm, 56cm, 59cm, 62cm
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Who is responsible if the bike is stolen or damaged?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You are. We'll provide you the tools and knowledge needed to keep the bike safe but it's up to you to return everything we give you.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Do you offer insurance?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes !
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Do you deliver or pick up bikes?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, but please call ahead of time to verify our availablility! We can deliver or pick up anywhere within San Francisco for an additional fee of $40 each way.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What happens if I get a flat tire?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You probably won't. But if you do, stop riding immediately and find the nearest bike shop and have them fix it. The repair should cost around $12-$15 including labor, and be sure to get a receipt. If you need some directions, please give us a call.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Are there any special traffic rules I need to know?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Nope. A bicycle is allowed and held to the same laws as a car.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How much do your bikes weigh?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our single speeds weigh 19-20 pounds, and our internal 8-speeds weight 24-25 pounds.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
      </Container>
        </div>
    );
};

export default Faq;