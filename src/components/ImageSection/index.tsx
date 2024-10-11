import "./styles.css"
import img1 from "../../assets/Imagesection/img1.png"
import img2 from "../../assets/Imagesection/img2.png"
import img3 from "../../assets/Imagesection/img3.png"

export const ImageSection = () => {
  return (
    <div className="image-section">
      <img src={img1} alt="img1 missing" height={180} />
      <img src={img2} alt="img2 missing" height={180} />
      <img src={img3} alt="img3 missing" height={180} />
    </div>
  )
}
