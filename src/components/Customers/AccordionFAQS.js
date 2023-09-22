import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import GetData from '../../services/GetFAQS';


import faqs from '../../Json/FAQS.json';

function AccordionFAQS() {

  const { data, loading, error } = GetData('../../Json/FAQS.json')

  return (
    <div>
      {faqs.map((info, i) => {
        return (
          <Accordion key={i}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>{info.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {info.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        )
      })

      }


    </div>
  );
}


export default AccordionFAQS
