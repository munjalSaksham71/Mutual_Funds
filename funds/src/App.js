import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from './screens/HomeScreen';
import FundDetailScreen from './screens/FundDetailScreen';
import Header from './components/Header'
import Footer from './components/Footer'
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  return (
     <Router>
      <Header />
      <Switch>
        <Container>
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/fund/:id?" component={FundDetailScreen} />
          <Route path="/search/:keyword" component={HomeScreen}/>
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
