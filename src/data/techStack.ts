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

const ExpressJSSnippet = `
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(\`Server is listening on port \${PORT}\`)};
});
`

const ReactTSSnippet = `
import React from 'react';

const GreetUser = ({ name } : {name: string}) => {
    return (
        <div>
            <h1>Hello, {name}!</h1>
        </div>
    );
};

export {GreetUser};
`

const ReactNativeSnippet = `
import React from 'react';

const HelloWorld = () => {
    return (
        <View>
            <Text>Hello World!</Text>
        </View>
    )
  }

export {HelloWorld};
`

const PHPSnippet = `
<?php
    $message = "Hello, World!";
    echo $message;
?>
`

const LaravelSnippet = `
<?php
namespace App\\Http\\Controllers;

use App\\Models\\Post;
use Illuminate\\Http\\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \\Illuminate\\Http\\Response
     */
    public function index()
    {
        // Retrieve all posts
        $posts = Post::all();
        
        // Return view with posts
        return view('posts.index', compact('posts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \\Illuminate\\Http\\Response
     */
    public function create()
    {
        // Return view for creating a new post
        return view('posts.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \\Illuminate\\Http\\Request  $request
     * @return \\Illuminate\\Http\\Response
     */
    public function store(Request $request)
    {
        // Validate incoming request
        $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);
        
        // Create new post
        Post::create($request->all());
        
        // Redirect to index page
        return redirect()->route('posts.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \\App\\Models\\Post  $post
     * @return \\Illuminate\\Http\\Response
     */
    public function show(Post $post)
    {
        // Return view with post
        return view('posts.show', compact('post'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \\App\\Models\\Post  $post
     * @return \\Illuminate\\Http\\Response
     */
    public function edit(Post $post)
    {
        // Return view for editing the post
        return view('posts.edit', compact('post'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \\Illuminate\\Http\\Request  $request
     * @param  \\App\\Models\\Post  $post
     * @return \\Illuminate\\Http\\Response
     */
    public function update(Request $request, Post $post)
    {
        // Validate incoming request
        $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);
        
        // Update post
        $post->update($request->all());
        
        // Redirect to index page
        return redirect()->route('posts.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \\App\\Models\\Post  $post
     * @return \\Illuminate\\Http\\Response
     */
    public function destroy(Post $post)
    {
        // Delete post
        $post->delete();
        
        // Redirect to index page
        return redirect()->route('posts.index');
    }
}
?>
`

const SQLSnippet = `
<?php
try {
    $pdo = new PDO(getenv(dsn), getenv(username), getenv(password));

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "SELECT * FROM users";

    $stmt = $pdo->prepare($sql);

    $stmt->execute();

    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach ($users as $user) {
        echo "Name: {$user['name']}, Email: {$user['email']}<br>";
    }
    
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
`


const MongoDBSnippet = `
const db = client.db();

app.get('/api/posts', async (req, res) => {
  const posts = await db.collection('posts').find().toArray();
  res.json(posts);
});

app.post('/api/posts', async (req, res) => {
  const { title, content } = req.body;
  await db.collection('posts').insertOne({ title, content });
  res.status(201).send();
});
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
    // {
    //     label: 'Node.js',
    //     language: 'js',
    //     snippet: NodeJSSnippet,
    //     extension: 'js'
    // },
    {
        label: 'Express.js',
        language: 'js',
        snippet: ExpressJSSnippet,
        extension: 'js'
    },
    {
        label: 'React.js',
        language: 'ts',
        snippet: ReactTSSnippet,
        extension: 'tsx'
    },
    {
        label: 'React Native',
        language: 'ts',
        snippet: ReactNativeSnippet,
        extension: 'tsx'
    },
    {
        label: 'PHP',
        language: 'php',
        snippet: PHPSnippet,
        extension: 'php'
    },
    {
        label: 'Laravel',
        language: 'php',
        snippet: LaravelSnippet,
        extension: 'php'
    },
    {
        label: 'SQL',
        language: 'php',
        snippet: SQLSnippet,
        extension: 'php'
    },
    {
        label: 'NoSQL',
        language: 'js',
        snippet: MongoDBSnippet,
        extension: 'js'
    },
]


