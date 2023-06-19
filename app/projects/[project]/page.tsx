import { getProject } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className="max-w-3xl mx-auto py-5">
      <header className="flex items-center justify-center">
        <h1
          className="text-5xl font-extrabold drop-shadow 
            bg-gradient-to-r from-blue-500 via-lime-500 to-green-700 bg-clip-text text-transparent"
        >
          {project.name}
        </h1>
        {project.url && (
          <a
            href={project.url}
            title="View Project"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-blue-500 hover:text-blue-100 transition"
          >
            View Project
          </a>
        )}
      </header>
      {project.image ? (
        <Image
          src={project.image}
          alt={project.name}
          width={1920}
          height={1080}
          className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
        />
      ) : (
        <div className="flex items-center justify-center mt-10 h-96 bg-gray-200 rounded-lg">
          No image available
        </div>
      )}
      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project.content} />
      </div>
    </div>
  );
}
