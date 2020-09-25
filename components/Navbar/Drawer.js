import React from 'react';
import styles from './styles.module.scss';
import NavbarData from './NavbarData';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Drawer = ({ isOpen, onClose }) => {
    const { pathname } = useRouter();
    return (
        <aside className={styles.Drawer} style={{ transform: `translateX(${isOpen === true ? 0 : '100vw'})` }}>
            <button onClick={onClose}>
                <AiOutlineCloseCircle size={30} />
            </button>
            {NavbarData.map(l => (
                <Link href={l.href} key={l.label}>
                    <a style={{ transform: `scale(${pathname === l.href ? 1.5 : 1})` }}>
                        {l.label}
                    </a>
                </Link>
            ))}
            <Link href={'https://play.google.com/store/apps/details?id=com.modular.ishangry'}>
                <a target='_blank'>
                    <p>Download App</p>
                </a>
            </Link>
        </aside>
    );
}

export default Drawer;