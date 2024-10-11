import { RightArrow } from "./RightArrow"
import "./styles.css"

export const SecondaryCTA = ({ buttonText }: { buttonText: string }) => {
  return (
    <button className="button" type="button">
      {buttonText}
      <RightArrow />
    </button>
  )
}
