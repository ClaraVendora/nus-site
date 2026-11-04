import logo from "../nus-logo.png";

export default function Home() {
  return (
    <div>
      <img src={logo} alt="NUS logo" style={{ width: 200 }} />
      <p>NUS is a leading research university in Asia</p>
    </div>
  );
}