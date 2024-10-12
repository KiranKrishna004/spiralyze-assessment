import "./styles.css"

export const ToolTipButton = ({ buttonText }: { buttonText: string }) => {
  return (
    <div className="tootip-button">
      <div className="tootip-button__text__tip">
        <p className="tootip-button__text">{buttonText}</p>
        {/* <ToolTipIcon /> */}
      </div>
      <span className="tootip-button__tooltiptext">
        We’re experienced in our individual crafts and understand how each one
        of our roles impacts your plan holistically.
      </span>
    </div>
  )
}

export const ToolTipIcon = () => {
  return (
    <svg
      className="button__tip"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_407)">
        <path d="M13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="#5BC8AF" />
        <path
          d="M3.5 12C3.5 7.30814 7.30814 3.5 12 3.5C16.6919 3.5 20.5 7.30814 20.5 12C20.5 16.6919 16.6919 20.5 12 20.5C7.30814 20.5 3.5 16.6919 3.5 12Z"
          stroke="#5BC8AF"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_407">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
