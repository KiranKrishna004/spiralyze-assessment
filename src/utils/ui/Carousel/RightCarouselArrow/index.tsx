import "../styles.css"
export const RightCarouselArrow = ({ onClick }: { onClick: () => void }) => {
  return (
    <svg
      onClick={() => onClick()}
      className="arrow right__arrow"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.76 8.24L27.52 24L11.76 39.76L16 44L36 24L16 4L11.76 8.24Z"
        fill="#EAEAEA"
      />
    </svg>
  )
}
