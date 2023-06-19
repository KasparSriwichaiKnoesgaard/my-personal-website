import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/types/Page";

const projectFields = `
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  url,
  content
`;
const pagesFields = `
  _id,
  _createdAt,
  title,
  "slug": slug.current
`;

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      ${projectFields}
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      ${projectFields}
    }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      ${pagesFields}
    }`
  );
}
export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      ${pagesFields},
      content
    }`,
    { slug }
  );
}
