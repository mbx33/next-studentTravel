import Head from 'next/head';

export default function Home() {
	return (
		<div>
			<Head>
				<title>HomePage</title>
				<meta name="description" content="Testing the latest" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className=" bg-slate-400 h-screen w-full flex justify-center items-center">
				<h1 className="text-black text-center text-7xl ">
					This is the HomePage!!!
				</h1>
			</main>
		</div>
	);
}
