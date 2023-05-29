// ObjectForm.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ObjectData, updateObject } from "../redux/actions";
import "../App.css";
interface ObjectFormProps {
  object: ObjectData;
}

const ObjectForm: React.FC<ObjectFormProps> = ({ object }) => {
  const [name, setName] = useState(object.name);
  const [age, setAge] = useState(object.age);
  const dispatch = useDispatch();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedObject: ObjectData = {
      ...object,
      name,
      age,
    };

    dispatch(updateObject(updatedObject));
    setAge(1);
    setName("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default ObjectForm;
