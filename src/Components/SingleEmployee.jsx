import { useParams } from "react-router-dom";
import useFetch from "../CustomHooks/UseFetch";
import './single.css'

const SingleEmployee = () => {
    const {id} = useParams()
    const {displayData,loading,error }= useFetch("http://localhost:8000/employees/"+id)

    return <div>

    <h1>Employee Information</h1>

    {error&& <div>{error}</div> }
    {loading&& <h1>loader...</h1> }

    {displayData && (
        <div className="single">
        <h2>Employee Details</h2>
        <ul>
            <li><strong>ID:</strong> {displayData.id}</li>
            <li><strong>Name:</strong> {displayData.name}</li>    
            <li><strong>Company:</strong> {displayData.company}</li>
            <li><strong>Position:</strong> {displayData.position}</li>
        </ul>
      
    </div>
      )}
    </div>
}
 
export default SingleEmployee;
