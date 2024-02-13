import React, { useRef } from "react";
import { useField } from "formik";

const FileUploadField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const inputRef = useRef(null);

  const handleFileChange = (event) => {
    const files = event.target.files;

    if (files.length > 0) {
      // Convertir los archivos seleccionados a un array de objetos con información relevante
      const fileObjects = Array.from(files).map((file) => ({
        file,
        name: file.name,
        type: file.type,
        size: file.size,
      }));

      helpers.setValue(fileObjects); // Asignar el array de objetos al campo
      helpers.setError(undefined);
    } else {
      helpers.setValue([]);
      helpers.setError("Debe adjuntar al menos un archivo");
    }

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
        style={{ color: "white" }}
        multiple // Para permitir la selección de múltiples archivos
      />
      {meta.error && meta.touched && (
        <div style={{ color: "red", marginTop: "0.5rem" }}>{meta.error}</div>
      )}
    </div>
  );
};

export default FileUploadField;
