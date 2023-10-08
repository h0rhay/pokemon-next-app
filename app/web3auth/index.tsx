import { useWeb3 } from "@3rdweb/hooks";

export default function Web3AuthPage() {
    const {address, chainId, connectWallet, error} = useWeb3();

    if(error) {
        console.error('Error:', error);
        return (
            <>
                <h1>Error: {error.message}</h1>
            </>
        )
    } else if(address) {
        return (
            <>
                <h1>Connected to {chainId}</h1>
                <h1>Connected to {address}</h1>
            </>
        )
    } else {
        return (
            <>
                <button onClick={() => connectWallet("injected")}>Connect</button>
            </>
        )
    }
}
