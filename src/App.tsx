import { LanguageProvider } from './context/LanguageContext';
import { UserProvider } from './context/UserContext';
import { CartProvider } from './context/CartContext';
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <LanguageProvider>
      <UserProvider>
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </UserProvider>
    </LanguageProvider>
  );
}

export default App;
