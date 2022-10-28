import { useState, useEffect } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

const ParisTours = ({ session }) => {
	const supabase = useSupabaseClient();
	const [tour, setTour] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchTour = async () => {
			try {
				setLoading(true);
				const { data, error } = await supabase.from('paris_tour').select('*');

				setTour(data);
				setLoading(false);
			} catch (error) {
				setError(error.message);
			}
		};
		fetchTour();
	}, [supabase]);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;
	console.log(tour, 'tours');

	const days = JSON.stringify(tour[0].days);
	const daysArray = JSON.parse(days);
	console.log(daysArray, 'daysArray');
	console.log(daysArray['Day 1'], daysArray['Day 2'], daysArray['Day 3']); // 1

	const { name, base_price, included } = tour[0];

	return (
		<div className="flex flex-col border-2 p-3 rounded ">
			<h1 className="text-4xl font-bold text-center">
				{name}
				<span className="text-4xl text-green-400 font-bold"> ${base_price}</span>
			</h1>
			<div className="grid grid-cols-1 gap-4">
				<div className="bg-slate-400 p-4">
					Day 1<div className="bg-slate-400 p-4">{daysArray['Day 1']}</div>
				</div>
				<div className="bg-slate-400 p-4">
					Day 2<div className="bg-slate-400 p-4">{daysArray['Day 2']}</div>
				</div>
				<div className="bg-slate-400 p-4">
					Day 3<div className="bg-slate-400 p-4">{daysArray['Day 3']}</div>
				</div>
			</div>
			<div className="bg-slate-400 p-4 text-yellow-200">
				<p> Included in Tour: </p>
				{included.map((item, i) => (
					<div key={i} className="bg-slate-400 p-4 ">
						<p>{item}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ParisTours;
