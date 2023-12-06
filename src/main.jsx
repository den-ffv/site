import React, { lazy,Suspense } from 'react'
import ReactDOM from 'react-dom/client'

const WrappedApp = lazy(async () => {
    return Promise.all([
      import('./App.jsx'),
      new Promise(resolve => setTimeout(resolve, 1500))
    ])
    .then(([moduleExports]) => moduleExports);
  });

import './index.scss'
import { Loader } from './utils/loader/Loader.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Suspense fallback={<Loader/>}>
       <WrappedApp/>
    </Suspense>
)
