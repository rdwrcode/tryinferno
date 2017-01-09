import Inferno from 'inferno';
//import App from './App';
//import './index.css';
import R from 'ramda';
//import Counter from './Counter';
import CounterPair from './CounterPair'

const renderer = R.curry((node, component) => Inferno.render(component, node))
const render = renderer(document.getElementById('app'))

const startApp = (state, view, update) => {
  // eslint-disable-next-line
  const dispatch = R.curry((state, action) => () => main(update(action, state), view))
  // eslint-disable-next-line
  const main = (state, view) => render(view(dispatch(state), state))
  main(state, view)
}

//startApp(Counter.init(0), Counter.view, Counter.update)
startApp(CounterPair.init(0, 10), CounterPair.view, CounterPair.update)
