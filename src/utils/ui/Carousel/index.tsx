import { useRef, useState } from "react"
import testimonial1 from "../../../assets/Testimonials/testimonial1.png"
import testimonial2 from "../../../assets/Testimonials/testimonial2.png"
import testimonial3 from "../../../assets/Testimonials/testimonial3.png"
import "./styles.css"

const images = [
  {
    url: testimonial1,
    title: "Abbie Harvey",
    alt: "testimonial1 missing",
  },
  {
    url: testimonial2,
    title: "Abbie Harvey",
    alt: "testimonial2 missing",
  },
  {
    url: testimonial3,
    title: "Abbie Harvey",
    alt: "testimonial3 missing",
  },
]

export const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0)
  const touchStartX = useRef(0)

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1
      return index - 1
    })
  }

  const selectedButton = {
    background: "#5BC8AF",
  }

  const unSelectedButton = {
    background: "#EAEAEA",
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchEndX = e.changedTouches[0].clientX
    if (touchStartX.current - touchEndX > 50) {
      showNextImage() // Swipe left
    } else if (touchEndX - touchStartX.current > 50) {
      showPrevImage() // Swipe right
    }
  }

  return (
    <div className="carousel">
      <div className="carousel__section">
        <LeftCarouselArrow onClick={showPrevImage} />

        <div className="carousel__items">
          {images.map((image) => (
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="slider-card"
              key={image.url}
              style={{ translate: `${-100 * imageIndex}%` }}
            >
              <img className="card-img-top" src={image.url} alt="..." />
              <div className="card-body">
                <div>
                  <h5 className="card-title-name">Abbie Harvey</h5>
                  <svg
                    className="card-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="47"
                    viewBox="0 0 60 47"
                    fill="none"
                  >
                    <path
                      d="M19.5804 21.9794C21.9114 22.9931 23.7296 24.5137 25.035 26.5412C26.3403 28.5686 26.993 30.9647 26.993 33.7294C26.993 37.6922 25.7343 40.9176 23.2168 43.4059C20.6993 45.802 17.4825 47 13.5664 47C9.65035 47 6.38695 45.7559 3.77622 43.2676C1.25874 40.7794 0 37.6 0 33.7294C0 31.8863 0.2331 30.0431 0.699301 28.2C1.1655 26.3569 2.19114 23.5922 3.77622 19.9059L11.8881 0H25.7343L19.5804 21.9794ZM52.5874 21.9794C54.9184 22.9931 56.7366 24.5137 58.042 26.5412C59.3473 28.5686 60 30.9647 60 33.7294C60 37.6922 58.7413 40.9176 56.2238 43.4059C53.7063 45.802 50.4895 47 46.5734 47C42.6573 47 39.3939 45.7559 36.7832 43.2676C34.2657 40.7794 33.007 37.6 33.007 33.7294C33.007 31.8863 33.2401 30.0431 33.7063 28.2C34.1725 26.3569 35.1981 23.5922 36.7832 19.9059L44.8951 0H58.7413L52.5874 21.9794Z"
                      fill="#2A7C6B"
                    />
                  </svg>
                </div>
                <p className="card-text">
                  I have been caring for my mom & dad off and on for about 10
                  years now, and I know the importance of me being there for
                  appointments. Older people need attention, love and care that
                  they truly deserve.
                </p>
              </div>
            </div>
          ))}
        </div>
        <RightCarouselArrow onClick={showNextImage} />
      </div>

      <div className="carousel__buttons">
        {images.map((_, index) => (
          <button
            key={index}
            className="carousel__button"
            style={index === imageIndex ? selectedButton : unSelectedButton}
            onClick={() => setImageIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  )
}

const LeftCarouselArrow = ({ onClick }: { onClick: () => void }) => {
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

const RightCarouselArrow = ({ onClick }: { onClick: () => void }) => {
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
