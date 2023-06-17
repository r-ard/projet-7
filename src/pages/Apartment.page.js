import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import apartmentsService from "../services/ApartmentsService";
import CarrouselComponent from "../components/Carrousel/Carrousel";
import DropdownComponent from "../components/Dropdown/Dropdown";
import RateComponent from "../components/Rate/Rate";
import AvatarComponent from "../components/Avatar/Avatar";

export default function ApartmentPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const [apartment, setApartment] = useState(null);

    useEffect(() => {
        if(!location.state || !location.state.id) return navigate('/');
        apartmentsService.getById(location.state.id).then(setApartment);
    }, [location]);

    return (
        <>
            {
                apartment
                    ?
                (
                    <>
                        <CarrouselComponent images={apartment.pictures} />
                        <AvatarComponent image={apartment.host.picture} />
                        <DropdownComponent
                            title="Test dropdown"
                        >
                            Lorem Ipsum
                        </DropdownComponent>
                    </>
                )
                    :
                (
                    <></>
                )
            }
        </>
    );
};