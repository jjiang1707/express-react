Start by running : node server.js

Security Notes: 

The CSP here is to prevent the loading of malicious scripts that may be:

1) injected by developers. For example if they decided to put in a backdoor and connect to a malicious API or inserted script tags that allow them to download malicious scirpts. Segregation of duties is required between the configuration of CSP on server side and the development of the application code.
2) injected by malicious actors by exploiting a code vulnerabily that allows them to embed scripts either in input fields on url

The X-XSS-PROTECTION header enables the XSS protection on browser. The header can be used to instruct the browser to either block suspected XSS attacks or to sanitize the content to prevent the attack from succeeding.

The CORS header only allows certain origins to make requests to the express app. This can be specified at the API level or for the whole app