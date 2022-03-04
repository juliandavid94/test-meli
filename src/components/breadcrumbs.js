import { useLocation } from 'react-router-dom';
import classes from './Breadcrumbs.module.scss'

const Breadcrumbs = (categories) => {
    const { search } = useLocation();
    let query = new URLSearchParams(search).get('search');
    if (localStorage.getItem('breadcrumbs')) {
        categories = JSON.parse(localStorage.getItem('breadcrumbs'));
        query = localStorage.getItem('search')
    } 
    localStorage.setItem('search', query);
    localStorage.setItem('breadcrumbs', JSON.stringify(categories));
    
    return <div className={ classes.bread }>{
        categories.data !== null ?
        categories.data.map((value) => {
            return `${value} > `
        }) : ''
    }<strong>{query}</strong></div>
}

export default Breadcrumbs