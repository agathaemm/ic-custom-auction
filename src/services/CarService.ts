import ApiService from "./ApiService";
import Bid from "models/Bid";
import Car from "models/Car";

class CarService {
  /**
   * Add a bid to the car array
   *
   * @param cars
   * @param id
   * @return Car[]
   */
  addBid(cars: Car[], id: string): Car[] {
    // get car by id
    const car = cars.find((card) => card.id === id);
    if (!car) {
      return [...cars];
    }

    // add bid to cars array
    car.bids = [...(car?.bids || []), new Bid({ amount: car?.nextOffer() })];

    // add the new car with the bid
    return [
      ...cars.map((item) => {
        if (item.id === car?.id) {
          return car;
        }
        return item;
      }),
    ];
  }

  /**
   * Fetch all cars from api
   *
   * @return Promise<Car[]>
   */
  list(): Promise<Car[]> {
    return ApiService.get("/auctions.json").then(({ data }) => {
      return data
        .map(function (item) {
          return new Car(item);
        })
        .sort(function (itemA, itemB) {
          return itemA.remainingTime - itemB.remainingTime;
        });
    });
  }
}

export default new CarService();
