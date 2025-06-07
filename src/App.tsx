import { Toaster } from "react-hot-toast";
import MainRouter from "./routers/main.router";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <GoogleOAuthProvider clientId="950706393986-7fioemkdu0k87j98iehb4nadhnaa7sa5.apps.googleusercontent.com">
        <MainRouter />
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
