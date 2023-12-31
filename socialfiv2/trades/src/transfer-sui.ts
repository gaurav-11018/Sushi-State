import {
  Ed25519Keypair,
  JsonRpcProvider,
  RawSigner,
  TransactionBlock,
  testnetConnection,
} from "@mysten/sui.js";

import fs from "fs";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function transferSui(
  privateKey: string,
  addressTo: string,
  amount: number
) {
  try {
    const provider = new JsonRpcProvider(testnetConnection);
    const privateKeyUint8Array = new Uint8Array(Buffer.from(privateKey, "hex"));
    const keypair = Ed25519Keypair.fromSecretKey(privateKeyUint8Array);

    const signer = new RawSigner(keypair, provider);
    const address = await signer.getAddress();
    const tx = new TransactionBlock();
    const [coin] = tx.splitCoins(tx.gas, [tx.pure(amount)]);
    console.log(coin);
    tx.transferObjects([coin], tx.pure(addressTo));
    const result = await signer.signAndExecuteTransactionBlock({
      transactionBlock: tx,
    });
    console.log({ result });
    console.log(`from ${address} to ${addressTo}  with ${amount}  sui`);
  } catch (e) {
    console.error(e);
  }
}
async function getSuiBalance(address: string) {
  const provider = new JsonRpcProvider(testnetConnection);
  const balance = await provider.getBalance({
    owner: address,
  });
  console.log(balance);
  return Number(balance["totalBalance"]);
}

export default async function batchTransferSui() {
  const suiAccounts = JSON.parse(
    fs.readFileSync("constants/sui-addresses.json", "utf-8")
  );
  let i = 0;
  while (i < suiAccounts.length) {
    const privateKey = suiAccounts[i]["privateKey"];
    const address = suiAccounts[i]["address"];
    const toAddress = suiAccounts[i]["toAddress"];
    const balance = await getSuiBalance(address);
    const gas = 4000000;
    const amount = balance - gas;
    if (amount > 0) {
      await transferSui(privateKey, toAddress, amount - gas);
    } else {
      console.log(`${address}`);
    }
    i++;
    await sleep(1000);
  }
}

// async function main() {
//   const suiAccounts = JSON.parse(
//     fs.readFileSync("constants/sui-addresses.json", "utf-8")
//   );
//   const amount = await getSuiBalance(
//     ""
//   );
//   const gas = 4000000;
//   console.log(amount);
//   await transferSui(
//     suiAccounts[0]["privateKey"],
//     suiAccounts[1]["address"],
//     amount - gas
//   );
// }
batchTransferSui();
// getSuiBalance(
//   ""
// );
