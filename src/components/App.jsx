import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Navbar,
  Profile,
  Home,
  Activities,
  Register,
  Routines,
  Login,
} from "./";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);
  
  return (
    <div>
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUsername={setUsername}
        setPassword={setPassword}
      />
      <div>
        {isLoggedIn ? (
          <Routes>
            <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}/>
            <Route path='/routines' element={<Routines />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/activities' element={<Activities />}/>
          </Routes>
        ) : (
          <div>
            <Routes>
              <Route exact path='/' element={<Home />}/>
              <Route path='/routines' element={<Routines />}/>
              <Route path='/activities' element={<Activities />}/>
              <Route
                path='/login'
                element={
                  <Login
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                }
              />
              <Route path='/register' element={<Register />}/>
            </Routes>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
