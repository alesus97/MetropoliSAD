import React, {lazy, Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';
import SimpleBackdrop from "../pages/LoadingPage"
import { isLoggedIn } from './utils';
import { privateRoutes, publicRoutes } from './routes';


const NotFound404 = lazy(() => import("../pages/NotFound404View"));
const Questions = lazy(() => import("../controllers/QuestionsController"));
 
function AppRoutes() {
	return (
		
		<Suspense fallback={<SimpleBackdrop />}>
			<Routes>
				{
					isLoggedIn() ? 
					<> 
					{privateRoutes.filter((element) => element.permission.includes(isLoggedIn()) )
					.map((route, index) => <Route path={route.path} element={route.page} key={index}/>) }
					<Route path="*" element={<NotFound404 />}/>
					<Route path="/quiz/filmId=:filmId" element={<Questions/>}/> {/* NON SO SE QUESTO VA QUA */}
					</>
					: 
					publicRoutes.map((route, index) => <Route path={route.path} element={route.page} key={index}/>)
				}
				
			</Routes>
		</Suspense>
	)
}

export default AppRoutes;