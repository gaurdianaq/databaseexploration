import ReactDOM from "react-dom"
import App from "./App"

const appcontainer = document.getElementById('myapp');

if (appcontainer !== null) {
  ReactDOM.render(<App/>, appcontainer)
}