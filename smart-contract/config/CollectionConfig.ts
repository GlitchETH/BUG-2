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
  contractName: 'GlitchETHGenesis',
  tokenName: 'Glitch',
  tokenSymbol: 'GCT',
  hiddenMetadataUri: "ipfs://QmPwrsrxQYMoJggLy8dA9mn7dejyzrwMG4hMNTA8991ngN/hidden.json.json",
  maxSupply: 1000,
  whitelistSale: {
    price: 0.00,
    maxMintAmountPerTx: 3,
  },
  preSale: {
    price: 0.00,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.00,
    maxMintAmountPerTx: 2,
  },
  contractAddress: "0x76bcdC7A431233AFa34F2Bf6B3c5657c2315262f",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
