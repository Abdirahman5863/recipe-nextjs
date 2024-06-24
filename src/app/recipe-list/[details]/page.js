import RecipeDetailsItem from "@/components/recipe-detailsitem"

async function detailsFetching(currentDetailsId){
    try{
        const apiResponce=await fetch(`https://dummyjson.com/recipes/${currentDetailsId}`)
        const data = await apiResponce.json()
        return data
    }catch(e){
        throw new Error(e)
    }
}

export default async function recipeDetails ({params}){

    console.log(params)
    const recipedetails = await detailsFetching(params?.details)



    return <RecipeDetailsItem recipedetails={recipedetails}/>
}