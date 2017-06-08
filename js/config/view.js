"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.layout = (props) => `
  <html>
    <head>
      <meta name="viewport" content="width=1000, initial-scale=1.0, maximum-scale=1.0">
      <title>${props.title}</title>
      <link rel="stylesheet" type="text/css" href="/static/antd/dist/antd.css" />
    </head>
    <body>
      <div id="root">${props.content || ''}</div>
      <script src="/static/vendor.js"></script>
      <script src="/static/bundle.js"></script>
      <script>
        window.__INITSTATE__ = ${JSON.stringify(props.__INITSTATE__ || {})}
      </script>
    </body>
  </html>
`;
