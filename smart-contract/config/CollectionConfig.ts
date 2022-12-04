import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.hardhatLocal,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'Bug',
  tokenName: 'Bug',
  tokenSymbol: 'BUG',
  hiddenMetadataUri: 'ipfs://QmZbG5cGQMovy9bDE9xoCWSYCCPLCZWg5cJSFT5muWSp2X/hidden.json',
  maxSupply: 1000,
  whitelistSale: {
    price: 0.00,
    maxMintAmountPerTx: 10,
  },
  preSale: {
    price: 0.00,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.00,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0xdE2CBBeC82bf8C25B9a7bE3fA42481650775A180",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
