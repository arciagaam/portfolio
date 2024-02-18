import { CodeEditor } from '../code-editor/CodeEditor';

const TechStackSection = () => {
    return (
        <div className="flex gap-32 min-h-screen items-center justify-start pl-28">
            <div className="flex flex-col items-end">
                <div className="flex flex-col font-mograch text-accent text-[256px] leading-[80%]">
                    <h2>Tech</h2>
                    <h2>Stack</h2>
                </div>

                <p>-- See what I can use</p>
            </div>



            <CodeEditor />
        </div>
    )
}





export { TechStackSection }