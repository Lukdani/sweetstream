import { useCallback, useEffect, useState } from "react";

const useForm = (initialData) => {
  const [formData, setFormData] = useState({ ...initialData });
  const [invalidFields, setInvalidFields] = useState([]);

  const updateInvalidFields = useCallback((fields) => {
    setInvalidFields(fields);
  }, []);

  const clearForm = useCallback(() => {
    setFormData({ ...initialData });
  }, [initialData]);

  useEffect(() => {}, [formData]);

  const handleChange = useCallback((e) => {
    const name = e.currentTarget?.name;
    const value = e.target?.value;
    if (name) {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  }, []);

  const handleCheckBoxChange = useCallback((e) => {
    const name = e.target?.name;
    const value = e.target.checked;
    if (name) {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  }, []);

  return {
    formData,
    clearForm,
    handleChange,
    handleCheckBoxChange,
    invalidFields,
    updateInvalidFields,
  };
};

export default useForm;
