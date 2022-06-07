import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/Contact";
import FrontPage from "./pages/FrontPage";
import "bootstrap/dist/css/bootstrap.min.css";
import GetStarted from "./pages/GetStarted";
import Footer from "./components/Footer";
import ResetScroll from "./hooks/resetScroll";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Team from "./components/Team/Team";
import useIsDesktop from "./hooks/useIsDesktop";
import { createBrowserHistory } from "history";
import Cases from "./components/Frontpage/Cases";

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

function App() {
  const { isDesktop } = useIsDesktop();

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL} history={history}>
        <ResetScroll />
        <Navbar isDesktop={isDesktop} />
        <main className="container-fluid px-0">
          <Routes>
            <Route
              path="/"
              exact
              element={<FrontPage isDesktop={isDesktop} />}
            />
            <Route path="contact" element={<Contact />} />
            <Route path="our-team" element={<Team />} />
            <Route
              path="how-it-works"
              element={<HowItWorks isDesktop={isDesktop} />}
            />
            <Route path="get-started" element={<GetStarted />} />
            <Route
              path="solved-cases"
              element={<Cases isDesktop={isDesktop} />}
            />
          </Routes>
        </main>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
