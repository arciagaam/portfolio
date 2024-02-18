import { useState } from "react";
import { TTechStack } from "../../types/TechStack";
import { _techStack } from "../../data/techStack";
import { VscFiles, VscFolder } from "react-icons/vsc";
import { IoChevronDown } from "react-icons/io5";
import { TechStack } from "./TechStack";
import { CodeSnippet } from "./CodeSnippet";

const CodeEditor = () => {

    const [selectedTechStack, setSelectedTechStack] = useState<TTechStack>();

    const handleSelectTechnology = (label: string) => {
        setSelectedTechStack(_techStack.find((tech) => tech.label == label));
    }

    return (
        <div className="flex flex-col w-[80vw] min-h-[80vh] rounded-md overflow-clip bg-code-editor-light-background fill-off-white text-off-white">

            {/* header */}
            <div className="flex py-3 px-4 text-white gap-2 text-sm bg-code-editor-dark-background border-b border-b-code-editor-border">
                <p>VSC</p>
                <p>Tech Stack - Miguel Arciaga</p>
            </div>


            <div className="flex flex-1">

                {/* task bar */}
                <div className="flex flex-1 flex-col w-fit bg-code-editor-dark-background border-r border-r-code-editor-border ">

                    <div className="flex border-l-2 border-l-accent w-full p-3">
                        <VscFiles size={24} />
                    </div>
                </div>

                {/* explorer */}
                <div className="flex flex-col flex-1 gap-3 bg-code-editor-dark-background py-3 min-w-[293px] border-r border-r-code-editor-border">
                    <p className='text-sm px-7'>Explorer</p>

                    <div className="text-sm flex flex-col gap-2">

                        <div className="flex items-center gap-2 px-1">
                            <IoChevronDown size={14} />
                            <div className="flex gap-1 items-center">
                                <VscFolder />
                                {/* <VscFolderOpened/> */}
                                tech-stack
                            </div>
                        </div>

                        <div className="flex flex-col items-start ">
                            {
                                _techStack.map((technology, index) => <TechStack key={index} selectedTech={selectedTechStack?.label} technology={technology} handleSelectTechnology={handleSelectTechnology} />)
                            }
                        </div>

                    </div>
                </div>

                <div className="flex flex-col w-full text-xs">
                    {
                        selectedTechStack && 
                        <>
                            <div className="flex items-center w-full min-h-9 px-5 bg-code-editor-dark-background border-b border-code-editor-border">
                                
                            <p>index.{selectedTechStack?.extension}</p>
                                
                            </div>

                            <div className="flex items-center w-full min-h-9 px-5 bg-code-editor-light-background border-b border-code-editor-border">
                                <p>tech-stack {'>'} {selectedTechStack?.label}</p>
                            </div>

                            <CodeSnippet codeSnippet={selectedTechStack.snippet} language={selectedTechStack.language} />
                        </>

                    }
                </div>

            </div>

        </div>
    )
}

export {CodeEditor}