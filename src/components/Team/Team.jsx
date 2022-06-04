import TeamMember from "./TeamMember";
import PageHeader from "../PageHeader/PageHeader";
import { useRef } from "react";

const pageHeaderItems = {
  title: {
    icon: "people-group",
    text: "Get the best experts",
  },
  sections: [
    {
      title: "Complete team",
      icon: "certificate",
      text: "on your team",
    },
  ],
  imageName: "sg_1.png",
  backgroundImages: ["team.png", "team_2.png"],
  cta: { label: "View team" },
};

const team = [
  {
    name: "Thomas Kulik",
    position: "Solution Architect (PhD)",
    imageName: "thomas_kulik.png",
    description: (
      <p>
        Thomas is a <strong>cyber security </strong>expert. He has extensive
        experience from the wind domain.
        <br />
        <br />
        Thomas assists our clients in all cyber security related topics, making
        sure that zone models are complied with.
      </p>
    ),
    roles: ["Architecture", "Consultant"],
  },
  {
    name: "Brian Vraamark",
    position: "Solution Architect",
    imageName: "brian_vraamark.png",
    description: (
      <p>
        With more than 30 years of experience, Brian Vraamark is considered a
        top capability in the industri.
      </p>
    ),
    roles: ["Architecture", "Consultant"],
  },
  {
    name: "Brian Heilskov",
    position: "Project Management",
    imageName: "brian_heilskov.png",
    description: (
      <p>
        Brian Heilskov is a co-founder of Sweet Geeks A/S and has worked
        tirelessly with the wind industry for the past 10 years
      </p>
    ),
    roles: ["Project management", "Consultant"],
  },
  {
    name: "Lasse Sjørup",
    position: "Senior Consultant",
    imageName: "lasse_sjorup.png",
    description: (
      <p>
        Lasse has 25 years of experience as a developer. Before working with the
        wind industry, Jon worked with transportation planning software.
      </p>
    ),
    roles: ["Development", "Consultant"],
  },
  {
    name: "Jon Børsen",
    position: "Senior Consultant",
    imageName: "jon_borsen.png",
    description: (
      <p>
        Jon Børsen has 20 years of experience as a developer. Before working
        with the wind industry, Jon worked with transportation planning
        software.
      </p>
    ),
    roles: ["Development", "Consultant"],
  },
];

const Team = () => {
  const element = useRef();
  return (
    <>
      <PageHeader item={pageHeaderItems} ctaElement={element} />
      <div
        ref={element}
        style={{ scrollMarginTop: "var(--navbar-height)" }}
        className="container-lg content-container"
      >
        <div className="row g-4">
          {team.map((teamMember) => (
            <div className="col-12 col-lg-6">
              <TeamMember teamMember={teamMember} />
            </div>
          ))}
        </div>
        <div className="content-container"></div>
      </div>
    </>
  );
};

export default Team;
