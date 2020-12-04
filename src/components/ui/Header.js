import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
	const { children } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		...theme.mixins.Toolbar,
		marginBottom: "7.5em",
	},
	logo: {
		height: "8em",
	},
	logoContainer: {
		padding: 0,
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
	tabContainer: {
		marginLeft: "auto",
	},
	tab: {
		...theme.typography.tab,
		minWidth: 10,
		marginLeft: "25px",
	},
	button: {
		borderRadius: "50px",
		marginLeft: "50px",
		marginRight: "25px",
		height: "45px",
		...theme.typography.estimate,
	},
}));

export default function Header(props) {
	const classes = useStyles();
	const [value, setValue] = useState(0);

	const handleChange = (e, value) => {
		setValue(value);
	};

	useEffect(() => {
		if (window.location.pathname === "/" && value !== 0) {
			setValue(0);
		} else if (window.location.pathname === "/services" && value !== 1) {
			setValue(1);
		} else if (window.location.pathname === "/revolution" && value !== 2) {
			setValue(2);
		} else if (window.location.pathname === "/about" && value !== 3) {
			setValue(3);
		} else if (window.location.pathname === "/contact" && value !== 4) {
			setValue(4);
		} else if (window.location.pathname === "/estimate" && value !== 5) {
			setValue(5);
		}
	}, [value]);

	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar position='fixed' color='primary'>
					<Toolbar disableGutters>
						<Button
							component={Link}
							to='/'
							disableRipple
							className={classes.logoContainer}
							onClick={() => {
								setValue(0);
							}}>
							<img src={logo} alt='company logo' className={classes.logo}></img>
						</Button>

						<Tabs
							value={value}
							onChange={handleChange}
							indicatorColor='primary'
							className={classes.tabContainer}>
							<Tab
								label='Home'
								className={classes.tab}
								component={Link}
								to='/'
							/>
							<Tab
								label='Services'
								className={classes.tab}
								component={Link}
								to='/services'
							/>
							<Tab
								label='The Revolution'
								className={classes.tab}
								component={Link}
								to='/revolution'
							/>
							<Tab
								label='About Us'
								className={classes.tab}
								component={Link}
								to='/about'
							/>
							<Tab
								label='Contact Us'
								className={classes.tab}
								component={Link}
								to='/contact'
							/>
						</Tabs>
						<Button
							variant='contained'
							color='secondary'
							className={classes.button}
							component={Link}
							to='estimate'>
							Free Estimate
						</Button>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
}
