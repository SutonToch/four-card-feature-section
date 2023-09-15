import Card from "./components/Card.jsx"
import Attribution from "./components/Attribution.jsx"
import supervisor_icon from "./assets/icon-supervisor.svg"
import team_builder_icon from "./assets/icon-team-builder.svg"
import karma_icon from "./assets/icon-karma.svg"
import calculator_icon from "./assets/icon-calculator.svg"

import "./css/App.css"

export default function App() {
  return (
    <main>
      <div className="title-container">
        <h1>Reliable, efficient delivery</h1>
        <h2>Powered by Technology</h2>
        <p>
          Our Artificial Intelligence powered tools use millions of project data points 
          to ensure that your project is successful
        </p>
      </div>
      <div className="card-container">
        <Card 
          title="Supervisor"
          description="Monitors activity to identify project roadblocks"
          icon={supervisor_icon}
          alt="magnifying glass"
          border={{ borderColor: "hsl(180, 62%, 55%)" }}
        />
        <div className="col">
          <Card 
            title="Team Builder"
            description="Scans our talent network to create the optimal team for your project"
            icon={team_builder_icon}
            alt="small house in front of webpage"
            border={{ borderColor: "hsl(0, 78%, 62%)" }}
          />
          <Card 
            title="Karma"
            description="Regularly evaluates our talent to ensure quality"
            icon={karma_icon}
            alt="lightbulb"
            border={{ borderColor: "hsl(34, 97%, 64%)" }}
          />
        </div>
        <Card 
          title="Calculator"
          description="Uses data from past projects to provide better delivery estimates"
          icon={calculator_icon}
          alt="monitor"
          border={{ borderColor: "hsl(212, 86%, 64%)" }}
        />
      </div>
      <Attribution />
    </main>
  )
}
