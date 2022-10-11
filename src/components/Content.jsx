import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer } from '@coreui/react'

import { ProgressSpinner } from 'primereact/progressspinner';

// configuration des routes
import routes from '../routes'


const loading = (
  <div className="justify-content-center align-content-center" style={{ display:'grid',height:'80vh' }}>
    
    <ProgressSpinner />
  </div>
)

const AppContent = () => {
  return (
    <CContainer lg  >
      <Suspense fallback={loading}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="connexion" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
