import Home from "../src/components/Home";
import Play from "../src/components/Play";

const Routes = [
	{
		url: "/",
		exact: true,
		component: Home
	},
	{
		url: "/play",
		exact: false,
		component: Play
	}
];

export default Routes;
