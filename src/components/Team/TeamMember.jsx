import "./TeamMember.css";

const TeamMember = ({ teamMember }) => {
  return (
    <div
      className="team-member-container"
      itemscope
      itemtype="https://schema.org/Person"
    >
      <div className="row">
        <div className="col-5">
          <i className="fab fa-linkedin team-member-li-icon"></i>
        </div>
        <div className="col-7">
          <h4 itemprop="name">{teamMember.name}</h4>
        </div>

        <div className="col-5">
          <img
            itemprop="image"
            src={`images/staff/${teamMember.imageName}`}
            alt={teamMember.name}
          />
        </div>
        <div className="col-7 team-member-info">
          <h4 className="team-member-info-position">{teamMember.position}</h4>
          <div className="team-member-info-container">
            <p itemprop="jobTitle">{teamMember.description}</p>
            {teamMember.roles?.length > 0 ? (
              <>
                <h5 className="team-member-info-roles">Roles</h5>
                <ul>
                  {teamMember.roles.map((role) => (
                    <li>{role}</li>
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
