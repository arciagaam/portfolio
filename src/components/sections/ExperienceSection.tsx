import React from 'react'
import { GoDotFill } from 'react-icons/go'

type TExperience = {
    year?: number;
    month: string;
    title: string;
    description: string[]; //per paragraph
}

const _experience: TExperience[] = [
    {
        year: 2022,
        month: 'Dec',
        title: 'Capstone Project',
        description: ['This is one of the reasons why I pursued web development. During the development period, I learned a lot about Php and JavaScript since we used CodeIgniter (not a fan) for this but after our final defense, our group decided to re-develop the system using Laravel.']
    },

    {
        year: 2023,
        month: 'Jan',
        title: 'Started Freelancing',
        description: ['A friend of a friend offered me to develop a Barangay Management System. I introduced my self to their team and accepted their offer.']
    },

    {
        month: 'Jan',
        title: 'Cocoon is born',
        description: ['I wanted to provide experience and opportunities to my friends, so I told them about this idea about creating a web development agency.', 'You can check us out at https://cocoontech.dev']
    },

    {
        month: 'Jun',
        title: 'Internship 1',
        description: ['I was accepted at Highly Succeed Inc. as a web developer. I was training for almost a month and a half before I got my first real world task (I was ready to rule the world) I was tasked to revamp the front-end of one of the projects  (I signed an nda, I cannot tell what the project was) that they handle. Then suddenly it’s time to end my Internship with them.']
    },

    {
        month: 'Sep',
        title: 'Internship 2',
        description: ['Just kidding, I did not end my Internship with Highly Succeed Inc., I continued my Internship 2 with them since I liked the workload during the first internship. (things are about to get real) Then I was appointed as the Intern Lead of the Web Development Department. With that, I was given a lot of tasks, from monitoring other interns, front-end projects, back-end projects, you name it. It was a good experience though, I felt like I was an employed full-stack developer and I learned a lot from them.']
    },

    {
        year: 2024,
        month: 'Feb',
        title: 'Officially Unemployed',
        description: ['I recently graduated, my experience throughout the years have shaped me to face the reality of the world.']
    },
]

const ExperienceSection = () => {
    return (
        <div className="flex flex-col gap-5 px-28">
            <h2 className='text-6xl font-mograch text-accent'>Through the Years</h2>
            <div className="flex flex-col gap-7">
                {
                    _experience.map((experience, index) => <Experience key={index} experience={experience} />)
                }
            </div>
        </div>
    )
}

const Experience = ({ experience }: { experience: TExperience }) => {
    return (
        <div className="flex gap-2 items-start fill-off-white pl-5">
            <div className="flex gap-2 items-center justify-end">
                <div className="grid grid-cols-2 gap-5 w-28 text-2xl">
                    <p>{experience.year}</p>
                    <p>{experience.month}</p>
                </div>
                <div className="min-h-[2px] h-[2px] w-20 bg-off-white"></div>
                <GoDotFill size={16} />
            </div>

            <div className="flex flex-col gap-2">
                <h3 className='text-2xl font-medium'>{experience.title}</h3>
                {experience.description.map((description, index) => <p key={index}>{description}</p>)}
            </div>
        </div>
    )
}

export { ExperienceSection }