import { useState, useEffect } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

const ParisTours = ({ session }) => {
	const supabase = useSupabaseClient();
	const [tours, setTours] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchTours = async () => {
		try {
			setLoading(true);
			const { data, error } = await supabase.from('paris_tour').select('*');

			setTours(data);
			setLoading(false);
		} catch (error) {
			setError(error.message);
		}
	};

	useEffect(() => {
		fetchTours();
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;
	console.log(tours, 'tours');

	return <div>ParisTours</div>;
};

export default ParisTours;
