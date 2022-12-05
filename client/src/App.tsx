import Home from "./pages/Home";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import { Button, Toolbar, Typography, makeStyles, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
	menuButton: {
	  marginRight: theme.spacing(2),
	},
	title: {
	  flexGrow: 1,
	},
	link: {
		color: 'white'
	}
}));

export default function App(): JSX.Element {
	const classes = useStyles();

	return <Router>
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography className={classes.title}>
						Page
					</Typography>
					<Link className={classes.link} to="/">Home</Link>
				</Toolbar>
			</AppBar>

			<Switch>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</div>
	</Router>
}