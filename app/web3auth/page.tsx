'use client';
import { useWeb3 } from '@3rdweb/hooks';

export default function Web3AuthPage() {
  const { address, chainId, connectWallet, error } = useWeb3();

  return (
    <section className="mx-auto max-w-5xl border rounded-md p-4 min-h-screen flex flex-col justify-center text-center">
      {error ? (
        <h1>Error: {error.message}</h1>
      ) : address ? (
        <div className="h-96">
          <h1 className="text-2xl font-bold mb-4">
            Web3 Wallet Connection details:
          </h1>
          <p className="text-xl font-bold mb-4">
            Connected to: <code className="font-light">{address}</code>
          </p>
          <p className="text-xl font-bold mb-4">
            Connected to chain ID: <code className="font-light">{chainId}</code>
          </p>
        </div>
      ) : (
        <div className="h-96">
          <h1 className="text-2xl font-bold mb-4">
            Connect to your MetaMask wallet:
          </h1>
          <button
            className="mx-auto w-1/2 bg-amber-300 dark:bg-sky-400 text-white py-2 px-4 rounded-md shadow-md hover:bg-amber-400 hover:dark:bg-sky-500"
            onClick={() => connectWallet('injected')}
          >
            Connect
          </button>
        </div>
      )}
    </section>
  );
}
