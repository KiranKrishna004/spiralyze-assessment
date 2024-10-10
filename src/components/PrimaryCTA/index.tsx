import "./styles.css"
import { SubmitIcon } from "./SubmitIcon"

export const PrimaryCTA = ({ buttonText }: { buttonText: string }) => {
  return (
    <div className="button">
      <SubmitIcon />
      <p className="button__text">{buttonText}</p>
    </div>
  )
}
