// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-template-blog-template-js": () => import("D:\\gatsby-learn\\sundaypyjamas-blog\\src\\pages\\template\\blog-template.js" /* webpackChunkName: "component---src-pages-template-blog-template-js" */),
  "component---cache-dev-404-page-js": () => import("D:\\gatsby-learn\\sundaypyjamas-blog\\.cache\\dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("D:\\gatsby-learn\\sundaypyjamas-blog\\src\\pages\\404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("D:\\gatsby-learn\\sundaypyjamas-blog\\src\\pages\\index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("D:\\gatsby-learn\\sundaypyjamas-blog\\src\\pages\\page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "D:\\gatsby-learn\\sundaypyjamas-blog\\.cache\\data.json")

