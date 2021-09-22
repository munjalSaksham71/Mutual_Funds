import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from './screens/HomeScreen';
import FundDetailScreen from './screens/FundDetailScreen';
import Header from './components/Header'

function App() {
  return (
    <>
    <Router>
    <Header />
      <Container>
        <div className="App">
          <Route path="/" component={HomeScreen} exact />
          <Route path="/fund/:id" component={FundDetailScreen} exact />
        </div>
      </Container>
    </Router>
    </>
  );
}

export default App;
