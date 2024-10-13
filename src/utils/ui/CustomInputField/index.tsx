import { useState } from "react"
import "./styles.css"

export const CustomInputField = ({ label }: { label: string }) => {
  const [input, setInput] = useState("")
  const [isError, setIsError] = useState(false)

  return (
    <label className={`custom-field one ${isError ? "has-error" : ""}`}>
      <input
        type="text"
        placeholder=" "
        value={input}
        onChange={(e) => {
          setInput(e.target.value)
          setIsError(e.target.value.length === 0)
        }}
      />
      <span className="placeholder">{label}</span>
      {isError && (
        <span className="tooltiptext">
          This field can’t be empty. Please fill it in.
        </span>
      )}
    </label>
  )
}
