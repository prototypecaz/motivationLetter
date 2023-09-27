  
      var idealFontSize = 45, idealScreenSize = 1920, maxFontSize = 64, minFontSize = 22,
      fontSize = (screen.width / idealScreenSize) * idealFontSize;
      fontSize = Math.max(minFontSize,Math.min(maxFontSize,fontSize));
      
      
            var vara = new Vara("#vara-container","SatisfySL.json",[{
           text:"Je tiens tout d'abord à vous remercier d'avoir pris le temps de lire cette lettre. Cette lettre a pour but de vous faire part de ma motivation profonde à intégrer une entreprise en tant que développeur web, ainsi que de vous partager le parcours qui m'a amené à cette ambition.",
           //duration:9000
           queued:true, 
       },{
           text:"En 2018, suite à un licenciement économique dans le secteur de la livraison de messagerie, je me suis retrouvé au chômage. Nécessitant des travaux de rénovation dans mon appartement, j'ai pris l'initiative d'entreprendre ces rénovations moi-même, bien que je ne disposais d'aucune connaissance dans le bâtiment à l'époque. Ce défi, de plus d'un an, m'a enseigné une leçon : la volonté peut surmonter l'ignorance et l'inexpérience.",
          // duration:11000
       },{
           text:"Suite à cette expérience, je souhaitais me réorienter professionnellement vers un métier où je pourrais m'investir pleinement jusqu'a la fin de ma carriere professionnelle. Après plusieurs recherches sur Internet, j'ai découvert le métier de développeur web et web mobile. ",
           //duration:9000
       },{
           text:"Je me suis alors lancé dans l'apprentissage autodidacte du développement web, en commençant par des formations en ligne en HTML et CSS, avant de progresser vers le JavaScript. La programmation, avec ses algorithmes et ses logiques, m'a tout de suite passionné. Décidé à exercer et à évoluer dans ce domaine, j'ai intégré une formation ' Titre Professionnel développeur web et web mobile '  de dix mois chez Aformac à Montauban . Cela m'a permis d'approfondir mes connaissances en programmation mais aussi de découvrir divers outils et langages tels que PHP, Twig, Smarty, Bootstrap, SQL, de comprendre les méthodes de communication avec une base de données, les méthodes Ajax, etc. ",
           //duration:28000
       },{
           text:"Malgré l'obtention de mon diplôme, je ne me sentais pas encore prêt à intégrer le monde professionnel du développement web. J'ai donc décidé de diviser mon temps entre un emploi partiel et l'approfondissement de mes compétences en programmation. Cette période de 2 ans m'a permis de decouvrir des nouvelles methodes de developpement, des frameworks, notamment React JS et d'acquérir la confiance nécessaire pour envisager une carrière dans le développement web.",
           //duration:9000
       },{
           text:"À présent, je me sens prêt à mettre en application toutes les compétences acquises. Je suis animé par un désir d'apprendre constant et je suis convaincu que je pourrais apporter une valeur ajoutée à votre entreprise grâce à mes connaissances technique que j'ai acquise au cours de ces dernieres années et ma détermination. ",
           //duration:11000
       },{
           text:"Pour l'avenir, j'ai l'ambition d'approfondir mes connaissances en cybersécurité et aspire à devenir, à terme, professeur dans le domaine du web.",
           //duration:9000
       },{
           text:"Je vous remercie par avance pour l'attention que vous porterez à ma candidature et me tiens à votre disposition pour un entretien afin de discuter de ma motivation et de mon parcours plus en détail.",
           //duration:9000
       }],{
          // The options given below will be applicable to every text created,
          // however they will not override the options set above.
          // They will work as secondary options.
          fontSize:fontSize, // Number, size of the text
          strokeWidth:1.5, // Width / Thickness of the stroke
          color:"white", // Color of the text
       // Number, Duration of the animation in milliseconds
       duration:10000,
          textAlign:"center", // String, text align, accepted values are left,center,right
          autoAnimation:true, // Boolean, Whether to animate the text automatically
          queued:true, // Boolean, Whether the animation should be in a queue
          letterSpacing:2,
          delay:0
      });
      
      