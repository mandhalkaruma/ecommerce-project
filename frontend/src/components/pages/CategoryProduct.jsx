import { useEffect, useState } from 'react'
import FilterSidebar from './FilterSidebar';
import ProductGrid from './ProductGrid';
import { getAllProducts } from './productApi';
import { useParams } from "react-router-dom";

const CategoryProduct = () => {

    const [openFilter, setOpenFilter] = useState(null);
    const [products, setProducts] = useState([]);

    const { category } = useParams();


    const toggleFilter = (filterName) => {
        setOpenFilter(openFilter === filterName ? null : filterName);
    };

    const fetchProducts = async () => {
        try {
            const data = await getAllProducts(category);
            console.log(data);
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [category])

    return (
        <div className="flex w-full px-10 gap-6">

            <div className='w-[20%]'>
                {/* LEFT FILTER PANEL */}
                <FilterSidebar openFilter={openFilter} toggleFilter={toggleFilter} />
            </div>

            <div className='w-[80%]'>
                {/* RIGHT PRODUCT GRID */}
                <ProductGrid products={products}/>
            </div>


        </div>

    )
}

export default CategoryProduct
