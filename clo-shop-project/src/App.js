
//Components
import ProductsContextProvider from "./context/ProductsContextProvider";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <ProductsContextProvider>
        <Navbar />
      </ProductsContextProvider>
    </div>
  );
}

export default App;
