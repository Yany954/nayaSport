import { useEffect, useState } from "react";
import "./RoundCard.css";

function RoundCard({ imgPath, product, price }) {
  const [imageUrl, setImageUrl] = useState('');
  console.log(imageUrl);

  useEffect(() => {
    const blob = new Blob([new Uint8Array(imgPath)], { type: 'image/png' });

    const url = URL.createObjectURL(blob);

    setImageUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [imgPath]);
  console.log(imgPath);
  return (
    <article className="round-card">
      <aside className="round-card-vector">
        {imageUrl && <img  src={imageUrl} alt="img" />}
      </aside>
      <aside className="round-card-">
        <h2 className="round-card-description">{product}</h2>
        <h3 className="round-card-price">$ {price}</h3>
      </aside>
    </article>
  );
}

export default RoundCard;
