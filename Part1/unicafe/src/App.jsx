import { useState } from 'react'

const	Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const	StatisticLine = ({value, text, perc}) => {
	if (perc)
	{
		return (
			<tr>
				<td>{text}</td> 
				<td>{value}</td> 
				<td>{perc}</td>
			</tr>
		)
	}
	else
	{
		return (
			<tr>
				<td>{text}</td> 
				<td>{value}</td>
			</tr>
		)
	}
}

const Statistics = (props) => {
	if (props.values[3] == 0)
	{
		return (
			<p>No feedback given</p>
		)
	}
	return(
		<table>
			<tbody>
				<StatisticLine value={props.values[0]} text="good" />
				<StatisticLine value={props.values[1]} text="neutral" />
				<StatisticLine value={props.values[2]} text="bad" />
				<StatisticLine value={props.values[3]} text="all" />
				<StatisticLine value={props.values[4]} text="average" />
				<StatisticLine value={props.values[5]} text="positive" perc="%" />
			</tbody>
		</table>
	)
}

const	Display = ({text}) => <h1>{text}</h1>

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	const [all, setAll] = useState(0)
	const [average, setAverage] = useState(0)
	const [positive, setPositive] = useState(0)

	const	goodClick = () => {
		console.log("increasing good, value before", good)
		setGood(good + 1)
		setAll(all + 1)
		setAverage((good + 1 - bad) / (all + 1))
		setPositive((good + 1) / (all + 1) * 100)
	}
	
	const	neutralClick = () => {
		console.log("increasing neutral, value before", neutral)
		setNeutral(neutral + 1)
		setAll(all + 1)
		setAverage((good - bad) / (all + 1))
		setPositive(good / (all + 1) * 100)
	}
	const	badClick = () => {
		console.log("increasing bad, value before", bad)
		setBad(bad + 1)
		setAll(all + 1)
		setAverage((good - (bad + 1)) / (all + 1))
		setPositive(good / (all + 1) * 100)
	}

	return (
		<div>
				<Display text="Give feedback" />
				<Button handleClick={goodClick} text="good"/>
				<Button handleClick={neutralClick} text="neutral"/>
				<Button handleClick={badClick} text="bad"/>
				<Display text="Statistics" />
				<Statistics values={[good, neutral, bad, all, average, positive]} />
		</div>
	)
}

export default App
