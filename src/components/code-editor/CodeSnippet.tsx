import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeSnippet = ({ codeSnippet, language = 'html' }: { codeSnippet: string, language?: string }) => {

    return (
        <div className="flex flex-col p-2 gap-1">
            <SyntaxHighlighter showLineNumbers lineNumberStyle={{color: '#fafafa20'}} language={language} style={vscDarkPlus} customStyle={{ padding: 0, margin: 0, background: 'transparent' }}>
                {codeSnippet.trim()}
            </SyntaxHighlighter>

        </div>

    )
}


export { CodeSnippet }