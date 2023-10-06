import KitButton from "./kitButton"


export default function Kit({id, title, price, noButton=false}){
    console.log("PARAMS=>", id, title, price)
    

    return(<>
            <span className="mx-auto">
            <div>{title}</div>
            <div>$ {price}</div>
        
            { !noButton &&  
            <KitButton id={id}  noButton />
            
             }
            
            </span>
           </>
            )
            }