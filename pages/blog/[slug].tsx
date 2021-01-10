import React from 'react'

function BlogPostPage({
  blog: {
    title,
    date,
    content,
  },
}) {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-stars bg-black text-white">
      <h1 className="text-xl lg:text-2xl text-center tracking-widest pt-20 lg:pt-0">
        {title}
      </h1>

      <h2 className="text-lg">
        Posted on {date}
      </h2>

      <div className="max-w-4xl py-8">
        <section dangerouslySetInnerHTML={{ __html: content }}></section>
      </div>
    </main>
  )
}

// pass props to BlogPostPage component
export async function getStaticProps(context) {
  const fs = require('fs')
  const html = require('remark-html')
  const unified = require('unified')
  const markdown = require('remark-parse')
  const matter = require('gray-matter')

  const slug = context.params.slug // get slug from params
  const path = `${process.cwd()}/contents/${slug}.md`

  // read file content and store into rawContent variable
  const rawContent = fs.readFileSync(path, {
    encoding: 'utf-8',
  })

  const { data, content } = matter(rawContent) // pass rawContent to gray-matter to get data and content

  const result = await unified()
    .use(markdown)
    .use(html)
    .process(content) // pass content to process

  return {
    props: {
      blog: {
        ...data,
        content: result.toString(),
      }
    },
  }
}

// generate HTML paths at build time
export async function getStaticPaths(context) {
  const fs = require('fs')

  const path = `${process.cwd()}/contents`
  const files = fs.readdirSync(path, 'utf-8')

  const markdownFileNames = files
    .filter((fn) => fn.endsWith('.md'))
    .map((fn) => fn.replace('.md', ''))

  return {
    paths: markdownFileNames.map((fileName) => {
      return {
        params: {
          slug: fileName,
        },
      }
    }),
    fallback: false,
  }
}

export default BlogPostPage
