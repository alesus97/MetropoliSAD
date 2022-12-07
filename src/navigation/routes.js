import Roles from './utils/Roles'
import { Dashboard, Movie, Chair, Quiz, EmojiEvents } from '@mui/icons-material'
import { lazy } from 'react';
import { Navigate } from 'react-router-dom'

const CinemaPage = lazy(() => import("../controllers/CinemaController"));
const FilmPage = lazy(() => import("../controllers/FilmController"));
const SalePage = lazy(() => import("../controllers/SaleController"));
const QuizPage = lazy(() => import("../controllers/QuizController"));
const PalinsestoPage = lazy(() => import("../controllers/PalinsestoController"));
const StorePage = lazy(()=> import("../controllers/StoreController"));
const LoginPage = lazy(() => import("../controllers/LoginController"));
const IdentifyAccountPage = lazy(() => import("../controllers/IdentifyAccountController"));
const ResetPasswordPage = lazy(() => import("../controllers/ResetPasswordController"));
const QuestionsPage = lazy(() => import("../controllers/QuestionsController"));



export const privateRoutes = [
  {
    name: "Cinema",
    path: "/cinema",
    icon: <Movie color="primary" />,
    page: <CinemaPage/>,
    permission: [
        Roles.ADMIN
    ],
  },
  {
    name: "Schedule",
    path: "/schedule",
    icon: <Dashboard color="primary" />,
    page: <PalinsestoPage/>,
    permission: [
      Roles.GESTORE_CINEMA
    ],

  },
  {
    name: "Film",
    path: "/film",
    icon: <Movie color="primary" />,
    page: <FilmPage/>,
    permission: [
        Roles.ADMIN,
        Roles.GESTORE_CINEMA
    ],
  },
  {
    name: "Hall",
    path: "/hall",
    icon: <Chair color="primary" />,
    page: <SalePage/>,
    permission: [
      Roles.GESTORE_CINEMA
    ],
  },
  {
    name: "Quiz",
    path: "/quiz",
    icon: <Quiz color="primary" />,
    page: <QuizPage/>,
    permission: [
        Roles.ADMIN,
    ],		
      children: [
		  	{
			  	name: "Domande",
			  	path: 'quiz/filmId=:filmId',
			  	page: <QuestionsPage/>,		
		  	},    
      ]
  },
  {
    name: "Store",
    path:"/store",
    icon: <EmojiEvents color="primary"/>,
    page: <StorePage/>,
    permission: [
        Roles.ADMIN
    ],
  },
]



export const publicRoutes =[
  {
  name: "Login",
  path: "/login",
  page: <LoginPage/>  
},
{
  name: "Identify Account",
  path: "/identifyAccount",
  page: <IdentifyAccountPage/>  
},
{
  name: "Reset Password",
  path: "/resetPassword",
  page: <ResetPasswordPage/>
},
{
  name: "Not Found",
  path: "*",
  page: <Navigate to="/login" replace />
},
]