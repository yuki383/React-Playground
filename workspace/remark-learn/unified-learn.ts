import unified from "unified";
import stream from "unified-stream";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import html from "rehype-stringify";

const processor = unified().use(markdown).use(remark2rehype).use(html);

process.stdin.pipe(stream(processor)).pipe(process.stdout);
