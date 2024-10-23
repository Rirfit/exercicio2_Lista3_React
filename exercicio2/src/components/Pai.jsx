function Pai(props){
    return <li>Filho {props.filho}</li>
}
function Filho(){
    const filhos = [1,2,3,4,5,6,7]
    return (
        <>
        <ul>
            {filhos.map((filho) => <Pai filho = {filho}/>)}
        </ul>
        </>
    )
} export  default Filho;