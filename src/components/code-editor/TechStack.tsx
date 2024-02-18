import { TTechStack } from "../../types/TechStack"

const TechStack = ({ technology, selectedTech, handleSelectTechnology }: { technology: TTechStack, selectedTech?: string, handleSelectTechnology: (label: string) => void }) => {
    return (
        <button onClick={() => handleSelectTechnology(technology.label)} className={`flex gap-2 px-2 w-full hover:bg-code-editor-light-background ${technology.label === selectedTech && 'bg-code-editor-light-background'}`}>
            <div className="min-h-full min-w-[1px] w-[1px] bg-off-white/20"></div>
            <div className='py-1 text-xs'>
                {technology.label}
            </div>
        </button>
    )
}

export {TechStack}