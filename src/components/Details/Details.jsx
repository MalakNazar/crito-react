import { useParams } from "react-router-dom";





function  Details(){
        let artid=useParams();
        return(
            <>
            <div key={Math.random()}>
                 <h1>test</h1>
                <h1>{artid}</h1>
            </div>
               
           
            </>
           
        )
}

export default Details;