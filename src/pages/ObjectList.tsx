// ObjectList.tsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ObjectData, updateObject } from "../redux/actions";
import "../App.css";
import ObjectForm from "./ObjectForm";
interface RootState {
  objects: ObjectData[];
}

const ObjectList: React.FC = () => {
  const objects = useSelector((state: RootState) => state.objects);

  const [selectedObject, setSelectedObject] = useState<ObjectData | null>(null);

  const dispatch = useDispatch();

  const handleObjectClick = (object: ObjectData) => {
    setSelectedObject(null);
    setTimeout(() => {
      setSelectedObject(object);
    });

    console.log(`Clicked on object with ID ${JSON.stringify(object)}`);
  };

  return (
    <div>
      {objects.map((object) => (
        <div
          className="objectList"
          key={object.id}
          onClick={() => handleObjectClick(object)}
        >
          {object.name} - {object.age}
        </div>
      ))}
      {selectedObject ? <ObjectForm object={selectedObject} /> : ""}
    </div>
  );
};

export default ObjectList;
