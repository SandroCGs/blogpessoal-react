import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'

function Footer() {
    const data = new Date().getFullYear()

    return (
        <footer className="flex justify-center bg-indigo-900 text-white">
            <div className="container flex flex-col items-center py-4">
                <p className="text-xl font-bold">
                    Blog Pessoal Generation | Copyright: {data}
                </p>

                <p className="text-lg">Acessa nossas redes sociais</p>

                <nav aria-label="Redes sociais">
                    <ul className="flex gap-2">
                        <li><LinkedinLogoIcon size={48} weight="bold" /></li>
                        <li><InstagramLogoIcon size={48} weight="bold" /></li>
                        <li><FacebookLogoIcon size={48} weight="bold" /></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
