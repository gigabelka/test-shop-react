import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import { CartProvider } from './context/CartContext';
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <UserProvider>
          <CartProvider>
            <AppRouter />
          </CartProvider>
        </UserProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
