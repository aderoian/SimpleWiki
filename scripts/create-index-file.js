import * as fs from "fs";
import * as path from 'path';

const source = "./public/docs"

function indexCategory(name, source) {
    const category = {name: name, categories: [], files: []}
    const files = fs.readdirSync(source);
    files.forEach((file) => {
        const newPath = path.join(source, file);
        const stats = fs.statSync(newPath);

        if (stats.isDirectory()) {
            category.categories.push(indexCategory(file, newPath))
        } else if (stats.isFile() && isWikiPage(file)) {
            category.files.push(formatWikiPageName(file))
        }

    })

    return category;
}

function isWikiPage(file) {
    return file.endsWith(".md")
}

function formatWikiPageName(name) {
    return name.replace(".md", '')
}

const content = indexCategory("root", source);
fs.writeFile(path.join(source, "index.json"), JSON.stringify(content), {flag: "w"}, err => {
    if (err) console.error(err)
})



