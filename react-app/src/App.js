import "./App.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Booking from "./Booking.jsx";
import { Routes, Route } from "react-router-dom";
import Reservation from "./Reservation.jsx";
import Home from "./Home.jsx";
import Payment from "./Payment.jsx"; // Import Payment component

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/payment" element={<Payment />} /> {/* Add Payment route */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;