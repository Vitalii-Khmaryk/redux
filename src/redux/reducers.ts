// reducers.ts
import { ObjectData, UpdateObjectAction, UPDATE_OBJECT } from './actions';

interface State {
  objects: ObjectData[];
}

const initialState: State = {
  objects: [
    { id: '1', name: 'Peter', age: 20 },
    { id: '2', name: 'Anna', age: 25 },
    { id: '3', name: 'Oleg', age: 30 },
  ],
};

export function reducer(state = initialState, action: UpdateObjectAction): State {
  switch (action.type) {
    case UPDATE_OBJECT:
      const updatedObjects = state.objects.map((obj) =>
        obj.id === action.payload.id ? action.payload : obj
      );
      return {
        ...state,
        objects: updatedObjects,
      };
    default:
      return state;
  }
}
