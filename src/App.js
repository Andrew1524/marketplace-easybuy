import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Catalogue from "./components/catalogue/Catalogue";
import Sale from "./components/sale/Sale";
import Profile from "./components/profile/Profile";
import Footer from "./components/footer/Footer";

import { AuthProvider } from "./contexts/AuthContext";
import PersonalData from "./components/profile/personal-data/PersonalData";
import Orders from "./components/profile/orders/Orders";
import Cart from "./components/profile/cart/Cart";
import HelpCenter from "./components/profile/help-center/HelpCenter";
import EmailConfirmation from "./components/email-confirmation/EmailConfirmation";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Catalogue />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/confirm-email" element={<EmailConfirmation />} />
            <Route path="/profile" element={<Profile />}>
              <Route index element={<PersonalData />} />
              <Route path="personal" element={<PersonalData />} />
              <Route path="orders" element={<Orders />} />
              <Route path="cart" element={<Cart />} />
              <Route path="help" element={<HelpCenter />} />

            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
