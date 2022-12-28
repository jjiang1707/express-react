Start by running : node server.js

Security Note: The CSP here is to prevent the loading of malicious scripts that may be:

1) injected by developers. For example if they decided to put in a backdoor and connect to a malicious API or inserted script tags that allow them to download malicious scirpts. Segregation of duties is required between the configuration of CSP on server side and the development of the application code.
2) injected by malicious actors by exploiting a code vulnerabily that allows them to embed scripts either in input fields on url