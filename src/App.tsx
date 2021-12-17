import React from 'react'
import { StatusBar } from 'react-native'
import { HomeScreen } from './screens/HomeScreen'

const App: React.FC = () => {
  return(
    <>
      <StatusBar barStyle="light-content"/>
      <HomeScreen />
    </>
  )
}
export default App;