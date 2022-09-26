
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '../src/routes';
import { DefaultLayout } from './components/Layout';


function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        //publicRoutes là mảng chứa các object route được định nghĩa trong folder routes
                        const Page = route.Component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Fragment key={index}>
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            </Fragment>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
