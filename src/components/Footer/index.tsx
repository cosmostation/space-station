import './Footer.css';

import React from 'react';
import dotenv from 'dotenv';
import { ReactComponent as AkashLogo } from 'images/akash-logo.svg';

dotenv.config();

const ON_AKASH = process.env.REACT_APP_ON_AKASH === 'true';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      {ON_AKASH && (<span className="deployed-on-akash"><AkashLogo/>&nbsp;&nbsp;Deployed on Akash.&nbsp;</span>)}
      <span className="copyright">© 2022 powered by Cosmostation.</span>
    </div>
  );
};

export default Footer;
