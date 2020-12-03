import React, { useState } from "react";
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
		height: "7em",
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
	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar position='fixed' color='primary'>
					<Toolbar disableGutters>
						<img src={logo} alt='company logo' className={classes.logo}></img>
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
							className={classes.button}>
							Free Estimate
						</Button>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
}
