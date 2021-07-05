import { CarService } from "services";
import * as Types from "./types";

/**
 * Fetch cars from api
 *
 * @returns
 */
export function loadCars() {
  return async function (dispatch) {
    dispatch({
      type: Types.LOADING,
    });
    try {
      dispatch(successLoadingCars(await CarService.list()));
    } catch (e) {
      dispatch(errorLoadingCars([]));
    }
  };
}

/**
 * Load cars into the state
 *
 * @param payload
 * @returns
 */
export function successLoadingCars(payload) {
  return {
    type: Types.SUCCESS_LOADING_CARS,
    payload,
  };
}

/**
 * Indicates an error on cars loading
 *
 * @param payload
 * @returns
 */
export function errorLoadingCars(payload) {
  return {
    type: Types.ERROR_LOADING_CARS,
    payload,
  };
}

/**
 * Add a bid to the cars array
 *
 * @param id
 * @returns
 */
export function addBid(id: string | undefined) {
  return {
    type: Types.ADD_BID,
    payload: {
      id,
    },
  };
}

const actions = {
  successLoadingCars,
  errorLoadingCars,
  loadCars,
  addBid,
};

export default actions;
