import { useLocation } from 'react-router-dom';
import classes from './Breadcrumbs.module.scss'

/**
 * Component to build the breadcrumb according to the search categories 
 * @param categories Array - categories for the search products
 * @param localStorage window params - store data for the search products
 * @param URLSearchParams Object - Content information the search box
 * @returns view render according breadcrumbs 
 */

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