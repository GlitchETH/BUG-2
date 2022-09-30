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
  hiddenMetadataUri: "ipfs://QmRjQGqmP4iTvR28nv66xkLHSUBrvwUg4gHYi48pZRqrqu/hidden.json",
  maxSupply: 1000,
  whitelistSale: {
    price: 0.00,
    maxMintAmountPerTx: 4,
  },
  preSale: {
    price: 0.00,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.00,
    maxMintAmountPerTx: 0,
  },
  contractAddress: "0xBf121B808013702d2e2Ba316f07f7FFa32067aa2",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
