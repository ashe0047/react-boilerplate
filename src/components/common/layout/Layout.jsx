
import { Card } from "@/components/ui/card";
import "./Layout.css";

import React from "react";

const Layout = () => {
	return (
		<div className="grid grid-cols-1">
			<div className="container">
				<Card>Some text</Card>
			</div>
		</div>
	);
};


export default Layout;
