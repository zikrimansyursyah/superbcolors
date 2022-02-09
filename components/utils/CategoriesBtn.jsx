import Link from "next/link";

export default function CategoriesBtn({ name }) {
  return (
    <Link href={`/category/${name}`}>
      <a className="bg-white border border-teal-400 px-5 py-2 rounded-full w-fit capitalize hover:shadow-md">
        {name}
      </a>
    </Link>
  );
}
