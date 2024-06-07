import { useState } from 'react'

const	Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const	Stat = ({value, text}) => <p>{text} {value}</p>

const	Display = ({text}) => <h1>{text}</h1>

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const	goodClick = () => {
		console.log("increasing good", good)
		setGood(good + 1)
	}
	
	const	neutralClick = () => {
		console.log("increasing neutral", neutral)
		setNeutral(neutral + 1)
	}
	const	badClick = () => {
		console.log("increasing bad", bad)
		setBad(bad + 1)
	}

	return (
		<div>
			<Display text="Give feedback" />
			<Button handleClick={goodClick} text="good"/>
			<Button handleClick={neutralClick} text="neutral"/>
			<Button handleClick={badClick} text="bad"/>
			<Display text="Statistics" />
			<Stat value={good} text="good" />
			<Stat value={neutral} text="neutral" />
			<Stat value={bad} text="bad" />
		</div>
	)
}

export default App
