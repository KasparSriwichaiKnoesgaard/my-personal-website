import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "u3ww61mn",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-06-17",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;