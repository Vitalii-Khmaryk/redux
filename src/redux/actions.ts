// actions.ts
export const UPDATE_OBJECT = 'UPDATE_OBJECT';

export interface ObjectData {
  id: string;
  name: string;
  age: number;
}

export interface UpdateObjectAction {
  type: typeof UPDATE_OBJECT;
  payload: ObjectData;
}

export function updateObject(updatedObject: ObjectData): UpdateObjectAction {
  return {
    type: UPDATE_OBJECT,
    payload: updatedObject,
  };
}
