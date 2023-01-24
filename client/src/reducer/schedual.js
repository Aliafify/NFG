import {
  SET_BREAKS,
  DELETE_DAY,
  SET_AVAIL,
  SET_DAY,
  INETIALIZE_SCHEDULE,
  DELETE_BREAK
} from "../actions/schedual";

export const schedual = (state = [], action) => {
  switch (action.type) {
    case INETIALIZE_SCHEDULE:
      return (state = action.schedual);
    case SET_AVAIL:
      return state.map((s) => {
        if (s.index === action.index)
          return {
            ...s,
            avail: { ...s["avail"], [action.subKey]: action.value },
          };
        else return s;
      });

    case SET_BREAKS:
      return state.map((el) => {
        if (el.index === action.index) {
          const s = el;
          s.breaks[action.subKey][action.subIndex] = action.value;
          return s;
        } else {
          return el;
        }
      });
    case DELETE_BREAK:
        return state = state.map(el=>{
            if (el.index === action.index) {
              const s = el;
               s.breaks['from'].pop();
               s.breaks['to'].pop();
              return s;
            }else return el;
        })
    case SET_DAY:
      return (state = [
        ...state,
        {
          index: action.index,
          avail: { from: "", to: "" },
          breaks: { from: [], to: [] },
        },
      ]);
    case DELETE_DAY:
      return state.filter((s) => s.index !== action.index);
    default:
      return state;
  }
};
