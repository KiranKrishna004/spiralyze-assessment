import "./styles.css"

export const CustomInputField = ({
  label,
  errorMessage,
}: {
  label: string
  errorMessage: string
}) => {
  return (
    <label className={`custom-field one ${errorMessage ? "has-error" : ""}`}>
      <input type="text" placeholder=" " />
      <span className="placeholder">{label}</span>
      <span className="tooltiptext">{errorMessage}</span>
    </label>
  )
}
