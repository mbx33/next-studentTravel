import Head from 'next/head';

const ContactPage = () => {
	return (
		<>
			<Head>
				<title>Contact</title>
				<meta name="description" content="Testing the latest" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section className=" bg-slate-400 h-screen w-full flex justify-center items-center">
				<h1 className="text-black text-center text-7xl ">
					This is the ContactPage!!!
				</h1>
			</section>
		</>
	);
};

export default ContactPage;
