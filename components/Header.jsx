import Link from 'next/link';

const Header = () => {
	return (
		<div className="flex justify-between items-center p-5">
			<div>
				<Link href="/" className="hover:text-red-400">
					<h1 className="capitalize text-center text-6xl font-bold">
						RRT Travel
					</h1>
				</Link>
			</div>
			<div>
				<ul className="flex gap-20 ">
					<li className="hover:text-red-300 cursor-pointer">
						<Link href="/tours">Tours</Link>
					</li>
					<li className="hover:text-red-300  cursor-pointer">
						<Link href="/about">About</Link>
					</li>
					<li className="hover:text-red-300 cursor-pointer">
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
