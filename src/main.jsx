// Library Imports
import ReactDOM from "react-dom/client";

// Files import
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { Stores } from "./Context/States/Store/Stores";

ReactDOM.createRoot(document.getElementById("root")).render(
//Provider sets the contxt so only its children has access to it, not a parent  
  // set context
  <Provider store={Stores}> 
  {/* App has the access to the context */}
    <App />
  </Provider>
);
