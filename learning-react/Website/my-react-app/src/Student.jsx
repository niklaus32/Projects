// props = read-only properties that are shared between components. 
//         A parent component can send data to a child compnent.
//         <Component key=value />
import PropTypes from 'prop-types'

function Student(props){
    return(
        <div className="student">
            <p>Props</p>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )

}
//returns error in console if prop type is incorrect
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}
export default Student