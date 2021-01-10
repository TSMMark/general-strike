# General Strike

This is a proof of concept blog site.

## Adding blog posts

Blog posts are generated automatically based on the markdown files in the [`contents/`](contents) directory.

You can just add new files there!

[Here's the markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/) which shows how to add things like Headers, Links and Images in markdown format.

Just make sure you add the following metadata to the top of the markdown file:

```
---
title: My First Blog Post
slug: hello-world
date: "09-01-2021"
---

Blog post content starts here!
```

 - `title`: The title as it should display on the page.
 - `slug`: The url path segment as it should display in the url.
    - E.g. the slug `hello-world` will be located at `/blog/hello-world`.
 - `date`: Text representing the date you would like to show on the blog post.

## Development

If you want to make changes to the source code it's easy as long as you have a computer with a terminal/shell/command prompt. On windows I recommend using git bash https://gitforwindows.org/

### Onetime setup

1. Install Node.js https://nodejs.org/en/

2. Install git https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

3. Download the source code:

      ```shell
      git clone git@github.com:TSMMark/general-strike.git
      ```

Now you're ready to make updates!

Make whatever changes to the code on a new git branch and create a Pull Request.

Vercel will automatically deploy a preview-build for your branch, which you can see as a "deployment" that you can visit on your Pull Request.
