import { useFetch } from "./useFetch";

export default function Fetch() {
    const { loading, error, data } = useFetch("http://localhost:3000/pizzas", [])
    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>{error}</div>
    }
    return <>
        {data.map(({ id, name, price }) => {
            return (<div key={id}>
                <div>{id}</div>
                <div>{name}</div>
                <div>{price}</div>
            </div>)
        })}
    </>
}