import {useContext} from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){

    const {activeChallenge,resetChallenge,completeChallenge} = useContext(ChallengesContext);
    const {resetCountdown} = useContext(CountdownContext);
    
    function handleChallengeSucceeded(){
        completeChallenge();
        resetCountdown();
    }
    
    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown()
    }

    function bodyOrEye(){
        if(activeChallenge.type == 'body'){
            return(
                <img src={"icons/body.svg"}/>
            )
        }else{
            return(
                <img src={"icons/eye.svg"}/>
            )
        }
    }
    
    return(
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ?(
                <div className={styles.challengeActive}>
                    <header>{activeChallenge.amount} Xp</header>
                
                    <main>
                        {bodyOrEye()}
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button type="button" className={styles.challengeFailedButton} onClick={handleChallengeFailed}>Falhei</button>
                        <button type="button" className={styles.challengeSucceededButton} onClick={handleChallengeSucceeded}>Completei</button>
                    </footer>
                </div>
            ):(
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de level completando desafios
                    </p>
                </div>
            )}
        </div>
    )
}