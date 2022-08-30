import { BrowserRouter, useRoutes } from 'react-router-dom'
import SetRoutes from './router/index'

function App () {
  console.log('app')
  // const element = useRoutes(routes)
  return (
    <div className='App'>
      <SetRoutes></SetRoutes>
    </div>

  );
}

export default App;
