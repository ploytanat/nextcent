import Business from "./components/Business";
import Calender from "./components/Calender";
import Client from "./components/Client";
import Community from "./components/Community";
import CommunityUpdates from "./components/CommunityUpdates";
import Customers from "./components/Customers";
import Footer from "./components/Footer";



import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Pixelgrade from "./components/Pixelgrade";

export default function page() {
  return (
    <div>
      <Navbar />
      <Header />
      <Client />
      <Community />
      <Pixelgrade />
      <Business />
      <Calender />
      <Customers />
      <CommunityUpdates />

      <Footer />
    </div>
  );
}
