import "./Card.css"
const Card=props=>{
const classes= "card "+props.className
return (<div className={classes}>{props.children}</div>)
}
export default Card
// By Using childrens props (props.children) We can add one or multiple elements or our Custom Components Between Opening and closing tag of our any Custom  Components
