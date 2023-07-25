import React from 'react'
import './WhatsApp.css';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { apiWhatsApp  } from '../../../routes/PathRoutes';

function WhatsApp() {
  return (
    <span>
      <a target='_blank' className='whatsapp-icon-link' href={apiWhatsApp.text}>
        <WhatsAppIcon fontSize="large" className='whatsapp-icon' />
      </a>
    </span>

  )
}

export default WhatsApp;