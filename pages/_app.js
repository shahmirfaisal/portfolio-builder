import "../styles/global.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

const App = ({ Component, pageProps }) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
