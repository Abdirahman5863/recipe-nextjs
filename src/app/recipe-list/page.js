import RecipeList from "@/components/recipe-list"

async function recipeFetching(){
    try{
const apiResponce= await fetch('https://dummyjson.com/recipes')
const data = await apiResponce.json()
return data.recipes

    }catch(error){
        throw new Error(error)

    }
}
export default  async function recipe(){

const recipeList =  await recipeFetching()
return <RecipeList recipeList={recipeList}/> 




}