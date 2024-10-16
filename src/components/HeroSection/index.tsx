import { useState } from "react"
import { CustomInputField } from "../../utils/ui/CustomInputField"
import { CustomSelectField } from "../../utils/ui/CustomSelectField"
import { PrimaryCTA } from "../../utils/ui/PrimaryCTA"
import { Navbar } from "../Navbar"
import "./styles.css"

export const HeroSection = () => {
  const [page, setPage] = useState("/")

  return (
    <div className="container">
      <Navbar setPage={setPage} page={page} />
      <div className="herosection">
        <div className="herosection__left">
          <h1>
            <span>
              GET AN <br />
            </span>
            INTERVENTION
          </h1>
          <p className="herosection__subtext">
            Showing greater respect to older adults can be done{" "}
            <br className="tab-break" />
            <span>in several</span> ways : <br className="break" />
            acknowledging and putting to use the talents and skills of older
            adults; creating intergenerational initiatives; and allowing older
            adults to stay active and independent <br className="tab-break" />
            for as long as possible.
          </p>
        </div>
        <div className="herosection__right">
          <p className="herosection__right_contact">Contact Us</p>
          <form>
            <div className="herosection__right__fields">
              <CustomInputField label="First Name" />
              <CustomInputField label="Last Name" />

              <CustomInputField label="Business Email" />
              <CustomInputField label="Company" />
              <CustomSelectField />
            </div>
            <div className="submit-button">
              <PrimaryCTA buttonText="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
