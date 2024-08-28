import express from 'express';

const app = express();

app.get('/', (req, res) => {
	const url = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1';
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWFjM2Q1NWMwM2I4MmRkYzg0ZjZhYTk2NWI5MWFmMSIsIm5iZiI6MTcyNDgwMTg1OC40MDEwNDYsInN1YiI6IjY2YTcwZjBhMWI1ZmFkYjQ1NWFiYTZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7-e__uBf_v6pXDf5ZVvQVmTxhsVPWs8G9T6YBk8Y20c',
		},
	};

	fetch(url, options)
		.then((res) => res.json())
		.then((json) => res.json(json))
		.catch((err) => console.error('error:' + err));
});

app.listen(3000, () => {
	console.log('Server is running on http://localhost:3000');
});
