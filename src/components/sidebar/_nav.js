import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilHome,
  cilPeople,
  cilFlower,
  cilGift,
  cilMap,
  cilChart,
  cilLockLocked,
  cilArrowThickLeft,
  cilArrowThickRight,
  cilAsterisk

} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const route_principale = '/dashboard'
const route_acteur = `${route_principale}/acteur`
const route_cible = `${route_principale}/cibles`
const route_don = `${route_principale}/dons`


const _nav = [
  {
    component: CNavItem,
    name: 'Accueil',
    to: `${route_principale}`,
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />
   
  },

   //Acteurs nav
  {
    component: CNavGroup,
    name: 'Acteurs',
    to:  `${route_acteur}`,
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Super-administrateurs',
        to:  `${route_acteur}/super-administrateurs`,
      },
      {
        component: CNavItem,
        name: 'Administrateurs',
        to:  `${route_acteur}/administrateurs`,
      },
      {
        component: CNavItem,
        name: 'Agents',
        to:  `${route_acteur}/agents`,
      },
      {
        component: CNavItem,
        name: 'Donateurs',
        to:  `${route_acteur}/donateurs`,
      },
      
    ],
  },

  //Cibles nav
  {
    component: CNavGroup,
    name: 'Cibles',
    to:  `${route_cible}`,
    icon: <CIcon icon={cilFlower} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Individuels',
        to:  `${route_cible}/individuels`,
      },
      {
        component: CNavItem,
        name: 'Menages',
        to:  `${route_cible}/menages`,
      },
      {
        component: CNavGroup,
        name: 'Vulnérables',
        to:  `${route_cible}`,
            items: [
          {
            component: CNavItem,
            name: 'Conditions de vie',
            to:  `${route_cible}/conditionsvie`,
          },
          {
            component: CNavItem,
            name: 'Niveau étude',
            to:  `${route_cible}/niveauetude`,
          },
          {
            component: CNavItem,
            name: 'Conditions physiques',
            to:  `${route_cible}/conditionsphys`,
          },
          {
            component: CNavItem,
            name: 'Sans emploi',
            to:  `${route_cible}/sansemploi`,
          },
        
        ],
      },
    
    ],
  },

  //Dons nav
  {
    component: CNavGroup,
    name: 'Dons',
    to:  `${route_don}`,
    icon: <CIcon icon={cilGift} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Argents',
        to:  `${route_don}/argents`,
      },
      {
        component: CNavItem,
        name: 'Objets',
        to:  `${route_don}/objets`,
      },
    
    ],
  },

  {
    component: CNavItem,
    name: 'Cartes',
    to: `${route_principale}/cartes`,
    icon: <CIcon icon={cilMap} customClassName="nav-icon" />
  },

  {
    component: CNavItem,
    name: 'Critères',
    to:  `${route_principale}/criteres`,
    icon: <CIcon icon={cilAsterisk} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Affectations',
    to:  `${route_principale}/affectations`,
    icon: <CIcon icon={cilArrowThickRight} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Statistiques',
    to:  `${route_principale}/statistiques`,
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />
  },

]

export default _nav
