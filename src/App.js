import './App.css';
import Homepage from "./pages/homepage/Homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header-component/header-component"


function App() {
  return (
    <div className="App">
    <Header />
      <switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />   
      </switch>
    </div>
  );
}

export default App;
