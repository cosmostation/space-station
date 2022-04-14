import Transport from '@ledgerhq/hw-transport';
import TransportWebUSB from '@ledgerhq/hw-transport-webusb';

async function getLedgerConnection (): Promise<Transport> {
  const supportUSB = await TransportWebUSB.isSupported();

  if (supportUSB) {
    return TransportWebUSB.create();
  } else {
    const message = 'Current browser or platform does not support Ledger connect!';
    throw new Error(message);
  }
}

export default {
  getLedgerConnection
};
