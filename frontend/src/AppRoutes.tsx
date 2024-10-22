import {  Route, Routes } from 'react-router-dom';
import Layout from './layouts/layout';
import HomePage from './pages/HomePage';
import AuthCallbackPage from './pages/AuthCallbackPage';
import UserProfilePage from './pages/UserProfilePage'; 
import ManageIndustryPage from './pages/ManageIndustryPage';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';



const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={
                    <Layout showHero>
                        <HomePage />
                    </Layout>
                }
            />
            <Route path="/auth-callback" element={<AuthCallbackPage />} />
            <Route
        path="/search/:city"
        element={
          <Layout showHero={false}>
            <SearchPage />
          </Layout>
        }
      />
            
            <Route path="/auth-callback" element={<AuthCallbackPage />} />
            <Route
        path="/detail/:industryId"
        element={
          <Layout showHero={false}>
            <DetailPage />
          </Layout>
        }
      />
            <Route
                path="/user-profile"
                element={
                    <Layout>
                        <UserProfilePage />
                    </Layout>
                }
            />
            <Route
                path="/manage-industry"
                element={
                    <Layout>
                        <ManageIndustryPage 
                            onSave={() => {
                                throw new Error('Function not implemented.');
                            }} 
                            isLoading={false}
                        />
                    </Layout>
                }
            />
            
        </Routes>
    );
}

export default AppRoutes;
