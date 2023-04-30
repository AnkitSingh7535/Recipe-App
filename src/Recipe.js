import Styles from './CustomCard'
const Recipe=(props) =>{
    // console.log(props.recipelist.recipe.image)
return <div className={Styles.recipe}>

    <img src={props.recipelist.recipe.image} className={Styles.image}/>
    <h1>{props.recipelist.recipe.label}</h1>
    <h3>{props.recipelist.recipe.calories}k/cal</h3>
</div>

}
export default Recipe