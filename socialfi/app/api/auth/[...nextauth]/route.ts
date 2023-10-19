import { NextRequest, NextResponse } from "next/server";
import { generateNonce, generateRandomness } from "@mysten/zklogin";

import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";
import { generators } from "openid-client";
import { getActiveNetworkSuiClient } from "@/lib/sui";

async function handler(req: NextRequest, res: NextResponse) {
  const suiClient = await getActiveNetworkSuiClient();
  const { epoch } = await suiClient.getLatestSuiSystemState();

  const maxEpoch = epoch + 2; 
  const ephemeralKeyPair = new Ed25519Keypair();
  const randomness = generateRandomness();
  const nonce = generateNonce(
    ephemeralKeyPair.getPublicKey(),
    // @ts-ignore
    maxEpoch,
    randomness
  );

  generators.nonce = () => {
    return nonce;
  };

  // @ts-ignore
  return NextAuth(req, res, authOptions);
}

export { handler as GET, handler as POST };
