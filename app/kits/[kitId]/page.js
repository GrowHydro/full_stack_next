import Kit from "@/app/components/Kit"

export async function generateStaticParams() {
    const res = await fetch('https://dummyjson.com/products?limit=10&select=title,price')
    const data = await res.json()
    console.log("DATA", data.products)
    return data.products.map((product) => ({
      id: product.id.toString(),
    }))
  }


async function getProduct(id){
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await res.json()
    console.log("DATA IN GETPROD", data)
    return data
}

export default async function Page({params}){
    console.log("PRAMS PAGE", params.id)
    const product = await getProduct(params.kitId);

    console.log("{PRODUCT}",product)
    

    return(<><h1><Kit noButton id={product.id} price={product.price}  title={product.title } /></h1></>)
}