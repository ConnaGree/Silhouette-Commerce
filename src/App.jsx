import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Contact, Cart, Wishlist, SignUp } from "./pages";
import { Footer, Navbar } from "./components";
import {Deliverybox} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Deliverybox />
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route exact path="/contact" Component={Contact}></Route>
        <Route exact path="/cart" Component={Cart}></Route>
        <Route exact path="/wishlist" Component={Wishlist}></Route>
        <Route exact path="/signup" Component={SignUp}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
