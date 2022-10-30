import React from 'react'

const detailsadmin = React.lazy(() => import('./views/details/TestData'))


//Accueil
const Accueil = React.lazy(() => import('./views/accueil/Accueil'))

//acteurs
const Administrateurs = React.lazy(() => import('./views/acteurs/administrateurs/Administrateurs'))
const SuperAdministrateurs = React.lazy(() => import('./views/acteurs/super-administrateurs/SuperAdministrateurs'))
const Agents = React.lazy(() => import('./views/acteurs/agents/Agents'))
const Donateurs = React.lazy(() => import('./views/acteurs/donateurs/Donateurs'))

//Cibles
const Individuels = React.lazy(() => import('./views/cibles/individuels/Individuels'))
const Chom = React.lazy(() => import('./views/cibles/Chom/Chom'))
const Menages = React.lazy(() => import('./views/cibles/menages/Menages'))
const NiveauEtude = React.lazy(() => import('./views/cibles/NiveauEtude/NiveauEtude'))
const ConditionsVie = React.lazy(() => import('./views/cibles/ConditionsVie/ConditionsVie'))
const ConditionsPhys = React.lazy(() => import('./views/cibles/ConditionsPhys/ConditionsPhys'))


//Dons
const Argents = React.lazy(() => import('./views/dons/argents/Argents'))
const Objets = React.lazy(() => import('./views/dons/objets/Objets'))

//Cartes
const Cartes = React.lazy(() => import('./views/cartes/Cartes'))

//Criteres
const Criteres = React.lazy(() => import('./views/criteres/Criteres'))

//Criteres
const Statistiques = React.lazy(() => import('./views/statistiques/Statistiques'))

//Details
const DetailsActeursAgent = React.lazy(() => import('./views/details/detailsActeurs/DetailsActeursAgent'))
const DetailsCibles = React.lazy(() => import('./views/details/detailsCibles/DetailsCibles'))
const DetailsDons = React.lazy(() => import('./views/details/detailsDons/DetailsDons'))
const DetailsSA = React.lazy(() => import('./views/details/detailsActeurs/DetailsActeursSA'))
const DetailsIndividus = React.lazy(() => import('./views/details/detailsActeurs/DetailsRecens'))


//Compte



//Compte
const Affectations = React.lazy(() => import('./views/affectations/Affectations'))





const route_principale = 'dashboard'

const routes = [
    //Accueil
    { path: `${route_principale}`, name: 'Accueil', element: Accueil },

    //Acteurs
    { path: `/${route_principale}/acteur/administrateurs`, name: 'Administrateurs', element: Administrateurs },
    { path: `/${route_principale}/acteur/super-administrateurs`, name: 'Super-Administrateurs', element: SuperAdministrateurs },
    { path: `/${route_principale}/acteur/agents`, name: 'Agents', element: Agents },
    { path: `/${route_principale}/acteur/donateurs`, name: 'Donateurs', element: Donateurs },

    //Menages
    { path: `/${route_principale}/cibles/individuels`, name: 'Individuels', element: Individuels },
    { path: `/${route_principale}/cibles/menages`, name: 'Menages', element: Menages },

    //Vulnerables
    { path: `/${route_principale}/cibles/sansemploi`, name: 'Chom', element: Chom },
    { path: `/${route_principale}/cibles/conditionsvie`, name: 'ConditionsVie', element: ConditionsVie },
    { path: `/${route_principale}/cibles/conditionsphys`, name: 'ConditionsPhys', element: ConditionsPhys },
    { path: `/${route_principale}/cibles/niveauetude`, name: 'NiveauEtude', element: NiveauEtude },



    //Dons
    { path: `/${route_principale}/dons/argents`, name: 'Argents', element: Argents },
    { path: `/${route_principale}/dons/objets`, name: 'Objets', element: Objets },

    //Cartes
    { path: `/${route_principale}/cartes`, name: 'Cartes', element: Cartes },

    //Criteres
    { path: `/${route_principale}/criteres`, name: 'Criteres', element: Criteres },

        //Affectations
        { path: `/${route_principale}/affectations`, name: 'Affectations', element: Affectations },
    
    //Statistiques
    { path: `/${route_principale}/statistiques`, name: 'Statistiques', element: Statistiques },
    
    //Details
    { path: `/${route_principale}/details/acteuragent`, name: 'Agent Details', element: DetailsActeursAgent },
    { path: `/${route_principale}/details/acteursadmin`, name: 'Admin Details', element: detailsadmin },
    { path: `/${route_principale}/details/cibles`, name: 'Cibles Details', element: DetailsCibles },
    { path: `/${route_principale}/details/dons`, name: 'Dons Details', element: DetailsDons },
    { path: `/${route_principale}/details/acteurssa`, name: 'Super-admin Details', element: DetailsSA},
    { path: `/${route_principale}/details/individus`, name: 'Individus Details', element: DetailsIndividus},

     //Statistiques
     { path: `/${route_principale}/details/acteuragent`, name: 'Compte', element: DetailsActeursAgent },
]

export default routes
