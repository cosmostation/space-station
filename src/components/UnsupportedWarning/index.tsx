import './UnsupportedWarning.css';

import React from 'react';
import FailIcon from 'images/fail-icon.png';

const UnsupportedWarning: React.FC = () => {
  return (
    <div className="unsupported-warning-container">
      <div className="unsupported-warning-title-container">
        <img src={FailIcon} alt="fail" className="toast-icon"/>
        <span className="unsupported-warning-title">Warning</span>
      </div>
      <div className="unsupported-warning-content">
        <p>
          Please note that withdrawals from Gravity Bridge Chain to Ethereum are only possible for advanced users via the cli at the moment.
        </p>
        <p className="unsupported-warning-muted-content">
          CLI Instructions : <a className="support-channel-link" href="https://github.com/Gravity-Bridge/Gravity-Docs/blob/main/docs/cli-usage.md#sending-tokens-on-gravity-bridge-to-ethereum" target="_blank" rel="noopener noreferrer">here</a><br/>
          Support (GBC Discord) : <a className="support-channel-link" href="https://discord.com/invite/d3DshmHpXA" target="_blank" rel="noopener noreferrer">here</a>
        </p>
      </div>
    </div>
  );
};

export default UnsupportedWarning;
