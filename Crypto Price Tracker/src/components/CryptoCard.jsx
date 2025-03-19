export default function CryptoCard({ name, price, image }) {
    return (
        <div className="crypto-card">
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <p>${price.toFixed(2)}</p>
        </div>
    );
}