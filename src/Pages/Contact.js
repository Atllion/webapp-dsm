import { useSearchParams } from "react-router-dom";

const Contact = () => {

    const [parametrosSearch, setParametrosSearch] = useSearchParams();

    return (
        <>
            <h2>CONTACTO DE LA SEDE DE {parametrosSearch.get('sede')}</h2>
            <p>Estamos ubicados en la UPNA</p>
        </>
    )
}

export default Contact;