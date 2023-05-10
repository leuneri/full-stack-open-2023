const Header = (header) => {
  console.log(header)
  return(
      <h1>{header.course}</h1>
  )
}

const Content = (content) => {
  console.log(content)
  return(
    <div>
      <Part parts={content.parts[0]["name"]} exercises={content.parts[0]["exercises"]} />
      <Part parts={content.parts[1]["name"]} exercises={content.parts[1]["exercises"]} />
      <Part parts={content.parts[2]["name"]} exercises={content.parts[2]["exercises"]} />
    </div>
  )
}

const Total = (total) => {
  console.log(total)
  return (
      <p>
        Number of exercises {total.parts[0]['exercises'] + total.parts[1]['exercises'] + total.parts[2]['exercises']}
      </p>
  )
}

const Part = (part) => {
  console.log(part)
  return (
      <p>
        {part.parts} {part.exercises}
      </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
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

export default App
