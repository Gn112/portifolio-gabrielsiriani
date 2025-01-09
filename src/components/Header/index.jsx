 // Importa os módulos de css e os associa ao objeto {styles} (cada classe vira uma propriedade)
import styles from './Header.module.css';

// Define um componente de "Header"
function Header()
{
    return (
        // Recebe a classe ".header" do módulo de css
        <header className={styles.header}>
            <span>Gabriel Siriani</span>
            <nav>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
            </nav>
        </header>
    );
};

// Exporta para o resto do projeto o componente "Header"
export default Header;