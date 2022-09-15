import fs from "fs";
import path from "path";
import matter from "gray-matter";

// const fs = require("fs");
// const path = require("path");
// const matter = require("gray-matter");

export const getProjects = () => {
  let projects: { link: string; [key: string]: any }[] = [];
  const files = fs.readdirSync(path.join("projects"));

  if (files) {
    files.forEach((file: string) => {
      if (path.extname(file) === ".mdx") {
        const source = fs.readFileSync(path.join("projects", `${file}`), {
          encoding: "utf-8",
        });
        const { content, data } = matter(source);
        projects.push({ ...data, link: file.replace(".mdx", "") });
      }
    });
  } else {
    return null;
  }
  return projects;
};

export const getPaths = () => {
  let paths: { params: { slug: string } }[] = [];

  const files = fs.readdirSync(path.join("projects"));
  if (files) {
    files.forEach((file: string) => {
      if (path.extname(file) == ".mdx") {
        paths.push({ params: { slug: file.replace(".mdx", "") } });
      }
    });
    return paths;
  } else {
    return null;
  }
};

export const getFileData = (fileName: string) => {
  const data = fs.readFileSync(path.join("projects", `${fileName}.mdx`), {
    encoding: "utf-8",
  });
  if (data) {
    return data;
  } else {
    return null;
  }
};

// module.exports = { getProjects, getPaths, getFileData };

// export {};
