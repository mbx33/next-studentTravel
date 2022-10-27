import Head from 'next/head';

const AboutPage = () => (
	<div>
		<Head>
			<title>About</title>
			<meta name="description" content="Testing the latest" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<main className="h-screen w-full bg-slate-400">
			<h1 className="text-black text-center text-6xl">My About Page</h1>
			<p className="text-black text-center text-2xl ">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
				facilis!
			</p>
		</main>
	</div>
);

export default AboutPage;
