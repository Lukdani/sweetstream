import Button from "../Button/Button";
import "./GetStartedForm.css";

const inputs = [
  {
    value: "",
    label: "Name/alias",
    name: "name",
    type: "text",
  },
  {
    value: "",
    label: "E-mail",
    name: "email",
    type: "text",
  },
  {
    value: "",
    label: "Phone",
    name: "phone",
    type: "text",
  },
];

const GetStartedForm = () => {
  return (
    <form className="get-started-form">
      <h3 className="py-3">Let's get in touch</h3>
      {inputs.map((inputElement) => (
        <div className="mb-3">
          <label className="form-label" for={inputElement.name}>
            {inputElement.label}
          </label>
          <br />
          <input
            className="form-control"
            id={inputElement.name}
            value={inputElement.value}
            placeholder={inputElement.label}
            type={inputElement.type || "text"}
          />
        </div>
      ))}
      <Button label={"Send"} color="secondary" alt>
        <i className="fas fa-paper-plane me-2"></i>
      </Button>
    </form>
  );
};

export default GetStartedForm;
