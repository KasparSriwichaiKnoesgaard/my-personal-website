import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div>
      <h1 className="text-7xl font-extrabold">
        Hello, I am{" "}
        <span className="bg-gradient-to-r from-blue-500 via-lime-500 to-green-700 bg-clip-text text-transparent">
          Kaspar
        </span>
      </h1>

      <h2 className="mt-14 font-bold text-gray-700 text-3xl">My Projects</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-2 hover:scale-105 hover:border-blue-500 transition"
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            ) : (
              <div className="flex items-center justify-center h-40 bg-gray-200 rounded-lg">
                No image available
              </div>
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-blue-500 via-lime-500 to-green-700 bg-clip-text text-transparent">
              <div className="w-max">{project.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
