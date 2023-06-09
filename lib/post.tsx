import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postDirectory = path.join(process.cwd(), 'blogposts')

export function getSortedPostsData() {
    // Get file names under /posts

    const fileNames = fs.readdirSync(postDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from the file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf-8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        const blogPost: BlogPost = {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
        }

        // Combine the data with the id
        return blogPost

    });
    // Sort posts by date
    return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1);
}

export async function getPostData(id: string) {
    const fullPath = path.join(postDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    // Use gray-matter to parse the post metadata secton
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHTML = processedContent.toString();

    const blogPostWithHTML: BlogPost & { contentHTML: string } = {

        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
        contentHTML,
    }

    // Combine the date with the id
    return blogPostWithHTML
}