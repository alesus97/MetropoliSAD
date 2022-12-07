import React, {lazy, Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';
import SimpleBackdrop from "../pages/LoadingPage"
import { privateRoutes, publicRoutes } from './routes';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';

const NotFound404 = lazy(() => import("../pages/NotFound404View"));

 
function AppRoutes() {

	const user = useSelector(selectUser)
	//Filtraggio di tutte le routes in base al ruolo. Restituisce solo le route per cui quell'utente è autorizzato
	const allowedRoutes = privateRoutes.filter((element) => element.permission.includes(user?.role));

	return (
		
		<Suspense fallback={<SimpleBackdrop />}>
			<Routes>
				{
					user ? 
					<> 
					{/* Map delle routes */ }
					{allowedRoutes.map((route, index) => <Route path={route.path} element={route.page} key={index}/>) }

					{/* Map delle subroutes */ }
					{allowedRoutes.map((route, index) =>  route.children?.map((subroute) => <Route path={subroute.path} element={subroute.page} key={index}/>))}
					<Route path="/" element={allowedRoutes[0].page}/>
					<Route path="*" element={<NotFound404 />}/> 
					</>
					: 
					publicRoutes.map((route, index) => <Route path={route.path} element={route.page} key={index}/>)
				}
				
			</Routes>
		</Suspense>
	)
}

export default AppRoutes;