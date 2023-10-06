'use client'
import { useRouter } from "next/navigation"

export default function KitButton({id}){
    console.log("BUTTON ID", id)
    const router = useRouter()

    function handleClick(event){
        let e = event
        let id = e.target.id
        console.log("handleClick id",id)
        router.push(`/kits/${id}`)
    }

    return(<><button id={id} onClick={handleClick}>go to kit {id}</button></>)
}