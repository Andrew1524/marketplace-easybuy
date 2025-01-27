import Header from "./components/header/Header";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
      </AuthProvider>
    </div>
  );
};

export default App;
