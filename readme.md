# Notion Blog

This is an example Next.js project that shows Next.js' upcoming SSG (static-site generation) support using Notion's **private** API for a backend.

**Note**: This example uses the experimental SSG hooks only available in the Next.js canary branch! The APIs used within this example will change over time. Since it is using a private API and experimental features, use at your own risk as these things could change at any moment.

**Live Example hosted on Vercel**: 

## Getting Blog Index and Token

To get your blog index value, open Notion and Navigate to the Notion page with the table you created above. While on this page you should be able to get the page id from either:

- the URL, if the URL of your page is https://www.notion.so/chickenkid/HowToDoThat-6f6e322f329145baa0907d2c6ed02df0 then your `BLOG_INDEX_ID` is `6f6e322f329145baa0907d2c6ed02df0`
- the `loadPageChunk` request, if you open your developer console and go to the network tab then reload the page you should see a request for `loadPageChunk` and in the request payload you should see a `pageId` and that is your `BLOG_INDEX_ID`

To get your Notion token, open Notion and look for the `token_v2` cookie.

## Creating Blog Posts

1. In Notion click new on the table to add a new row
2. Fill in the Page name, slug, Date, and Authors
3. At the top of the content area add the content you want to show as a preview (keep this under 2 paragraphs)
4. Add a divider block under your preview content
5. Add the rest of your content under the divider block

## Running Locally

To run the project locally you need to follow steps 1 and 2 of [deploying](#deploy-your-own) and then follow the below steps

1. Install dependencies `yarn`
2. Expose `NOTION_TOKEN` and `BLOG_INDEX_ID` in your environment `export NOTION_TOKEN='<your-token>'`and `export BLOG_INDEX_ID='<your-blog-index-id>'` or `set NOTION_TOKEN="<your-token>" && set BLOG_INDEX_ID="<your-blog-index-id>"` for Windows
3. Run next in development mode `yarn dev`
4. Build and run in production mode `yarn build && yarn start`

