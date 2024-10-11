import "../styles.css"
export const LeftCarouselArrow = ({ onClick }: { onClick: () => void }) => {
  return (
    <svg
      onClick={() => onClick()}
      className="arrow left__arrow"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.24 39.76L20.48 24L36.24 8.24L32 4L12 24L32 44L36.24 39.76Z"
        fill="#EAEAEA"
      />
    </svg>
  )
}
