/*****************************
* 6. BOUCLES ET ITÉRATIONS
* BOUCLE = STRUCTURE DE CONTRÔLE N° 2 = MOYEN DE RÉPÉTER DES INSTRUCTIONS
*/
/* 6.5. Boucles imbriquées
  On peut très bien imbriquer une boucle dans une boucle.
  Syntaxe :
    for (let i = ...; i ... ; i ...) {
      for (let j = ...; j ...; j ...) {
        // instructions qui font intervenir les deux compteurs i et j
      }
    }
  Principe de fonctionnement :
  C'est
    - d'abord la boucle interne qui boucle (c'est celle qui boucle le plus vite)
    - et puis la boucle externe (c'est celle qui boucle le plus lentement)
*/

/*
  Pour vous familiariser avec les boucles imbriquées :
  - Faites une table d'évolution des variables !
  - Écrivez l'expression à afficher dans le console.log d'une manière alternative,
    en utilisant le concept de template littéral.
*/

console.log("i   |  j   |  i * j");
console.log("-------------------");

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(`${i}   |  ${j}   |  ${i * j}`);
    }
}
