import React, { useState } from 'react'

type TProject = {
    name: string;
    background: string;
}

const _PROJECTS: TProject[] = [
    {
        name: 'Cocoon Technologies',
        background: 'cocoontechnologies.png'
    },
    {
        name: 'Verified PH',
        background: 'verified.png'
    },
    {
        name: 'Dan Murdoch Risk Services',
        background: 'dmrs.png'
    },
    {
        name: 'Barangay Management System',
        background: ''
    },
    {
        name: 'Agendas',
        background: ''
    },
];


const ProjectsSection = () => {

    const [background, setBackground] = useState<string>('');

    return (
        <div className="flex relative h-screen text-off-white !bg-cover" style={{ background: `url(images/${background})` }}>

            <div className="flex flex-col items-start px-28 py-14 gap-5 w-full bg-gradient-to-r from-background from-[27%] to-background/0 to-60%">
                <h2 className='text-6xl font-mograch text-accent'>Projects</h2>
                <div className="flex flex-col items-start gap-4">
                    {
                        _PROJECTS.map((project, index) => <ProjectButton key={index} project={project} setBackground={setBackground} />)
                    }
                </div>
            </div>

        </div>
    )
}

const ProjectButton = ({ project, setBackground }: { project: TProject, setBackground: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <button onMouseEnter={() => setBackground(project.background)} className="flex items-center text-2xl hover:text-accent transition-all">
            {project.name}
        </button>
    )
}

export { ProjectsSection }