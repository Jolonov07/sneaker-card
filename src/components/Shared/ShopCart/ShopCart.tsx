import React from 'react';
import styles from './ShopCart.module.css';

interface IShopCart {
  count: number;
}

function ShopCart({ count }: IShopCart) {
  return (
    <button className={styles.root} type='button'>
      <svg width='25' height='25' viewBox='0 0 25 25' fill='none' className={styles.shopCart}>
        <path
          d='M4.86667 5.33333L4.51958 3.25H3.27375C3.08792 2.53333 2.44125 2 1.66667 2C0.7475 2 0 2.7475 0 3.66667C0 4.58583 0.7475 5.33333 1.66667 5.33333C2.44125 5.33333 3.08792 4.8 3.27417 4.08333H3.81333L4.02167 5.33333H4.00583L6.16042 16.1733C5.13333 16.2517 4.27792 17.0425 4.17708 18.0375C4.11792 18.6229 4.31042 19.2092 4.70542 19.645C5.10083 20.0821 5.66417 20.3333 6.25 20.3333H7.08333C7.08333 21.7121 8.20458 22.8333 9.58333 22.8333C10.9621 22.8333 12.0833 21.7121 12.0833 20.3333H16.6667C16.6667 21.7121 17.7879 22.8333 19.1667 22.8333C20.5454 22.8333 21.6667 21.7121 21.6667 20.3333H23.3333C23.5637 20.3333 23.75 20.1471 23.75 19.9167C23.75 19.6863 23.5637 19.5 23.3333 19.5H21.5208C21.1767 18.5304 20.2529 17.8333 19.1667 17.8333C18.0804 17.8333 17.1567 18.5304 16.8125 19.5H11.9375C11.5933 18.5304 10.6696 17.8333 9.58333 17.8333C8.49708 17.8333 7.57333 18.5304 7.22917 19.5H6.25C5.89917 19.5 5.56167 19.3492 5.32333 19.0863C5.08292 18.82 4.97 18.4775 5.00625 18.1213C5.06958 17.4925 5.65042 17.0004 6.32833 17.0004H6.65792C6.66375 17.0004 6.66833 17.0004 6.67417 17.0004H22.9217C24.0679 17 25 16.0679 25 14.9221V5.33333H4.86667ZM1.66667 4.5C1.20708 4.5 0.833333 4.12625 0.833333 3.66667C0.833333 3.20708 1.20708 2.83333 1.66667 2.83333C2.12625 2.83333 2.5 3.20708 2.5 3.66667C2.5 4.12625 2.12625 4.5 1.66667 4.5ZM19.1667 18.6667C20.0858 18.6667 20.8333 19.4142 20.8333 20.3333C20.8333 21.2525 20.0858 22 19.1667 22C18.2475 22 17.5 21.2525 17.5 20.3333C17.5 19.4142 18.2475 18.6667 19.1667 18.6667ZM9.58333 18.6667C10.5025 18.6667 11.25 19.4142 11.25 20.3333C11.25 21.2525 10.5025 22 9.58333 22C8.66417 22 7.91667 21.2525 7.91667 20.3333C7.91667 19.4142 8.66417 18.6667 9.58333 18.6667ZM24.1667 14.9221C24.1667 15.6083 23.6083 16.1667 22.9221 16.1667H7.00875L5.02125 6.16667H24.1667V14.9221Z'
          fill='black'
        />
      </svg>
      {Boolean(count) && <div className={styles.count}>{count}</div>}
    </button>
  );
}

export default ShopCart;
