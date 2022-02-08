import Card from "./module/Card";
import colorData from "../data/color";

export default function ContentCard({ categories }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-10 mt-5 px-6 sm:px-0">
      {categories && categories !== "all"
        ? (colorData.data || []).map(
            (data) =>
              data.categories === categories && (
                <Card
                  key={data.name}
                  name={data.name}
                  image={data.image}
                  liked={data.liked}
                  colors={data.colors}
                />
              )
          )
        : (colorData.data || []).map((data) => (
            <Card
              key={data.name}
              name={data.name}
              image={data.image}
              liked={data.liked}
              colors={data.colors}
            />
          ))}
    </div>
  );
}
