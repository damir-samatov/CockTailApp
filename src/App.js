import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Error from "./Components/Error/Error";
import Footer from "./Components/Footer/Footer";
import "./index.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
function App() {
    return (
        <div className="container">
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/about">
                        <About />
                    </Route>

                    <Route path="*">
                        <Error />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
