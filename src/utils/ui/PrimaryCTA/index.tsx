import "./styles.css"

export const PrimaryCTA = ({ buttonText }: { buttonText: string }) => {
  return (
    <div className="primary-button">
      <SubmitIcon />
      <p className="primary-button__text">{buttonText}</p>
    </div>
  )
}

const SubmitIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4_236)">
        <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_4_236">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
