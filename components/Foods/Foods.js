import React, { useContext } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import styles from './Foods.module.scss';
import Link from 'next/link';
import { GlobalContext } from '../../StateManagement/GlobalState';

const Foods = () => {

    const { brands } = useContext(GlobalContext).state;

    return (
        <section className={styles.Foods}>
            <h2>Hangry! adalah restoran dengan beragam brand</h2>
            <p className={styles.paragraphTitle}>Kami menyajikan beragam brand untuk menemani setiap waktu santapmu</p>

            <div className={styles.frameFood}>
                {brands.map((l, i) => (
                    <Link key={i} href={`https://www.ishangry.com/brand/${l.nav}`}>
                        <div className={styles.foodCard}>
                            <div className={styles.foodImageContainer}>
                                <img src={l.foodImage} alt={l.kind} />

                                <div className={styles.brandContainer}>
                                    <img src={l.brandImage} alt={l.brand} />
                                </div>
                            </div>

                            <div className={styles.foodInfo}>
                                <div>
                                    <p>{l.brand}</p>
                                    <BiRightArrowAlt size={30} className={styles.arrow} color='#A30926' />
                                </div>

                                <p>{l.kind} · {l.from}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Foods;