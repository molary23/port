import InfoContextProvider from '@services/info-context'
import {Main} from '@components/Main'

function App() {
  return (
    <InfoContextProvider>
      <Main />
    </InfoContextProvider>
  )
}

export default App
