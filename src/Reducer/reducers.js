const intialState = {
  box1: null,
  box2: null,
  box3: null,
  box4: null,
  box5: null,
  box6: null,
  box7: null,
  box8: null,
  box9: null,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "SET_BOX1":
      return {
        ...state,
        box1: action.payload,
      };
    case "SET_BOX2":
      return {
        ...state,
        box2: action.payload,
      };
    case "SET_BOX3":
      return {
        ...state,
        box3: action.payload,
      };
    case "SET_BOX4":
      return {
        ...state,
        box4: action.payload,
      };
    case "SET_BOX5":
      return {
        ...state,
        box5: action.payload,
      };
    case "SET_BOX6":
      return {
        ...state,
        box6: action.payload,
      };
    case "SET_BOX7":
      return {
        ...state,
        box7: action.payload,
      };
    case "SET_BOX8":
      return {
        ...state,
        box8: action.payload,
      };
    case "SET_BOX9":
      return {
        ...state,
        box9: action.payload,
      };
    case "RESET_GAME":
      return {
        ...state,
        box1: null,
        box2: null,
        box3: null,
        box4: null,
        box5: null,
        box6: null,
        box7: null,
        box8: null,
        box9: null,
      };
    default:
      return state;
  }
};

export default reducer;
