import Reakt from '../src/Reakt'
const React = Reakt

const names = ['foo', 'bar', 'baz']
const NameList = (): any => (
  <ul>
    {names.map((name: any) => (
      <li>{name}</li>
    ))}
  </ul>
)
const App = (props: any) => (
  <div>
    <h1>Hi {props.name}</h1>
    <NameList />
  </div>
)

const element = <App name="foo" />
const container = document.getElementById('root')
Reakt.render(element, container)
