import Kit from "../components/Kit"



async function getProds(){
    const res = await fetch('https://dummyjson.com/products?limit=10&select=title,price')
    const data = await res.json()
    return data.products
}




async function Products(){
    const prods = await getProds()


    return(<>
            <div className="d-flex flex-column mx-auto">
                <h1 className="mx-auto">Kits</h1>
                { prods.length > 0 && 
                prods.map((kit)=><Kit id={kit.id} title={kit.title} price={kit.price} />)
                }
            </div>
           </>)
}

export default Products;