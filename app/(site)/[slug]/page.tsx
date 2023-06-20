import { getPage } from "@/sanity/sanity-utils";
import page from "@/sanity/schemas/page";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return(
    <div>
        <h1 className="text-5xl font-extrabold drop-shadow bg-gradient-to-r from-blue-500 via-lime-500 to-green-700 bg-clip-text text-transparent">
            {page.title}
        </h1>
        <div>
            <PortableText value={page.content} />
        </div>
    </div>
  )
}
