export async function fetchCryptoPrices() {
    const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
    return response.json();
}