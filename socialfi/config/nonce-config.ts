import { SuiClient, getFullnodeUrl } from '@mysten/sui.js/client';
import { generateNonce, generateRandomness } from '@mysten/zklogin';

import { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519';

const FULLNODE_URL = 'https://fullnode.devnet.sui.io'; 
const suiClient = new SuiClient({ url: FULLNODE_URL });

async function getEpochDetails() {
    const { epoch, epochDurationMs, epochStartTimestampMs } = await suiClient.getLatestSuiSystemState();
    return { epoch, epochDurationMs, epochStartTimestampMs };
}

async function generateNonceConfig() {
    const { epoch, epochDurationMs, epochStartTimestampMs } = await getEpochDetails();
    const maxEpoch = Number(epoch) + 2; // this means the ephemeral key will be active for 2 epochs from now.
    const ephemeralKeyPair = new Ed25519Keypair();
    const randomness = generateRandomness();
    const nonce = generateNonce(ephemeralKeyPair.getPublicKey(), maxEpoch, randomness);
    return { nonce, ephemeralKeyPair };
}

export default generateNonceConfig;


