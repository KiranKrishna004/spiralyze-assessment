import img1 from "../../assets/Imagesection/img1.png"
import img2 from "../../assets/Imagesection/img2.png"
import img3 from "../../assets/Imagesection/img3.png"
import "./styles.css"

export const ImageSection = () => {
  return (
    <div className="image-section">
      <img className="image" src={img1} alt="img1 missing" />
      <img className="image" src={img2} alt="img2 missing" />
      <img className="image" src={img3} alt="img3 missing" />
    </div>
  )
}
