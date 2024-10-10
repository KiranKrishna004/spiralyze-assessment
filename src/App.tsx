import "./App.css"
import { CustomInputField } from "./components/CustomInputField"

function App() {
  return (
    <CustomInputField
      label="First Name"
      errorMessage="This field can’t be empty. Please fill it in."
    />
  )
}

export default App
