import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { CarItem } from '../../components'
import { Container } from 'app/components'
import { carActions } from 'store'
import Car from 'models/Car'

import styles from './List.module.css'

function List() {
    const cars: Car[] = useSelector((state: any) => state?.car.cars)
    const dispatch = useDispatch();

    /**
     * Handle car loading
     *
     */
    useEffect(function() {
        dispatch(carActions.loadCars())
    }, [dispatch])

    return (
        <Container>
            <ul className={styles.list}>
                {cars?.map(function(car) {
                    return (
                        <li key={car.id} className={styles.item}>
                            <CarItem car={car} />
                        </li>
                    )
                })}
            </ul>
        </Container>
    )
}

export default List;
