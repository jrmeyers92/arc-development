import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./ui/Header";
import theme from "./ui/Theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route
						exact
						path='/'
						component={() => {
							<div>Home</div>;
						}}
					/>
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
