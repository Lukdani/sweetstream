import { useCallback, useState, useRef } from "react";
import useApiGet from "../../utils/useApiGet";
import useApiPost from "../../utils/useApiPost";
import useForm from "../../utils/useForm";
import Button from "../Button/Button";
import "./GetStartedForm.css";
import GetStartedReceipt from "./GetStartedReceipt";

const createRequest = "createContactRequest";
const getRequest = "getContactRequest";

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
  {
    value: false,
    label: (
      <>
        I prefer to be contacted by <strong>e-mail</strong>
      </>
    ),
    name: "preferEmail",
    type: "checkbox",
  },
  {
    value: false,
    label: (
      <>
        I prefer to be contacted by <strong>phone</strong>
      </>
    ),
    name: "preferPhone",
    type: "checkbox",
  },
];

const GetStartedForm = () => {
  const {
    formData,
    clearForm,
    handleChange,
    handleCheckBoxChange,
    invalidFields,
    updateInvalidFields,
  } = useForm(
    inputs.reduce(
      (prevObject, item) => ({
        ...prevObject,
        [item.name]: item.value,
      }),
      {}
    )
  );
  const [formSubmitted, setFormSubmitted] = useState(null);
  const { postData, data, isLoading, error } = useApiPost({
    url: createRequest,
    body: formData,
  });
  const {
    data: postedRequest,
    fetchData,
    isLoading: isFetchingRequest,
  } = useApiGet({ url: getRequest });

  const [containerHeight, setContainerHeight] = useState(0);
  const containerElement = useRef();

  const setReceipt = useCallback(
    (id) => {
      clearForm();
      setFormSubmitted(true);
      fetchData(`id=${id}`);
    },
    [clearForm, fetchData]
  );

  const handleSubmit = useCallback(() => {
    if (!formData.email && !formData.phone) {
      updateInvalidFields({
        email: "Either e-mail or phone must be provided",
        phone: "Either e-mail or phone must be provided",
      });
      return;
    } else if (
      (formData.preferEmail && !formData.email) ||
      (formData.preferPhone && !formData.phone)
    ) {
      const invalidFieldObject = {};
      if (formData.preferEmail && !formData.email) {
        invalidFieldObject["email"] = "Please provide an e-mail address";
      }
      if (formData.preferPhone && !formData.phone) {
        invalidFieldObject["phone"] = "Please provide a phone number";
      }
      updateInvalidFields({ ...invalidFieldObject });
      return;
    } else {
      updateInvalidFields(null);
    }
    setContainerHeight(containerElement?.current?.clientHeight);
    setFormSubmitted(true);
    postData(setReceipt);
    if (data) {
    }
  }, [
    data,
    formData.email,
    formData.phone,
    formData.preferEmail,
    formData.preferPhone,
    postData,
    setReceipt,
    updateInvalidFields,
  ]);

  return formSubmitted ? (
    <div
      className="secondary-bg get-started-receipt"
      style={{ minHeight: containerHeight }}
    >
      <h4>
        Form submitted <i className="fas fa-thumbs-up"></i>{" "}
      </h4>
      {postedRequest ? <GetStartedReceipt request={postedRequest} /> : null}
      <Button
        label="Write new"
        color="secondary"
        alt
        onClick={() => setFormSubmitted(false)}
      />
    </div>
  ) : (
    <form ref={containerElement} className="get-started-form">
      <h3 className="py-3">
        Let's get in touch <i className="fas fa-comments" />
      </h3>
      {inputs.map((inputElement) => (
        <div key={`get-started-form-${inputElement.name}`} className="mb-3">
          {inputElement.type === "checkbox" ? (
            <div className="form-check">
              <input
                className="form-check-input"
                onChange={handleCheckBoxChange}
                type="checkbox"
                value={inputElement.value}
                id={inputElement.name}
                name={inputElement.name}
              />
              <label className="form-check-label" htmlFor={inputElement.name}>
                {inputElement.label}
              </label>
            </div>
          ) : (
            <>
              <label
                className="form-label custom-form-label"
                htmlFor={inputElement.name}
              >
                {inputElement.label}{" "}
                {invalidFields && invalidFields[inputElement.name] ? (
                  <span className="input-invalid">
                    <i className="fas fa-exclamation-circle me-2"></i>
                    {invalidFields[inputElement.name]}
                  </span>
                ) : null}
              </label>
              <input
                className="form-control"
                onChange={handleChange}
                id={inputElement.name}
                value={formData[inputElement.name]}
                name={inputElement.name}
                placeholder={inputElement.label}
                type={inputElement.type || "text"}
              />
            </>
          )}
        </div>
      ))}
      {error ? <p>{error}</p> : null}
      <Button label={"Send"} color="secondary" alt onClick={handleSubmit}>
        <i className="fas fa-paper-plane me-2"></i>
      </Button>
    </form>
  );
};

export default GetStartedForm;
