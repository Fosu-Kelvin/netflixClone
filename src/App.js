import { Route, Routes,Navigate } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login,logout, selectUser } from './features/user/userSlice';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(()=>{
    const unsubscribe =  auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        //Logged in
        console.log(userAuth)
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email
        }))
      }else {
        //Logged out
        dispatch(logout())
      }
    })

      return unsubscribe;
  },[dispatch])

  

  return (
    <div className="app">
      
     <Routes>
        
        
        <Route path="/login" element={user ? <Navigate to="/profile" replace /> : <LoginScreen />} />

        
        <Route path="/" element={ <HomeScreen />} />
        <Route path="/profile" element={user ? <ProfileScreen /> : <Navigate to="/login" replace />} />
        </Routes>
       
        
      
        
    </div>
  );

}
export default App;
