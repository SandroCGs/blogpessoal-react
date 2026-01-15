function Navbar() {
    return (
        <nav className="w-full flex justify-center py-4 bg-indigo-900 text-white">
            <div className="container flex justify-between text-lg mx-8">
                <span>Blog Pessoal</span>

                <ul className="flex gap-4">
                    <li>Postagens</li>
                    <li>Temas</li>
                    <li>Cadastrar tema</li>
                    <li>Perfil</li>
                    <li>Sair</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
