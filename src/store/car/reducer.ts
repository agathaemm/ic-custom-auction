import { CarService } from "services";
import * as Types from "./types";
import Car from "models/Car";

interface CarState {
  loading: boolean;
  cars: Car[];
}

const INITIAL_STATE: CarState = {
  cars: [],
  loading: false,
};

function reducer(state = INITIAL_STATE, action) {
  const { payload, type } = action;

  switch (type) {
    /**
     * Handle SUCCESS_LOADING_CARS and ERROR_LOADING_CARS action
     *
     */
    case Types.SUCCESS_LOADING_CARS:
    case Types.ERROR_LOADING_CARS:
      return {
        loading: false,
        cars: payload,
      };

    /**
     * Handle ADD_BID action
     *
     */
    case Types.ADD_BID:
      return {
        ...state,
        cars: CarService.addBid(state.cars, payload.id),
      };
    default:
      return { ...state };
  }
}

export default reducer;
