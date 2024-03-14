export default function Array(){
 const data = [1,2,3,4,5,6];
 return(
    <>
        {data.map(v=><div key={v}>{v}</div>)}
    </>
 )
}