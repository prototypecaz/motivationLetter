let texte = `Bonjour,\n\n      
        
Je vous remercie de prendre le temps de lire ce document. Ce document a pour but de vous faire part de ma motivation à intégrer une entreprise en tant que développeur web, ainsi que de vous partager le parcours qui m’a amené à cette ambition.

En 2018, suite à un licenciement économique dans le secteur de la livraison de messagerie, je me suis retrouvé au chômage. Nécessitant des travaux de rénovation dans mon appartement, j’ai pris l’initiative d’entreprendre ces rénovations moi-même, bien que je ne disposais d'aucune connaissance dans le bâtiment à l'époque.

Suite à cette expérience, je souhaitais me réorienter professionnellement vers un métier où je pourrais m’investir pleinement jusqu'a la fin de ma carriere professionnelle. Après plusieurs recherches sur Internet, j'ai découvert le métier de développeur web et web mobile.

Je me suis alors lancé dans l'apprentissage autodidacte du développement web, en commençant par des formations en ligne en HTML et CSS, avant de progresser vers le JavaScript. La programmation, avec ses algorithmes et ses logiques, m'a tout de suite passionné. Décidé à exercer et à évoluer dans ce domaine, j'ai pris l'initiative d'intégré une formation " Titre Professionnel développeur web et web mobile "  de dix mois chez Aformac à Montauban . Cela m'a permis d'approfondir mes connaissances en programmation mais aussi de découvrir divers outils et langages tels que PHP, Twig, Smarty, Bootstrap, SQL, de comprendre les méthodes de communication avec une base de données, les méthodes Ajax, etc.

Malgré l’obtention de mon diplôme, je ne me sentais pas encore prêt à intégrer le monde professionnel du développement web. J'ai donc décidé de diviser mon temps entre un emploi partiel et l’approfondissement de mes compétences en programmation. Cette période de 2 ans m’a permis de decouvrir des nouvelles methodes de developpement, des frameworks, notamment React JS et d'acquérir la confiance nécessaire pour envisager une carrière dans le développement web.

À présent, je me sens prêt à mettre en application toutes les compétences acquises. Je suis animé par un désir d’apprendre constant et je suis convaincu que je pourrais apporter une valeur ajoutée à votre entreprise grâce à mes connaissances technique que j'ai acquise au cours de ces dernieres années et ma détermination.

Pour l'avenir, j'ai l’ambition d’approfondir mes connaissances en cybersécurité et aspire à devenir, à terme, professeur dans le domaine du web.

Je vous remercie par avance pour l’attention que vous porterez à ma candidature et me tiens à votre disposition pour un entretien afin de discuter de ma motivation et de mon parcours plus en détail.`


        let vara = document.querySelector('#vara-container');
        let r = 0
        let tableauTexte = texte.split('\n\n')
        let i = 0
        let lineTexte = ''
        let container = document.querySelector('.container')

        container.addEventListener('transitionend', function() {
    
                let animation = setInterval(function() {
                
                if(r >= tableauTexte[i].length){
                    i++
                    r = 0
                }

                if(r == 0 ) {
                    lineTexte = document.createElement('p')
                    lineTexte.classList.add('texteMotivation')
                }
                
                if(i >= tableauTexte.length){
                    clearInterval(animation)
                }else{
                    lineTexte.textContent += tableauTexte[i][r]
                    vara.appendChild(lineTexte)
                    r++
                }
                
            },10)
        });

      

