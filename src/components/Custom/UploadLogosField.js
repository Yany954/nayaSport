import React, { useRef } from "react";
import { useField } from "formik";

const UploadLogosField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const inputRef = useRef(null);

  const handleFileChange = (event) => {
    const fileList = event.currentTarget.files;
    const fileNames = Array.from(fileList).map((file) => file.name);
    const fileNamesText = fileNames.join(", ");

    inputRef.current.value = fileList.length ? fileNamesText : null;

    field.onChange(event);
  };

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type="file"
        ref={inputRef}
        onChange={(event) => handleFileChange(event)}
        {...field}
        {...props}
        style={{ color: 'white' }}
      />
    </div>
  );
};

export default UploadLogosField;
