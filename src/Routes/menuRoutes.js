import { Inicio } from "../components/page/inicio/Inicio.jsx";
import { ProyectosContainer } from "../components/page/proyectos/ProyectosContainer.jsx";
import { Sobre } from "../components/page/sobre-mi/Sobre.jsx";
import { CertificadosContainer } from "../components/page/certificados/CertificadosContainer.jsx";
import { ContactoContainer } from "../components/page/contacto/ContactoContainer.jsx";



export const menuRoutes = [
    {
        id: "inicio",
        path: "/",
        Element: Inicio,
    },
    {
        id: "sobre-mi",
        path: "/sobre",
        Element: Sobre,
    },
    {
        id: "proyectos",
        path: "/proyectos",
        Element: ProyectosContainer,
    },
    {
        id: "certificados",
        path: "/certificados",
        Element: CertificadosContainer,
    },
    {
        id: "contacto",
        path: "/contacto",
        Element: ContactoContainer,
    },
    
];