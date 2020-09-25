import React from 'react';
import NavbarData from './NavbarData';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi'
import styles from './styles.module.scss';
import Drawer from './Drawer';
import { useDisclosure } from './DrawerFunc';

const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <nav className={styles.Navbar}>
            <Link href='/'>
                <img src="/static/Logo.svg" alt="hangry logo" className={styles.Logo} />
            </Link>

            <div className={styles.frame}>
                {NavbarData.map(l => (
                    <Link key={l.label} href={l.href}>
                        <a>
                            <p>{l.label}</p>
                        </a>
                    </Link>
                ))}
                <Link href={'https://play.google.com/store/apps/details?id=com.modular.ishangry'}>
                    <a target='_blank'>
                        <p>Download App</p>
                    </a>
                </Link>
            </div>

            <button onClick={onOpen}>
                <FiMenu size={20} className={styles.menubar} />
            </button>

            <Drawer isOpen={isOpen} onClose={onClose} />
        </nav>
    );
}

export default Navbar;