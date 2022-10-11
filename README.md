## PROJET LANFIATECH

<h2 style="color:blue;font-weight:bold;"> Informations </h2>

ce projet consiste en la mise en place d'un <strong> Dashboard </strong> 
permettant la gestion des couches vulnerables de des differents utilisateurs.<br/>
    les utilisateurs sont : <br/>
      <ul>
        <li> Gestionnaires </li>
        <li> cibles </li>
        <li> Donateurs </li>
        <li> Agents </li>
  <br/>
<h2 style="color:blue;font-weight:bold;"> Execution du projet </h2>
<li> Installation des dependences du projet </li>

```bash
$ yarn install 
```
 
<li> Lancement du projet </li>

```bash
$ yarn start 
```
<br/>
Puis aller dans le navigateur et entrez :

 ```bash
 http://localhost:3000 
 ```

<br/>
<h2 style="color:blue;font-weight:bold;"> Arborescence </h2>


```
lanfiatech-dashboard
├── public/          # fichiers static
│   ├── index.html   # html de base
│   └── ...   
│
├── src/             # dossier du projet
│   ├── assets/      # images, icons, etc.
│   ├── components/  # contient les composants
│   ├── views/       # les pages vues de l'application 
│   ├── App.js
│   ├── ...
│   ├── index.js
│   ├── routes.js    # configuration des routes
│   ├── store.js     # modele d'utilisation de redux 
│   ├── style.scss        # scss styles
│
└── package.json
```
