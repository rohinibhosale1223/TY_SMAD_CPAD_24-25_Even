import { Slot } from 'expo-router';
import { CartProvider } from '../context/CartContext'; // your context path

export default function RootLayout() {
  return (
    <CartProvider>
      <Slot />
    </CartProvider>
  );
}
