import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Button, Card } from 'app/components'
import { addBid } from 'store/car/actions';
import { FormatService } from 'services';
import styles from './CarItem.module.css'
import Car from 'models/Car';

interface Props {
    car: Car
}

function CarItem({ car }: Props) {
    const [remainingTime, setRemainingTime] = useState<number>(car.remainingTime || 0)
    const dispatch = useDispatch()

    /**
     * Add a bid to cars list
     *
     * @returns 
     */
    function handleAddBid() {
        if (remainingTime <= 0) {
            return alert('Você não pode mais dar lances')
        }
        dispatch(addBid(car.id))
    }

    /**
     * Handle bid timing
     *
     */
    useEffect(function() {
        const interval = setInterval(function() {
            if (remainingTime > 0) {
                setRemainingTime((previousTime) => previousTime - 1000)
            }
        }, 1000)
        return function () {
            clearInterval(interval)
        }
    }, [remainingTime, setRemainingTime])

    return (
        <Card>
            <Card.Image src={car.imageUrl} />
            <Card.Body>
                <div className={styles.grid}>
                    <div className={styles.splitItem}>
                        <div className={styles.dataGroup}>
                            <span className={styles.label}>tempo restante</span>
                            <strong className={styles.redText}>
                                {FormatService.hour(remainingTime)}
                            </strong>
                        </div>
                        <div className={styles.divider} />
                        <div className={styles.dataGroup}>
                            <span className={styles.label}>ultima oferta</span>
                            <strong className={styles.greenText}>
                                {FormatService.money(car.lastOffer())}
                            </strong>
                        </div>
                    </div>
                    <div className={styles.splitItem}>
                        <span className={styles.dataGroup}>
                        {car.make} - {car.model} - {car.version}
                        </span>
                    </div>
                    <div className={styles.splitItem}>
                        <div className={styles.dataGroup}>
                            <span>{car.year}</span>
                        </div>
                        <div className={styles.divider} />
                        <div className={styles.dataGroup}>
                            <span>{car.km} km</span>
                        </div>
                    </div>
                </div>
                <Button onClick={handleAddBid}>Fazer oferta</Button>
            </Card.Body>
        </Card>
    )
}

export default CarItem;
