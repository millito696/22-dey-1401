import './App.css';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import CardContainer from './Card.Container';
import Cart from './Cart';
import Modal from './modal';
import CartItem from './Cart.Item';
import Checkout from './Checkout';

function App() {
  return (
    <>
      <Header></Header>
      <div className="main">
        <div className="products">
          <Navbar />
          <CardContainer />
        </div>
        <div className="cart-main">
          <Cart></Cart>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
