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
  <nav className="navbar fixed-top bg-dark">
    <ul className="nav nav-pills">
      <a className="navbar-brand" href="#">Lizard</a>
      <li className="active"><NavLink exact to='/lizard'>Home</NavLink></li>
      <li><NavLink exact to='/lizard/add'>Add Task</NavLink></li>
      <li><NavLink exact to='/lizard/examples'>React Examples</NavLink></li>
      <li><NavLink exact to='/lizard/about'>About</NavLink></li>
      <li><NavLink exact to='/lizard/contact'>Contact</NavLink></li>
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

const Topic = () => (
  <div>
    <h3>test</h3>
  </div>
);

const Examples = ({match}) => (
	<div>
	    <h2>React Examples</h2>
	    <ul>
	      <li>
	        <NavLink to={`${match.url}/ajaxCalls`}>Ajax Call</NavLink>
	      </li>
	      <li>
	        <NavLink to={`${match.url}/dataTables`}>DataTables</NavLink>
	      </li>
	    </ul>

	    <Switch>
	    	<Route path={`${match.url}/ajaxCalls`} component={TaskComponent} ></Route>
	    	<Route path={`${match.url}/dataTables`} component={DataTableComponent} ></Route>
	    	<Route exact path='/examples' render={() => <h4>Please select a example.</h4>}></Route>
	    </Switch>
	</div>
);

const Main = () => (
  <div style={{marginLeft:15, marginRight:15, marginTop:75}}>
  <Switch>
    <Route exact path='/lizard' component={Home}></Route>
	<Route exact path='/lizard/add' component={TaskForm}></Route>
	<Route path='/lizard/examples' component={Examples}></Route>
    <Route exact path='/lizard/about' component={About}></Route>
    <Route exact path='/lizard/contact' component={Contact}></Route>
  </Switch>
  </div>
);

ReactDOM.render(
		 <Router>
   		   <App />
		 </Router>,
document.getElementById('router'));