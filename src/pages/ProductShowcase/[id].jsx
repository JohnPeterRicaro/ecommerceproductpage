import { useRouter } from "next/router"

const ProductShowcase = () => {
    const router = useRouter()
    const shoeId = router.query.id

    console.log(shoeId)

    return(
        <h1>    
            product showcase {shoeId}
        </h1>
    )
}

export default ProductShowcase