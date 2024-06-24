export default function RecipeDetailsItem({ recipedetails }) {
  console.log(recipedetails);

  return (
    <div className="w-screen  m-0 p-0  overflow-x-hidden">
      <div className="flex m-10 p-2 gap-10 items-center justify-center ">
        <div className="">
          <img
            src={recipedetails?.image}
            alt={recipedetails?.name}
            className="w-80 h-30"
          />
        </div>
        <div className="flex flex-col  gap-4 flex-wrap">
          <p className="font-[400] text-[24px]">
            <span className="text-blue-400 font-bold pr-1">Name:</span>
            {recipedetails.name}
          </p>
          <p className="font-[400] text-[24px]">
            <span className="text-blue-400 font-bold pr-1">Meal Type:</span>
            {recipedetails.mealType}
          </p>

          <p className="font-[400] text-[24px]">
            <span className="text-blue-400 font-bold pr-1">Difficulty:</span>
            {recipedetails.difficulty}
          </p>

<div>
          <h1 className="font-bold text-blue-400 pb-3 text-[24px]">
            Ingridents
          </h1>

          {recipedetails.ingredients.map((item) => (
            <li key={item.id}>{item}</li>
          ))}
        </div>

        <div>
          <h1 className="font-bold text-blue-400 pb-3 text-[24px]">
            Instructions
          </h1>

          {recipedetails.instructions.map((item) => (
            <li  className="w-[400px]"key={item.id}>{item}</li>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
