import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import Maps from "./pages/maps/Maps";
import Sites from "./pages/sites/Sites";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>

     <Route path="/">
        <Route index element={<Home />}/>
        <Route path="login" element={<Login/>}/> 
        <Route path="users">
          <Route index element={<List/>}/>
          <Route path=":userId" element={<Single/>}/>
          <Route path="new" element={<New/>}/>
        </Route>
        <Route path="maps" element={<Maps/>}/> 
        <Route path="sites" element={<Sites/>}/> 
       
     </Route> 

    </Routes>
  </BrowserRouter>,
    </div>
  );
}

export default App;
