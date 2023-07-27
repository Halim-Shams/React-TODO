import {useEffect, useState} from 'react';

const useRandomJoke = (contains: string) => {
	const [joke, setJoke] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const generateJoke = async () => {
			setLoading(true);
			await fetch(
				`https://v2.jokeapi.dev/joke/Any?type=single&contains=${contains}`
			)
				.then((res) => res.json())
				.then((data) => {
					setLoading(false);
					data.error
						? setJoke('No jokes were found containing this string.')
						: setJoke(data.joke);
				});
		};
		generateJoke();
	}, [contains]);

	return [joke, loading];
};

export default useRandomJoke;
