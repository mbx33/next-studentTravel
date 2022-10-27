const Footer = () => {
	return (
		<div className="flex justify-between items-center p-5">
			<div>
				<h1 className="capitalize text-center text-6xl font-bold">Footer</h1>
			</div>
			<div>
				<p>Copyright {new Date().getFullYear()} &copy; All rights reserved</p>
			</div>
		</div>
	);
};

export default Footer;
