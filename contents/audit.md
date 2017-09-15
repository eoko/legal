Audit de code
=============

Objectifs
---------
L'audit de code a pour objectif premier de vérifier la sécurité du code d'une application,
et ce sur deux aspects :

- **L'aspect technique :** il s'agit de valider le respect des bonnes pratiques de développement associées à la production de code et spécifiques au(x) langage(s) employé(s), avec une attention toute particulière portée aux éléments de sécurité intégrés à l'application
- **L'aspect fonctionnel :** il s'agit de valider la bonne implémentation des fonctionnalités et le respect des bonnes pratiques associées, indépendantes du ou des langages employés.

Cette approche permet de déceler un grand nombre de vulnérabilités à la source, et est plus rapide et complète qu'un test d'intrusion. De plus, nous évaluons dans la mesure du possible le respect des bonnes pratiques liées aux méthodes de développement, car la gestion du code source d'une application et de ses versions, ainsi que la documentation associée peuvent être sources de problèmes : difficulté de traçabilité et perte de code source notamment.

Méthodologies
-------------
Lors de nos tests, nous suivons deux méthodologies principales :

- **OWASP (Open Web Application Security Project)**, au travers de son Testing Guide dans le cadre d'applications web et/ou de services web
- **OSSTMM**, dans les autres cas (applications compilées, ...)

Nous nous basons sur des outils d'analyse automatisés de code, adaptés aux langages.

L'analyse du code repose aussi sur une action humaine, intelligente, visant à comprendre ce que fait le code afin de vérifier si les parades contre des attaques de haut niveau (d'ordre fonctionnel) sont mises en places et opérationnelles. L'identification de ce type de vulnérabilité est très difficilement automatisable, car les fonctionnalités sont variables d'une application à l'autre et d'un langage de développement à l'autre.

Livrables
---------
Le livrable contient la synthèse des vulnérabilités identifiées, du point de vue technique et fonctionnel, ainsi qu'une évaluation des méthodes de développement et de leur conformité aux bonnes pratiques. Pour chaque aspect (technique, fonctionnel, et organisationnel), une note est attribuée et compte dans l'évaluation globale.

Pour chaque vulnérabilité identifiée, un descriptif ainsi qu'un ou plusieurs correctifs sont proposés, afin de pallier de manière efficace aux problèmes observés. Des rappels aux bonnes pratiques de développement sont aussi proposés.

Enfin, la conclusion fait la synthèse des observations, et livre un avis sur la sécurité de l'application telle qu'aperçue via l'analyse de son code et de ses fonctionnalités. Celle-ci ne prend pas forcément en compte les problématiques liées au déploiement en production de l'application, selon les conditions de réalisation de l'audit de code.

Cas d'études
------------
Une société propose un site web d'e-commerce, basée sur une solution développée par soin avec le langage PHP et reposant sur une architecture de type LAMP. Ce site d'e-commerce propose ainsi diverses fonctionnalités :

- Un espace utilisateur incluant les fonctionnalités d'inscription, de récupération de mot de passe, de déconnexion et la gestion du panier de l'utilisateur
- Une gestion des produits et rayons
- La possibilité de réaliser des paiements au travers de son site
- Une interface d'administration permettant de gérer les produits vendus, et de superviser les ventes (statistiques, gestion des commandes, etc.)

Lors de l'audit de code, nous vérifions le respect des bonnes pratiques de développement associées au langage (dans ce cas, PHP), en nous assurant que :

- Le code de l'application n'emploie pas de fonctions dépréciées et reconnues comme n'étant pas sécurisées ou sources de problèmes
- Le code de l'application valide toutes les informations en provenance de l'utilisateur et du navigateur, et cela afin d'éviter toute vulnérabilité d'injection (injection de code SQL, cross-site scripting, injection Xpath, ...)
- Le code s'appuie sur des frameworks reconnus et réputés pour leur robustesse, comme des ORMs ou des frameworks plus globaux comme Symfony, CakePHP, ou encore Drupal

Nous vérifions aussi le bon respect des bonnes pratiques de développement associées à l'implémentation de fonctionnalités, dans le cas de l'application d'e-commerce nous vérifions notamment que :

- La fonctionnalité de récupération de mot de passe ne puisse pas permettre le vol de compte utilisateur
- L'ensemble des formulaires permettant d'agir sur le compte de l'utilisateur sont protégés contre les attaques de type CSRF (Cross-Site Request Forgery)
- Les sessions ont une date de péremption et ne puissent pas être volées, ce qui permettrait une usurpation d'identité
- Les droits des utilisateurs sont bien cloisonnés
- Les interfaces d'administration sont restreintes aux seuls administrateurs, et a fortiori accessibles qu'à partir de certains emplacements (cas d'un backoffice)
- Le processus de paiement ne puisse pas permettre la modification de prix ou la simulation d'un paiement fictif
- Le site ne stocke aucune information critique relative aux paiements effectués ou aux informations bancaires fournis par les utilisateurs


Enfin, nous vérifions sur la base de courts entretiens avec l'équipe de développement le respect des bonnes pratiques de gestion de code et de documentation, dont notamment :
- La clarté du code
- La présence de commentaires dans le code produit, permettant d'assurer une bonne maintenabilité
- L'utilisation d'un système de gestion de versions du code, tel que CVS, SVN, Git
- L'existence de standards de développement écrits fournis aux développeurs
- L'existence de revues de code et leur fréquence

Exemple de ticket
-----------------

``` 
+--------------------------------------------+-----------+----------------+
| Inject SQL moteur de recherche             | SQLI-1    | Complexité 1/5 |
+--------------------------------------------+-----------+----------------+
| Lors de l'accès à la page `/search` il est possible    | Criticité 2/5  |
| dans une requète de type [POST] de fournir des infor-  +----------------+
| -mations SQL. Cette injection est dû à un mauvais parsing du champ      |
| `user.age`.                                                             |
+-------------------------------------------------------------------------+
| Correction : Corriger `/src/controller/searchController.php:23`         |
+-------------------------------------------------------------------------+
| Exemple : `curl http://monsite.com/search?user.age=\' AND 1 \'`         |
+-------------------------------------------------------------------------+
```












