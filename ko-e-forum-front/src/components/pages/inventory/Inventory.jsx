import styles from "./inventory.module.css"

import space from "../../../assets/game/background/background.jpg"
import grass from "../../../assets/game/background/grass.png"
import objective from "../../../assets/game/background/objetive.png"

import egg from "../../../assets/game/collectable/egg.png"
import tree1 from "../../../assets/game/collectable/tree1.png"
import tree2 from "../../../assets/game/collectable/tree2.png"
import tree3 from "../../../assets/game/collectable/tree3.png"
import gun from "../../../assets/game/collectable/gun/gun_r.png"

import firefighter from "../../../assets/game/player/firefighter/idle/player-up.png"
import police from "../../../assets/game/player/police/idle/player-down.png"

import opil from "../../../assets/game/enemy/opila/opilakiller-r.png"
import babyopil from "../../../assets/game/enemy/baby/baby-r.png"

function Inventory() {
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
      });
    return (
        <>
            <h2>Arquivos do jogo KillerOpil - Escape</h2>
            <h2>Atualizações</h2>
            <div>
                <p>Versão 1.0 finalizada, primeira fase do jogo completa.</p>
            </div>
            <h3>Backgrounds</h3>
            <div className={styles.carrousel}>
                <img alt="Background space" id="space" src={space}/>
                <img alt="Background grass" id="grass" src={grass}/>
                <img alt="Background objective" id="objective" src={objective}/>
            </div>
            <h3>Collectables</h3>
            <div className={styles.collectables}>
                <img alt="Collectable: egg" id="egg" src={egg}/>
                <div>
                    <img alt="Collectable: tree1" id="tree1" src={tree1}/>
                    <img alt="Collectable: tree2" id="tree2" src={tree2}/>
                    <img alt="Collectable: tree3" id="tree3" src={tree3}/>
                </div>
                <img alt="Collectable: gun" id="gun" src={gun}/>
            </div>
            <h3>Skins</h3>
            <div className={styles.skins}>
                <img alt="Skin: firefighter" id="firefighter" src={firefighter}/>
                <img alt="Skin: police" id="police" src={police}/>
            </div>
            <h3>Enemies</h3>
            <div className={styles.enemies}>
                <img alt="Enemy: opil" id="opil" src={opil}/>
                <img alt="Enemy: babyopil" id="babyopil" src={babyopil}/>
            </div>
            <p>Acesse o <a href="https://louiexz.github.io/KillerOpil-Escape/"
            target="_blank" rel="noreferrer">Jogo</a></p>
        </>
    );
}

export default Inventory;
