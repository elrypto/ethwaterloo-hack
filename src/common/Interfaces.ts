import Web3 from "web3";
import { Client } from "loom-js";

/**
|--------------------------------------------------
|  Interfaces
|--------------------------------------------------
*/
export type Dispatch = React.Dispatch<IAction>;


export interface IAppState {
  selectedEthAddr: string;
  ethWeb3: Web3| null;
  ethBalance: string;
  injectedProvider: any;
  loomObj: LoomObject| null;
}

export interface IAction {
  type: string; //enum from Store.ActionType
  payload: any;
}


export interface LoomConnectionInfo {
  networkAlias: string;  // LOCAL_DEV | TEST | EXTDEV | PROD
  writeUrl: string;    // 'ws://127.0.0.1:46658/websocket';
  readUrl: string;    //  'ws://127.0.0.1:46658/queryws';
  networkId : string; //  'default' 
}

export interface LoomObject {
  contract: any;
  client: Client;
  privateKey: Uint8Array;
  publicKey: Uint8Array;
  currentUserAddress: string;
  web3: Web3;
  currentNetwork: string;

  connectionInfo: LoomConnectionInfo|any;
}

