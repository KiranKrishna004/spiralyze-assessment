import { ToolTipButton } from "../../utils/ui/TooltipButton"
import "./styles.css"
export const WeOrganizeSection = () => {
  const oraganizeItems = [
    "Needs Assessment",
    "Treatment Planning & Placement",
    "Transportation & Logistics",
    "Insurance Advocacy",
    "Employment Advocacy",
    "Aftercare Planning",
  ]

  return (
    <div className="organize-section">
      <h2>
        <span>WE </span>
        CAN ORGANIZE EVERYTHING
      </h2>
      <div className="organize-section__textcontainer">
        <span className="tab-hide organize-section__intervention">
          Interventions
        </span>
        <span className="tab-hide organize-section__intervention__subtext">
          &nbsp; should focus on older adult’s desire for connectedness,
          participation and independence.
        </span>
        <br />
        <br className="break" />
        <br className="break" />
        <br className="break" />
        Loneliness and social isolation are growing public health concerns in
        our aging society. Whilst these experiences occur across the life span,
        50% of individuals aged over 60 are at risk of social isolation and
        one-third will experience some degree of loneliness later in life. It is
        vital to reduce loneliness and social isolation among older adults.
        <br />
        The methodology framework proposed by Asked and O’Malley and further
        developed by Levac, et al. was used to guide the scoping review process.
        A total of 33 reviews met the inclusion criteria, evaluating a range of
        interventions targeted at older people residing in the community or
        institutionalised settings.
      </div>
      <div className="organize-section__buttons">
        {oraganizeItems.map((item, index) => (
          <ToolTipButton buttonText={item} key={`${item}-${index}`} />
        ))}
      </div>
    </div>
  )
}
