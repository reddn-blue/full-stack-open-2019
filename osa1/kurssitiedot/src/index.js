import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => {
    return (
        <h1>{course}</h1>
    )
}

const Part = ({ part: { name, exercises } }) =>  {
    return (
        <p>{name} {exercises}</p>
    )
}

const Content = ({ parts }) => {
    return (
        <div>
            <Part part={parts[0]} />
            <Part part={parts[1]} />
            <Part part={parts[2]} />
        </div>
        )
}

const Total = ({ parts }) =>  {
    return (
        <p>yhteensä {parts[0].exercises + parts[1].exercises + parts[2].exercises } tehtävää</p>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
            {
                name: 'Reactin perusteet',
                exercises: 10
            },
            {
                name: 'Tiedonvälitys propseilla',
                exercises: 7
            },
            {
                name: 'Komponenttien tila',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))