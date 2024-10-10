import "./styles.css"
import { ToolTipIcon } from "./ToolTipIcon"

export const ToolTipButton = ({
  buttonText,
  tooltipText,
}: {
  buttonText: string
  tooltipText?: string
}) => {
  return (
    <div className="button">
      <div className="button__text__tip">
        <p className="button__text">{buttonText}</p>
        {tooltipText && <ToolTipIcon />}
      </div>
      {tooltipText && (
        <span className="button__tooltiptext">{tooltipText}</span>
      )}
    </div>
  )
}
