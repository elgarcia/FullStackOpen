const	Header = (props) => {
	return (
		<h1>{props.course}</h1>
	)
}
const	Part = (props) => {
	return (
		<p>
			{props.part.name} {props.part.exercises}
		</p>
	)
}

const Content = (props) => {
	return (
		<div>
			<Part part={props.part[0]} />
			<Part part={props.part[1]} />
			<Part part={props.part[2]} />
		</div>
	)
}

const Total = (props) => {
	const	exercises1 = props.part[0].exercises
	const	exercises2 = props.part[1].exercises
	const	exercises3 = props.part[2].exercises

	return(
		<p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
	)
}

const App = () => {
	const	course = 
	{
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10
			},
			{
				name: "Using props to pass data",
				exercises: 7
			},
			{
				name: "State of a component",
				exercises: 14
			}
		]
	}

	return (
		<div>
			<Header course={course.name} />
			<Content part={course.parts} />
			<Total part={course.parts} />
		</div>
	)
}

export default App
