import iconLinkedin from "assets/icons/linkedin.svg";
import iconGithub from "assets/icons/github.svg";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">App desenvolvido por Matheus Nobre</p>
        <p>
        <a href="https://linkedin.com/in/matheusnobrepinto/" target="_blank" rel="noreferrer"><img src={iconLinkedin} alt="DevSuperior" width="24" /></a>
        <a href="https://github.com/MatheusNP" target="_blank" rel="noreferrer"><img src={iconGithub} alt="DevSuperior" width="24" /></a>
        </p>
        <p className="text-light"><small><strong>Semana Spring React</strong><br/>
          Evento promovido pela escola DevSuperior: <a href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">@devsuperior.ig</a></small></p>
      </div>
    </footer>
  );
}

export default Footer;


