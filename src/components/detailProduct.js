import CurrencyFormat from 'react-currency-format';
import classes from './DetailProduct.module.scss'
const DetailProduct = (data) => {
    const imgSixe = data.data.img[0].size.split('x');
    const condition = data.data.condition.charAt(0).toUpperCase() + data.data.condition.slice(1);
    return (
        <div className={classes.card}>
            <div className={classes.item_image}>
                <img src={data.data.img[0].url} width={imgSixe[0]} height={imgSixe[1]} alt={data.data.tags}></img>
            </div>
            <div className={classes.info}>
                <div className={classes.condition}>{condition} - {data.data.sold_quantity} vendidos</div>
                <div className={classes.title}>{data.data.title}</div>
                <div className={classes.price}><CurrencyFormat value={data.data.price.amount} displayType={'text'} thousandSeparator={true} prefix={'$ '} /></div>
                <button className={classes.button}>Comprar</button>
            </div>
            <div className={classes.description}>
                <p className={classes.title_description}>Descripción del producto</p>
                <div className={classes.text_description}>{data.data.description}</div>
            </div>
        </div>
    )
}

export default DetailProduct