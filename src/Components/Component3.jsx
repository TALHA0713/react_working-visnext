import DisplayData from "./Component2";
import useFetch from "../CustomHooks/UseFetch";

const Component3 = () => {
    const {displayData,loading,error }= useFetch("http://localhost:8000/employees")
    return <div>
    <h1>Employees Information</h1>
    {error&& <div>{error}</div> }
    {loading&& <h1>loader...</h1> }
    <div className="card-container">
       
      { displayData &&displayData.map((employee) => (
        <DisplayData
          key={employee.id}
          id={employee.id}
          name={employee.name}
          company={employee.company}
          position={employee.position}
        />
      ))}
    </div>
  </div>
}
 
export default Component3;