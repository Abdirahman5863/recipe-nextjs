import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RecipeList({ recipeList }) {
//   console.log(recipeList);
  return (
    <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
      <h1 className="font-[600] text-[25px] mt-8 mb-12 text-blue-700 leading-4 uppercase">
        Recipes
      </h1>
      <Link href="/">GO HOME</Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipeList.map((recipe) => (
          <Link href={`recipe-list/${recipe.id}`} key={recipe.id}>
            <Card>
              <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all ">
                <div
                  key={recipe.id}
                  className="aspect-w-16 aspect-h-8 w-full lg:h-80"
                >
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="h-full w-full object-top object-cover"
                  />
             
                </div>
                <div className="pt-6">
                    <h3 className="font-[600] text-black">
                      {recipe.name}
                    </h3>
                    <div className="flex flex-wrap items-center justify-between mt-4">
                        <p>Ratings:{recipe.rating}</p>
                        <div>
                            <p className="font-bold">{recipe.cuisine}</p>
                        </div>

                    </div>
                  </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
