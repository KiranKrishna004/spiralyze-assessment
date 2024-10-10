import "./styles.css"

export const CustomInputField = () => {
  return (
    <label className="custom-field one">
      <input type="text" placeholder=" " />
      <span className="placeholder">Enter Text</span>
    </label>
  )
}
