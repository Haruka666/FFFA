import '../styles/Body.css'
import Equipement from '../images/Equipement.png';
function Body() {
    return(
        <div className='body-css'>
            <h1 className='mini-titre'>REGLE DE BASE</h1>
            <h2>
                <p className='body-reglement'>
            Le football américain est un jeu de gagne-terrain ou l’attaque doit atteindre l’en-but (End zone)
            adverses tandis que la défense doit l’en empêcher. Une équipe se décompose en 3 escouades l’attaque, la défense et l’équipe spéciale
            (en charge des coups de pieds). Mais sur le terrain c’est bien 11 joueurs contre 11 joueurs avec des rôles bien précis.</p></h2>
            <h1 className='mini-titre'>L'ATTAQUE</h1>
            <h2 className="body-reglement">Pour avancer l’équipe d’attaque dispose de quatre tentatives pour gagner 10 yards (9,1 m) . Si elle y parvient (que ce soit dès sa première tentative ou lors de son ultime essai),
                elle a de nouveau le droit à quatre tentati­ves. Et ainsi de suite jusqu’à ce qu’elle pénètre, balle en main, dans l’end zone.
                Pour avancer, l’attaque procède de deux manières : La course : l’attaque peut jouer ses tentati­ves par la voie terrestre.
                Le quarter back ou QB peut courir avec le ballon ou donner celui-ci à ses coureurs, les « Running-back ». Pour cela il peut soit  donner la balle de la main à la main ou soit par une passe arrière ou latérale (comme un demi de mêlée de rugby).
                Les transmissions vers l’arrière ne sont pas limité en terme de nombre.
                La passe avant : le QB peut aussi lancer la balle vers l’avant à ses receveurs qui, une fois le ballon capté, essaient de parcourir le plus de yards possibles. La passe avant n’est autorisé qu’une fois par tentative.
                Si la passe avant tombe au sol avant qu’un joueur, attaque comme défense, n’ai pu s’en saisir alors l’action s’arrête et l’attaque repars du point précédent sur la tentative suivante.
                Le jeu s’arrête lorsque le joueur en possession du ballon tombe au sol ou sort des limites du terrain. Puis une nouvelle tactique est donné et les joueurs se remettent en place pour essayer d’avancer avec soit une course soit une passe avant.
            </h2>
            <h1 className='mini-titre'>LA DÉFENSE</h1>
            <h2 className="body-reglement">La défense cherche à empêcher l’attaque de progresser. Pour cela elle peut PLAQUER le joueur attaquant possesseur du ballon pour le stopper. La prochaine phase offensive débutera alors à l’endroit précis où le porteur de balle a été plaqué.
                 Si la défense plaque le QB avant qu’il ait eu le temps de passer le ballon on parlera d’un SACK. Ce qui se traduit par une perte de terrain pour l’attaque et donc plus de yards à parcourir la tentative suivante.
                 Lorsque le QB à réussi à faire une passe vers l’avant les défenseurs peuvent détourner la balle afin d’empêcher le receveur de prendre possession du ballon.
                 Mais ils peuvent aussi INTERCEPTER le ballon avant qu’il ne tombe au sol. Dans ce cas, les défenseurs peuvent remonter un maximum de terrain et tenter de marquer un touchdown.
                 L’interception est l’un des actions avec le plus d’impact sur le jeu, elle permet d’empêcher l’attaque adverse de marquer des points tout en redonnant le ballon à son escouade offensive.
                 Un autres moyen de récupérer le ballon à l’attaque adverse ? Le FUMBLE ! Il suffit d’arracher ou de faire tomber au sol le ballon des mains de l’adversaire, le ballon libéré pouvant être récupéré par n’importe quel joueur.</h2>
            <h1 className='mini-titre'> LES POINTS</h1>
            <h2 className="body-reglement">
            <p className='body-point'>Touchdown : 6 points</p>
            <p className='body-point'>Transfomation à la main : 2 points</p>
            <p className='body-point'>Transformation au pied : 1 point</p>
            <p className='body-point'>Coup de pied entre les poteaux (field goal) : 3 points</p>
            <p className='body-point'>Safety (lorsqu’un joueur de l’attaque est  plaqué avec la balle dans son propre en but) : 2 points</p>
            </h2>
            <h1 className='mini-titre'>L’EQUIPEMENT</h1>
           <div className='body-reglement'><img src ={Equipement} alt= 'Equipement-foot-us' className='body-image'/></div>
        </div>
    )
}

export default Body