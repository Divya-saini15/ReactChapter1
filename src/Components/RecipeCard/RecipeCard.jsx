import Description from "./InnerComponents/Description";
import Ingreedents from "./InnerComponents/Ingreedents";
import RecipeName from "./InnerComponents/RecipeName";
import './RecipeCard.css'; 
function RecipeCard() {
  return (
    <>
      <div className="recipe-card">
        <RecipeName />
        <Ingreedents />
        <Description />
      </div>
    </>
  );
}
export default RecipeCard;
