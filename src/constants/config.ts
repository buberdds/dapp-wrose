export const WROSE_CONTRACT_BY_NETWORK: Record<number, string> = {
  23294: '0x8Bc2B030b299964eEfb5e1e0b36991352E56D2D3',
  23295: '0xB759a0fbc1dA517aF257D5Cf039aB4D86dFB3b94',
}

export const EXPLORER_URL_BY_NETWORK: Record<number, string> = {
  23294: 'https://explorer.oasis.io/mainnet/sapphire',
  23295: 'https://explorer.oasis.io/testnet/sapphire',
}

export const getTransactionUrl = (baseUrl: string, txHash: string) =>
  `${baseUrl}/tx/${txHash}`
