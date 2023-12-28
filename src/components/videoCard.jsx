function VideoCard({ title, price, features }) {
  return (
    <div className="container">
      <div className="card">
        <h3 className="title">{title}</h3>
        <h2 className="price">{price}</h2>
        <hr />
        <ul>
          {features.map((feature, index) => (
            <li
              key={index}
              className={feature.available ? "available" : "not-available"}
            >
              {/* {feature.available ? "✔ " : "✘ "} */}
              {feature.text}
            </li>
          ))}
        </ul>
        <button className="btn">Button</button>
      </div>
    </div>
  );
}
export default VideoCard;
