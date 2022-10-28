import { useState } from 'react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

import MainLayout from '../components/layouts/MainLayout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	const [supabaseClient] = useState(() => createBrowserSupabaseClient());

	return (
		<SessionContextProvider
			supabaseClient={supabaseClient}
			initialSession={pageProps.initialSession}
		>
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</SessionContextProvider>
	);
}

export default MyApp;
