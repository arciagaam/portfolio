import { ReactNode } from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { MdMail } from 'react-icons/md'

type TContact = {
    icon: ReactNode;
    label: string;
    href: string;
}

const ContactMe = () => {
    return (
        <div id='contact-me' className="flex flex-col items-center justify-center gap-5 min-h-[80vh]">

            <div className="flex flex-col gap-2 items-center">
                <p>If you want to work with me, you may</p>
                <h3 className='font-mograch text-6xl text-accent'>Contact Me</h3>
            </div>

                <div className="flex flex-col items-start gap-3">
                    <Contact contact={{icon: <MdMail size={24}/>, label: 'miguelarciaga@gmail.com', href: 'mailto:miguelarciaga@gmail.com'}} />
                    <Contact contact={{icon: <FaLinkedin size={24}/>, label: 'Miguel Arciaga', href: 'https://www.linkedin.com/in/miguel-arciaga-a85b74269'}} />
                    <Contact contact={{icon: <FaGithubSquare size={24}/>, label: 'arciagaam (Miguel Arciaga)', href: 'https://github.com/arciagaam'}} />
                </div>

        </div>
    )
}

const Contact = ({contact}: {contact:TContact}) => {
    return (
        <a href={contact.href} target='_blank' className="flex gap-2">
            {contact.icon}
            {contact.label}
        </a>
    )
}

export { ContactMe }