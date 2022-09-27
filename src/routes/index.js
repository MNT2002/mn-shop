import { Component } from 'react';
import Home from '../pages/Home';
import AoThun from '../pages/AoThun';
import Cart from '../pages/Cart';
import { HeadFooterOnly } from '../components/Layout';
import AoSomi from '../pages/AoSomi';

const publicRoutes = [
    { path: '/', Component: Home },
    { path: '/aothun', Component: AoThun, layout: HeadFooterOnly },
    { path: '/cart', Component: Cart, layout: HeadFooterOnly },
    {path:'/aosomi',Component:AoSomi,layout:HeadFooterOnly},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
