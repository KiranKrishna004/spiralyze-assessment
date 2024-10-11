import { CustomInputField } from "../CustomInputField"
import { CustomSelectField } from "../CustomSelectField"
import { PrimaryCTA } from "../PrimaryCTA"
import "./styles.css"

export const HeroSection = () => {
  return (
    <div className="herosection">
      <div className="herosection__left">
        <h1>
          <span>
            GET AN <br />
          </span>
          INTERVENTION
        </h1>
        <p className="herosection__subtext">
          Showing greater respect to older adults can be done in several ways :
          acknowledging and putting to use the talents and skills of older
          adults; creating intergenerational initiatives; and allowing older
          adults to stay active and independent for as long as possible.
        </p>
      </div>
      <div className="herosection__right">
        <p className="herosection__right_contact">Contact Us</p>
        <form>
          <div>
            <CustomInputField label="First Name" />
            <CustomInputField label="Second Name" />
          </div>

          <div>
            <CustomInputField label="Business Email" />
            <CustomInputField label="Company" />
          </div>
          <CustomSelectField />
          <div style={{ marginTop: "36px" }}>
            <PrimaryCTA buttonText="Submit" />
          </div>
        </form>
      </div>
    </div>
  )
}
