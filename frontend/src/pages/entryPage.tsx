import '../styles/entryPage.css'

function EntryPage() {
  return (
    <>
        <div className="entry-page">
            <div className="entry-page__panel entry-page__panel--left">
                <div className="entry-page__left-content">

                    <header className="entry-page__header">
                        <div className="entry-page__brand">
                            <img src="" alt="Plotboard logo" className="entry-page__logo" />
                            <h1 className="entry-page__brand-title"></h1>
                        </div>
                        <button type="button" className="btn entry-page__theme-toggle"></button>
                    </header>

                    <section className="entry-page__benefits">
                        <p className="entry-page__benefits-lable"></p>
                        <ul className="entry-page__benefits-list">
                            <li className="entry-page__benefit">
                                <img src="" alt="" className="entry-page__benefit-icon" />
                                <h3 className="entry-page__benefit-title"></h3>
                                <p className="entry-page__benefit-description"></p>
                            </li>
                            <li className="entry-page__benefit">
                                <img src="" alt="" className="entry-page__benefit-icon" />
                                <h3 className="entry-page__benefit-title"></h3>
                                <p className="entry-page__benefit-description"></p>
                            </li>
                            <li className="entry-page__benefit">
                                <img src="" alt="" className="entry-page__benefit-icon" />
                                <h3 className="entry-page__benefit-title"></h3>
                                <p className="entry-page__benefit-description"></p>
                            </li>
                            <li className="entry-page__benefit">
                                <img src="" alt="" className="entry-page__benefit-icon" />
                                <h3 className="entry-page__benefit-title"></h3>
                                <p className="entry-page__benefit-description"></p>
                            </li>
                        </ul>
                    </section>
                    <footer className="entry-page__footer">
                        <p className="entry-page__footer-text"></p>
                    </footer>
                </div>
            </div>

            <div className="entry-page__panel entry-page__panel--right">
                <div className="entry-page__right-content">

                    <div className="entry-page__heading">
                        <h1 className="entry-page__title"></h1>
                        <p className="entry-page__subtitle">
                            <button type="button" className="text-btn"></button>
                        </p>
                    </div>

                    <div className="entry-page__oauth">
                        <button type="button" className="btn secondary-btn wide-btn entry-page__google-btn"></button>
                    </div>

                    <div className="entry-page__divider">
                        <span className="entry-page__divider-text"></span>
                    </div>

                    <form action="" className="entry-page__form">
                        <div className="entry-page__field-group">
                            <label htmlFor="email" className="input-title"></label>
                            <input id="email" name="email" type="email" autoComplete="email" className="input-field" />
                        </div>

                        <div className="entry-page__field-group">
                            <div className="entry-page__field-header">
                                <label htmlFor="password" className="input-title"></label>
                                <button type="button" className="text-btn entry-page__forgot-link"></button>
                            </div>
                            <input id="password" name="password" type="password" autoComplete="current-password" className="input-field" />
                        </div>

                        <button type="submit" className="btn primary-btn wide-btn entry-page__submit-btn"></button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default EntryPage