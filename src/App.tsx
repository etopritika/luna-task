import HomePage from "./pages/Home";
import ModalProvider from "./providers/Modal";

export default function App() {
  return (
    <ModalProvider>
      <HomePage />
    </ModalProvider>
  );
}
