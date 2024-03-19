import { useFetch } from "./useFetch";
import pubsub from "./pubsub";
/*function eventCarrito(pizza){
    return new CustomEvent("carrito",{
        detail:{...pizza},
        composed:true,
        bubbles:true
    })
    
}*/

export default function Fetch() {
    const { loading, error, data } = useFetch("http://localhost:3000/pizzas", [])
    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>{error}</div>
    }

    function handlerClick(ev){
        ev.stopPropagation();

        const node = ev.nativeEvent.composedPath()
            .find(n=>n.dataset && 'id' in n.dataset)

        if(node){
            const {id}= node.dataset;
            const pizza = data.find(p=>p.id===id)
            pubsub.emit("carrito",{...pizza})
            //pizza && node.dispatchEvent(eventCarrito(pizza))
        }
    }
    return <div onClick={handlerClick}>
        {data.map(({ id, name, price }) => {
            return (<div key={id}>
                <div>{id}</div>
                <div>{name}</div>
                <div>{price}</div>
                <button data-id={id}>comprar</button>
            </div>)
        })}
    </div>
}