import { useState, useEffect} from "react";
import { fetchCryptoPrices } from "../Api";
import CryptoCard from "./CryptoCard";

export default function CryptoTracker() {
    const [crypto, setCrypto] = useState([]);

    useEffect(() => {
        fetchCryptoPrices().then(setCrypto);
    }, []);


    return (
        <div className="crypto-tracker">
            <h1>Crypto Price Tracker</h1>
            <div className="crypto-list">
                {crypto.map(crypto => (
                    <CryptoCard key={crypto.id} name={crypto.name} price={crypto.current_price} image={crypto.image}/>
                ))}
            </div>
        </div>
    )
}