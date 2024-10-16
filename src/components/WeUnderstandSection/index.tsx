import { SecondaryCTA } from "../../utils/ui/SecondaryCTA"
import "./styles.css"

export const WeUnderstandSection = () => {
  return (
    <div className="understand-section">
      <h2>
        <span>WE </span>
        UNDERSTAND
      </h2>
      <div className="understand-section__textcontainer">
        Older adults want to play active and meaningful roles in their lives,
        including as part of a social network, a neighborhood, and a community.
        Service providers and policymakers must consider that a lack of sense of
        purpose can become problematic as people age. Engaging them in leisure
        activities and volunteer work is important.
        <br />
        <br />
        Older adults want to stay active and contribute to society in a
        reciprocal manner (meaning that they want to exchange their services and
        skills with others for the mutual benefit of the neighborhood or
        community). <br className="tab-break" />
        Qualitative and quantitative studies published from 2005 to 2016
        examining the social needs of older adults were eligible for inclusion.{" "}
        <br />
        <p>
          To stimulate social contacts, neighborhood initiatives can be
          developed. Social meeting places, such as pubs and churches can help
          to foster the development of close and peripheral relationships.
        </p>
        <br className="mobile-hide tab-break" />
        <br className="mobile-hide tab-break" />
        <SecondaryCTA buttonText="92% Success Rate" />
      </div>
    </div>
  )
}
