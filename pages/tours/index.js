import { useState } from 'react';
import Head from 'next/head';

import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import ParisTours from '../../components/ParisTours';
import ScandinaviaTours from '../../components/ScandinaviaTours';

const ToursPage = () => {
	const session = useSession();

	return (
		<>
			<Head>
				<title>Tours</title>
				<meta name="description" content="Testing the latest" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section className=" bg-slate-400 h-screen w-full flex justify-center items-center">
				{/* <h1 className="text-black text-center text-7xl ">
					This is the Paris Tour!!!
				</h1> */}
				<ParisTours session={session} />

				<ScandinaviaTours session={session} />
			</section>
		</>
	);
};

export default ToursPage;
