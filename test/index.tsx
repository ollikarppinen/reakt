import Reakt from '../src/Reakt'
const React = Reakt

// const element = createElement(
//   'div',
//   { id: 'foo' },
//   createElement('a', { style: 'color: blue;' }, 'foo'),
//   createElement('b', null, 'bar')
// )

// const container = document.getElementById('root')
// render(element, container)
const names = ['foo', 'bar', 'baz']
const NameList = () => (<ul>{names.map(name => (<li>{name}</li>))</ul>)
const App = (props: any) => (
  <div>
    <h1>Hi {props.name}</h1>
    <NameList />
  </div>
)

const element = <App name="foo" />
const container = document.getElementById('root')
Reakt.render(element, container)
