import "./styles.css"

export const CustomInputField = ({ label }: { label: string }) => {
  return (
    <label className="custom-field one">
      <input type="text" placeholder=" " />
      <span className="placeholder">{label}</span>
    </label>
  )
}
