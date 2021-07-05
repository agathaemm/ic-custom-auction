import Bid from "./Bid";

class Car {

    /**
     * Car id
     * 
     * @var string
     */
    id?: string;

    /**
     * Car make name
     * 
     * @var string
     */
    make?: string;

    /**
     * Car model name
     * 
     * @var string
     */
    model?: string;

    /**
     * Car year made at
     * 
     * @var number
     */
    year?: number;

    /**
     * Car model version
     * 
     * @var string
     */
    version?: string;

    /**
     * Car lifetime 
     * 
     * @var number
     */
    km?: number;

    /**
     * Car remainingTime for bids
     * 
     * @var number
     */
    remainingTime?: number;

    /**
     * Car image url
     * 
     * @var string
     */
    imageUrl?: string;

    /**
     * All car bids
     * 
     * @var Bid[]
     */
    bids?: Bid[]

    /**
     * Constructor method
     *
     * @param params
     */
    constructor({ bids, ...params}) {
        Object.assign(this, params)
        this.bids = bids.map((bid) => new Bid(bid))
    }

    /**
     * Get last offer for the car
     *
     * @returns number
     */
    lastOffer(): number {
        return this.bids?.map(bid => bid.amount).sort(
            (a: any, b: any) => b - a
        )?.[0] ?? 0;
    }

    /**
     * Calculate next offer to car
     *
     * @returns number
     */
    nextOffer(): number {
        return this.lastOffer() + 250;
    }
}

export default Car;
