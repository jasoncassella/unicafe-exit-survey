import { useEffect, useState } from 'react';

const StatisticLine = props => {
	return (
		<tr>
			<td>{props.text}</td>
			<td>
				{props.value}
				{props.symbol}
			</td>
		</tr>
	);
};

const Button = props => {
	return <button onClick={props.onClick}>{props.text}</button>;
};

const Statistics = props => {
	return (
		<table>
			<StatisticLine text='good' value={props.good} />
			<StatisticLine text='neutral' value={props.neutral} />
			<StatisticLine text='bad' value={props.bad} />
			<StatisticLine text='total' value={props.total} />
			<StatisticLine text='average' value={props.average} />
			<StatisticLine text='positivity' value={props.positivity} symbol='%' />
		</table>
	);
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNuetral] = useState(0);
	const [bad, setBad] = useState(0);
	const [total, setTotal] = useState(0);
	const [average, setAverage] = useState(0);
	const [positivity, setPositivity] = useState(0);

	const handleGood = () => {
		setTotal(total + 1);
		setGood(good + 1);
	};

	const handleNeutral = () => {
		setTotal(total + 1);
		setNuetral(neutral + 1);
	};

	const handleBad = () => {
		setTotal(total + 1);
		setBad(bad + 1);
	};

	useEffect(() => {
		if (total === 0) return;
		setPositivity((good / total) * 100);
		setAverage((good - bad) / total);
	}, [total]);

	return (
		<div>
			<div className='feedback'>
				<h1>give feedback</h1>
				<Button onClick={handleGood} text='good' />
				<Button onClick={handleNeutral} text='neutral' />
				<Button onClick={handleBad} text='bad' />
			</div>
			<h1>statistics</h1>
			{total > 0 ? (
				<Statistics
					good={good}
					neutral={neutral}
					bad={bad}
					total={total}
					average={average}
					positivity={positivity}
				/>
			) : (
				'No feedback given'
			)}
		</div>
	);
};

export default App;
