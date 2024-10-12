import { Dispatch, SetStateAction } from "react"
import "./styles.css"

export const PlayButton = ({
  setIsShow,
}: {
  setIsShow: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <div className="relative">
      <button className="play-button" onClick={() => setIsShow(true)}>
        <div className="outer-circle">
          <div className="inner-circle">
            <svg
              width="40"
              height="45"
              viewBox="0 0 40 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.6192 19.3543C40.2859 20.8939 40.2859 24.7429 37.6192 26.2825L6.4939 44.2528C3.82723 45.7924 0.493896 43.8679 0.493896 40.7887L0.493898 4.84819C0.493898 1.76899 3.82723 -0.155511 6.4939 1.38409L37.6192 19.3543Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </button>
    </div>
  )
}
