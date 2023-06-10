import { useState } from "react";
import apartmentsService from "../services/ApartmentsService";

export default function HomePage() {
    const [apartments] = useState( apartmentsService.getAll() );

    return (
        <div>
            Hello world !
        </div>
    );
};