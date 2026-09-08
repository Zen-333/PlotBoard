import '../styles/entryPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'

function EntryPage() {
  return (
    <>
        <div className="entry-page">
            <div className="entry-page__panel entry-page__panel--left">
                <div className="entry-page__left-content">

                    <header className="entry-page__header">
                        <div className="entry-page__brand">
                            <img src="" alt="Plotboard logo" className="entry-page__logo" />
                            <h1 className="entry-page__brand-title">Plotboard</h1>
                        </div>
                        <button type="button" className="btn entry-page__theme-toggle"><FontAwesomeIcon icon={faSun}/></button>
                    </header>

                    <section className="entry-page__benefits">
                        <p className="entry-page__benefits-lable">WHAT YOU GET</p>
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
                        <p className="entry-page__footer-text">Supabase - Socket.io - PostgreSQL - React</p>
                    </footer>
                </div>
            </div>

            <div className="entry-page__panel entry-page__panel--right">
                <div className="entry-page__right-content">

                    <div className="entry-page__heading">
                        <h1 className="entry-page__title">Welcome back</h1>
                        <p className="entry-page__subtitle">
                            No account? 
                            <button type="button" className="text-btn">Sign up for free</button>
                        </p>
                    </div>

                    <div className="entry-page__oauth">
                        <button type="button" className="btn secondary-btn wide-btn entry-page__google-btn">Continue with Google</button>
                    </div>

                    <div className="entry-page__divider">
                        <span className="entry-page__divider-text">----------OR----------</span>
                    </div>

                    <form action="" className="entry-page__form">
                        <div className="entry-page__field-group">
                            <label htmlFor="email" className="input-title">EMAIL</label>
                            <input id="email" name="email" type="email" autoComplete="email" className="input-field" />
                        </div>

                        <div className="entry-page__field-group">
                            <div className="entry-page__field-header">
                                <label htmlFor="password" className="input-title">PASSWORD</label>
                                <button type="button" className="text-btn entry-page__forgot-link">Forgot?</button>
                            </div>
                            <input id="password" name="password" type="password" autoComplete="current-password" className="input-field" />
                        </div>

                        <button type="submit" className="btn primary-btn wide-btn entry-page__submit-btn">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default EntryPage