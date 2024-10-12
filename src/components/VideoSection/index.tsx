import { useEffect, useRef, useState } from "react"
import { PlayButton } from "../../utils/ui/PlayButton"
import "./styles.css"
import bg from "../../assets/Videosection/BG.png"

export const VideoSection = () => {
  const [isShow, setIsShow] = useState(false)
  const videoTexts = [
    {
      title: "Needs Assessment",
      body: "The Advocacy Evaluation Toolkit contains the instruments used to collect data for evaluating the Consumer Voices for Coverage program.",
    },
    {
      title: "Insurance Advocacy",
      body: "We are committed to advocating for appropriate coverage and payment policies.",
    },
    {
      title: "Treatment Planning & Placement",
      body: "Patients can better understand medical procedures, discharge instructions, etc.",
    },
  ]
  return (
    <div className="video-container">
      <VideoPlayer isShow={isShow} setIsShow={setIsShow} />
      <PlayButton setIsShow={setIsShow} />
      <div className="video-container__left">
        <div className="video-texts">
          <h2>
            <span>WATCH </span>
            THE VIDEO
          </h2>

          {videoTexts.map((textObj) => (
            <div className="video-container__textcontainer">
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.6 10.6L1.4 6.4L0 7.8L5.6 13.4L17.6 1.4L16.2 0L5.6 10.6Z"
                  fill="#5BC8AF"
                />
              </svg>
              <div>
                <p>{textObj.title}</p>
                <p>{textObj.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="video-container__right">
        <img src={bg} />
      </div>
    </div>
  )
}

declare global {
  interface Window {
    YT: any
  }
}

const VideoPlayer = ({
  isShow,
  setIsShow,
}: {
  isShow: boolean
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const vidRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef(null)

  useEffect(() => {
    if (isShow && window.YT && !playerRef.current) {
      playerRef.current = new window.YT.Player("youtube-video", {
        events: {
          onReady: () => {
            console.log("Player is ready")
          },
        },
      })
    }
  }, [isShow])

  const handleClose = () => {
    if (playerRef.current) {
      playerRef.current.pauseVideo() // Use YouTube Player API to pause
    }
    setIsShow(false)
  }

  return (
    <div id="yt-popup-overlay" style={isShow ? { display: "block" } : {}}>
      <div id="popup-content">
        <div id="youtube-video-container" ref={vidRef}>
          <iframe
            id="youtube-video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?enablejsapi=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <button id="close-popup" onClick={handleClose}>
          X
        </button>
      </div>
    </div>
  )
}

export default VideoPlayer
