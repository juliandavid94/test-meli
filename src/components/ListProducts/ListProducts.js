import classes from './ListProducts.module.scss'
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';

const ListProducts = ({ id, image, price, tittle, address, tags}) => {
    return (
        <Link className={classes.card} to={{pathname: `/items/${id}` }}>
            <div className={classes.products_card}>
                <img className={classes.img} src={image} alt={tags} />
            </div>
            <div>
                <p className={classes.price_shipping}><CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$ '} /></p>
                <span className={classes.title_item}>{tittle}</span>
            </div>
            <div className={classes.address}>
                <span>{address}</span>
            </div>
        </Link>
    );
} 

export default ListProducts