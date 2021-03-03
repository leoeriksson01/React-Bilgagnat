import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CarContext } from '../components/contexts/CarContext';
import { mdiMapMarker } from '@mdi/js';
import Icon from '@mdi/react';

export default function Car() {
    const { findOne } = useContext(CarContext);
    const { vin } = useParams(); // The :vin query parameter from the route
    const car = findOne('vin', vin);

    // TODO: check if item is already in cart

    const Row = styled.div`
        display: flex;
        flex-direction: row;
    `;

    const Col = styled.div`
        display: flex;
        flex-direction: column;
    `;

    const Wrapper = styled(Row)`
        margin: 100px 0 0 0;
    `;

    const Container = styled.article`
        max-width: 1200px;
        margin: auto;
        color: rgb(50, 50, 50);
    `;

    const Preview = styled.img`
        object-fit: cover;
        height: auto;
        width: 60%;
    `;

    const Sidebar = styled(Col)`
        margin-left: 25px;
        flex-grow: 1;
    `;

    const Header = styled.h2`
        font-weight: bold;
        color: rgb(25, 25, 25);
    `;

    const Mileage = styled.h5`
        margin: 0;
    `;
    
    const CityIcon = styled.svg`
        width: 1.25rem;
        height: 1.25rem;
    `;

    const CityWrapper = styled(Row)`
        align-items: center;
        margin-top: 5px;
    `;

    const City = styled.h5`
        margin: 0 0 0 2px;
    `;

    const Description = styled.p`
        margin: 15px 0;
        color: black;
    `;

    const Price = styled.h5`
        font-weight: bold;
        color: rgb(25, 25, 25);
        margin-top: 20px;
    `;

    const Buy = styled.button`
        background-color: rgb(46, 133, 110);
        border: 0;
        color: white;
        border-radius: 25px;
        padding: 10px;
        font-size: 1.25rem;
        font-weight: bold;
    `;

    if (!car) {
        return null;
    }

    return (
        <Wrapper>
            <Container as={Row}>
                <Preview src={`/assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`} loading="lazy" />
                <Sidebar>
                    <Header>{car.make} {car.model} {car.year}</Header>
                        <Mileage>{Number(car.miles).toLocaleString()} miles</Mileage>
                        <CityWrapper>
                            <CityIcon as={Icon} path={mdiMapMarker} />
                            <City>{car.city}</City>   
                        </CityWrapper>
                    <Description>{car.descLong}</Description>
                    <Price>Price: ${Number(car.price).toLocaleString()}</Price>
                    <Buy>Add to cart</Buy>
                </Sidebar>
            </Container>
        </Wrapper>
    );
}
