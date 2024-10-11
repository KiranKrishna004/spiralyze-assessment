import "./styles.css"
export const CustomSelectField = ({
  errorMessage,
}: {
  errorMessage?: string
}) => {
  return (
    <label className={`custom-select ${errorMessage ? "has-error" : ""}`}>
      <select className="select-input">
        <option value="" disabled selected></option>
        <option value="india">India</option>
        <option value="southafrica">South Africa</option>
        <option value="usa">United States of America</option>
      </select>
      <span className="placeholder">Country</span>
      {/* {errorMessage && <span className="tooltiptext">{errorMessage}</span>} */}
    </label>
  )
}
