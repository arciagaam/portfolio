import React, { useState } from 'react'

type TProject = {
    name: string;
    background: string;
}

const _PROJECTS: TProject[] = [
    {
        name: 'Savvy Bytes',
        background: 'savvybytes.png'
    },
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
    const [hoveredProject, setHoveredProject] = useState<TProject>(_PROJECTS[0])

    return (
        <div className="flex relative h-screen text-off-white !bg-cover" style={{ background: `url(images/${hoveredProject.background})` }}>

            <div className="flex flex-col items-start px-28 py-14 gap-5 w-full bg-gradient-to-r from-background from-[27%] to-background/0 to-60%">
                <h2 className='text-6xl font-mograch text-accent'>Projects</h2>
                <div className="flex flex-col items-start gap-4">
                    {
                        _PROJECTS.map((project, index) => <ProjectButton key={index} project={project} setHoveredProject={setHoveredProject} hoveredProject={hoveredProject} />)
                    }
                </div>
            </div>

        </div>
    )
}

const ProjectButton = ({ project, setHoveredProject, hoveredProject }: { project: TProject, setHoveredProject: React.Dispatch<React.SetStateAction<TProject>>, hoveredProject: TProject }) => {
    return (
        <button onMouseEnter={() => setHoveredProject(project)} className={`${project.name == hoveredProject.name ? 'text-accent' : ''} flex items-center text-2xl hover:text-accent transition-all`}>
            {project.name}
        </button>
    )
}

export { ProjectsSection }