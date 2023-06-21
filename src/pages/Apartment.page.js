import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import apartmentsService from "../services/ApartmentsService";
import CarrouselComponent from "../components/Carrousel/Carrousel";
import ApartmentPresentationComponent from "../modules/ApartmentPresentation/ApartmentPresentation";
import ApartmentDetailsComponent from "../modules/ApartmentDetails/ApartmentDetails";

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
                        <CarrouselComponent 
                            images={apartment.pictures} 
                        />
                        <ApartmentPresentationComponent 
                            data={apartment} 
                        />
                        <ApartmentDetailsComponent 
                            description={apartment.description} 
                            equipments={apartment.equipments} 
                        />
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