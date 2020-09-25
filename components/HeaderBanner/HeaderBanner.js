import React from 'react';
import styles from './styles.module.scss';

const HeaderBanner = () => {
    return (
        <header className={styles.HeaderBanner}>
            <div className={styles.container}>
                <div className={styles.greetingText}>
                    <h3>Kamu laper atau haus?</h3>
                    <h1>Tenang... ada Hangry! yang siap mengatasi</h1>

                    <div className={styles.appPlay}>
                        <a href='https://play.google.com/store/apps/details?id=com.modular.ishangry' target='_blank'>
                            <img src="/static/playstore.png" alt="playstore download" />
                        </a>

                        <a href='https://apps.apple.com/us/app/hangry/id1498223490' target='_blank'>
                            <img src="/static/appstore.png" alt="appstore download" />
                        </a>
                    </div>
                </div>

                <div className={styles.phoneFrame}>
                    <img className={styles.phone} src="/static/phone.png" alt="hangry app" />
                </div>
            </div>
        </header>
    );
}

export default HeaderBanner;