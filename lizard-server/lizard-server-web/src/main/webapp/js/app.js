// React router
// React Router V4, nested routing demo (works without WebPack) https://codepen.io/schafeld/pen/yzvZPj?editors=1000
const Router = window.ReactRouterDOM.BrowserRouter;
const Route =  window.ReactRouterDOM.Route;
const Link =  window.ReactRouterDOM.Link;
const NavLink = window.ReactRouterDOM.NavLink;
const Prompt =  window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;

const App = () => (
  <div>
    <Navigation />
    <Main />
   </div>
);

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink exact to='/'>Home</NavLink></li>
      <li><NavLink exact to='/add'>Add Task</NavLink></li>
      <li><NavLink exact to='/about'>About</NavLink></li>
      <li><NavLink exact to='/contact'>Contact</NavLink></li>
    </ul>
  </nav>
);

const Home = () => (
  <div>
    <h1>Welcome to my lizard project</h1>
    <p> Feel free to browse around and learn more about me.</p>
  </div>
);

const About = () => (
  <div>
    <h1>About Me</h1>
  </div>
);

const Contact = () => (
  <div>
    <h1>Contact Me</h1>
    <p>You can reach me via email: <strong>hello@example.com</strong></p>
  </div>
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
	<Route exact path='/add' component={TaskForm}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/contact' component={Contact}></Route>
  </Switch>
);

ReactDOM.render(
		 <Router>
   		   <App />
		 </Router>,
document.getElementById('router'));