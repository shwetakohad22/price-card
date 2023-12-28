import "./App.css";
import VideoCard from "./components/videoCard";

function App() {
  const data = [
    {
      title: "FREE",
      price: "$0/Month",
      features: [
        { text: "Single User", available: true },
        { text: "50GB Storage", available: true },
        { text: "Unlimited Public Projects", available: true },
        { text: "Community Access", available: true },
        { text: "Unlimited Private Projects", available: false },
        { text: "Dedicated Phone Support", available: false },
        { text: "Free Subdomain", available: false },
        { text: "Monthly Status report", available: false },
      ],
    },
    {
      title: "PLUS",
      price: "$9/Month",
      features: [
        { text: "5 User", available: true },
        { text: "50GB Storage", available: true },
        { text: "Unlimited Public Projects", available: true },
        { text: "Community Access", available: true },
        { text: "Unlimited Private Projects", available: true },
        { text: "Dedicated Phone Support", available: true },
        { text: "Free Subdomain", available: false },
        { text: "Monthly Status report", available: false },
      ],
    },
    {
      title: "PRO",
      price: "$49/Month",
      features: [
        { text: "Unlimited User", available: true },
        { text: "50GB Storage", available: true },
        { text: "Unlimited Public Projects", available: true },
        { text: "Community Access", available: true },
        { text: "Unlimited Private Projects", available: true },
        { text: "Dedicated Phone Support", available: true },
        { text: "Free Subdomain", available: true },
        { text: "Monthly Status report", available: true },
      ],
    },
  ];
  return (
    <>
      {data.map((data, idex) => (
        <VideoCard key={idex} {...data} />
      ))}
    </>
  );
}

export default App;
