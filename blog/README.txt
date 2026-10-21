BLOG DATA
=========

Every post lives in this folder as one JSON file. No Markdown is used.

File name = URL slug
--------------------
blog/posts/the-case-for-a-smaller-internet.json
becomes
https://your-site.com/posts/the-case-for-a-smaller-internet/


Post format
-----------
{
  "title": "The case for a smaller internet",
  "date": "2026-10-18",
  "excerpt": "The short version shown on the index and in RSS.",
  "body": [
    { "type": "paragraph", "content": "A paragraph. Inline HTML is allowed." },
    { "type": "heading", "content": "A section heading" },
    { "type": "quote", "content": "A pull quote." },
    { "type": "list", "items": ["First point", "Second point"] }
  ]
}

Rules
-----
- The date must be YYYY-MM-DD.
- The excerpt is required.
- The body must contain at least one block.
- Allowed block types: paragraph, heading, quote, list.
- File names must be lowercase and hyphenated.
- Add a file and the post appears automatically.
- Ten posts per page; pagination recalculates itself.

Images can live in this folder too (for example blog/images/) and be referenced
with an absolute path from the built site.
