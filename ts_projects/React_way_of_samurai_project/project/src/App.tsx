
import './App.css'
import Header from './components/Header/Header'
import Messages from './components/Messages/Messages'
import Navbar from './components/Navbar/Navbar'
import {Route, Router, Routes} from 'react-router-dom'
import Profile from './components/Profile/Profile'
import { Provider } from 'react-redux'
import store from './redux/redux_store'
import MessagesContainer from './components/Messages/MessagesContainer'
function App() {
return (
  <Provider store={store}>
  <div className="app-wrapper">
    <Header/>
    <Navbar/>
    <div className="app-wrapper-content">
     <Routes>
      <Route path='/messages' element={<MessagesContainer/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
   </Routes>
 
    </div> </div>
     </Provider>
 
)
}

export default App
