const HTMLSnippet = `
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <h1>Hello world!</h1>    
    </body>
</html>
`

const CSSSnippet = `
/* nothing much to see here */

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
  
html, body {
    background-color: #0e0e0e;
}
`

const JSSnippet = `
const button = document.querySelector('#myButton');

button.addEventListener('click', () => {
    console.log('Hello World!');
    alert('Hello World!);
});
`

const TSSnippet = `
function addNumbers(a: number, b: number): number {
    return a + b;
}

const sum: number = addNumbers(6, 9);
console.log('Sum of the two numbers is: ' + sum);
`

export const _techStack = [
    {
        label: 'HTML',
        language: 'html',
        snippet: HTMLSnippet,
        extension: 'html'
    },
    {
        label: 'CSS',
        language: 'css',
        snippet: CSSSnippet,
        extension: 'css'
    },
    {
        label: 'JavaScript',
        language: 'js',
        snippet: JSSnippet,
        extension: 'js'
    },
    {
        label: 'TypeScript',
        language: 'ts',
        snippet: TSSnippet,
        extension: 'ts'
    },
    {
        label: 'Node.js',
        language: 'js',
        snippet: '',
        extension: 'js'
    },
    {
        label: 'Express.js',
        language: 'js',
        snippet: '',
        extension: 'js'
    },
    {
        label: 'React.js',
        language: 'ts',
        snippet: '',
        extension: 'tsx'
    },
    {
        label: 'React Native',
        language: 'ts',
        snippet: '',
        extension: 'tsx'
    },
    {
        label: 'PHP',
        language: 'php',
        snippet: '',
        extension: 'php'
    },
    {
        label: 'Laravel',
        language: 'php',
        snippet: '',
        extension: 'php'
    },
    {
        label: 'SQL',
        language: 'sql',
        snippet: '',
        extension: 'sql'
    },
    {
        label: 'NoSQL',
        language: 'mongodb',
        snippet: '',
        extension: 'sql'
    },
]


