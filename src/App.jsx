import LoginForm from "./components/Loginform";
import backgroundVideo from "./assets/Minecraft.mp4";
import "./App.css";

function App() {
  return (
    <main className="page">
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <LoginForm />
    </main>
  );
}

export default App;