import "./TeamMember.css";

const TeamMember = ({ teamMember }) => {
  return (
    <div
      className="team-member-container"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="row">
        <div className="col-5">
          <a href={teamMember.empLinkedIn} target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin team-member-li-icon"></i>
          </a>
        </div>
        <div className="col-7">
          <h4 itemProp="name">{teamMember.empName}</h4>
        </div>

        <div className="col-5">
          <img
            itemProp="image"
            src={`images/staff/${teamMember.empImageName}`}
            alt={teamMember.empName}
          />
        </div>
        <div className="col-7 team-member-info">
          <h4 className="team-member-info-position">
            {teamMember.titleName}
            {teamMember.empPhd ? " (PhD)" : ""}
          </h4>
          <div className="team-member-info-container">
            <p itemProp="jobTitle">
              {teamMember.empDescription.split("<br/>").map((item) => (
                <span key={item}>
                  {item}
                  <br />
                </span>
              ))}
            </p>
            {teamMember.roles?.length > 0 ? (
              <>
                <h5 className="team-member-info-roles">Roles</h5>
                <ul>
                  {teamMember.roles.map((role, index) => (
                    <li key={teamMember.empName + role + index}>
                      {role.roleName}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
