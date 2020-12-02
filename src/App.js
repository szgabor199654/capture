// Import pages
// Global Style
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <div className="App">
      <h1>Film</h1>
      <GlobalStyle />
      <AboutUs />
    </div>
  );
};

export default App;
