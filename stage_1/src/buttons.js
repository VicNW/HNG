import './App.css';

function Buttons(props) {
    console.log(props)
    return (
       <a href={props.link} id={props.id}><button className='buttons'><p>{props.dname}</p></button></a> 
    );
}

export default Buttons