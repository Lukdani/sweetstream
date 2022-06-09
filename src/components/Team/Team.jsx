import TeamMember from "./TeamMember";
import PageHeader from "../PageHeader/PageHeader";
import { useEffect, useRef } from "react";
import useApiGet from "../../utils/useApiGet";

const getRequest = "getEmployees";

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

const Team = () => {
  const element = useRef();
  const { data, fetchData } = useApiGet({ url: getRequest });

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <PageHeader item={pageHeaderItems} ctaElement={element} />
      <div
        ref={element}
        style={{ scrollMarginTop: "var(--navbar-height)" }}
        className="container-lg content-container"
      >
        <div className="row">
          <div className="col-12 col-lg-5">
            <h4>The team</h4>
            <p>
              Our team will work closely with your organisation throughout the
              implementation process - from start to end.
            </p>
          </div>
          <div className="col-12">
            <div className="row g-4">
              {data?.map((teamMember) => (
                <div key={teamMember.empName} className="col-12 col-lg-6">
                  <TeamMember teamMember={teamMember} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="content-container"></div>
      </div>
    </>
  );
};

export default Team;
