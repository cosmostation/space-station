import './Footer.css';

import React from 'react';
import { ReactComponent as AkashLogo } from 'images/akash-logo.svg';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      {/* <AkashLogo/>
      &nbsp;&nbsp;Deployed on Akash.&nbsp; */}
      © 2022 powered by Cosmostation.
    </div>
  );
};

export default Footer;
