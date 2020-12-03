import React from "react";
import AppBar from "@material-ui/core/AppBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Toolbar from "@material-ui/core/Toolbar";

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

export default function Header(props) {
	return (
		<ElevationScroll>
			<AppBar position='fixed'>
				<Toolbar>Arc Developement</Toolbar>
			</AppBar>
		</ElevationScroll>
	);
}
