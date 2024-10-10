import "./App.css"
import { PrimaryCTA } from "./components/PrimaryCTA"
// import { CustomInputField } from "./components/CustomInputField"
// import { ToolTipButton } from "./components/TooltipButton"

function App() {
  return (
    <>
      {/* <CustomInputField
        label="First Name"
        errorMessage="This field can’t be empty. Please fill it in."
      /> */}
      {/* <ToolTipButton
        buttonText="Treatment Planning & Placement"
        tooltipText="We’re experienced in our individual crafts and understand how each one of our roles impacts your plan holistically."
      /> */}
      <PrimaryCTA buttonText="Submit" />
    </>
  )
}

export default App
