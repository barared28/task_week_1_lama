import { useParams } from 'react-router-dom';
import ProductDetail from '../Components/ProductDetail';

function ProductPage() {
    const {id} = useParams();
    console.log(id);
    return (
        <>
            { id ? <ProductDetail index={id}/> : null }
        </>
    )
}

export default ProductPage
