import '../styles/entryPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faCompassDrafting } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import bolt from "../assets/entryPage/bolt.png"
import compass from "../assets/entryPage/compass.png"
import folder from "../assets/entryPage/folder.png"
import lock from "../assets/entryPage/lock.png"
import tower from "../assets/entryPage/tower.png"

type entryPageBenefits = {
    icon: string,
    heading: string,
    description: string,
};

const benefits: entryPageBenefits[] = [
    {icon: bolt, heading: "Real-time collaboration", description: "Every change broadcasts instantly via Socket.io so no refresh needed."},
    {icon: lock, heading: "Role based access control", description: "Owner, editor, viewer permissions enforced server side."},
    {icon: folder, heading: "Rekational data model", description: "Boards, memberships, invitations, and shapes in PostgreSQL."},
    {icon: tower, heading: "Persistent canvas state", description: "Shapes survive refreshes. Late joiners get a full snapshot"}
];

function EntryPage() {

    const [isLightMode, setIsLightMode] = useState(false);
    const [isSignupMode, setIsSignupMode] = useState(false);

    const benefitsList = benefits.map(benefit => 
        <li className="entry-page__benefit">
            <img src={benefit.icon} alt="" className="entry-page__benefit-icon" />
            <h3 className="entry-page__benefit-title">{benefit.heading}</h3>
            <p className="entry-page__benefit-description">{benefit.description}</p>
        </li>
    ); 

    const signUpForm = (
         <>
             <div className="entry-page__field-group">
                <label htmlFor="username" className="input-title">USERNAME</label>
                <input id="username" name="username" type="username" className="input-field" />
            </div>

            <div className="entry-page__field-group">
                <label htmlFor="email" className="input-title">EMAIL</label>
                <input id="email" name="email" type="email" autoComplete="email" className="input-field" />
            </div>

            <div className="entry-page__field-group">
                <div className="entry-page__field-header">
                    <label htmlFor="password" className="input-title">PASSWORD</label>
                </div>
                <input id="password" name="password" type="password" className="input-field" />
            </div>

            <div className="entry-page__field-group">
                <div className="entry-page__field-header">
                    <label htmlFor="password" className="input-title">RE-ENTER PASSWORD</label>
                </div>
                <input id="re-entered-password" name="password" type="password" className="input-field" />
            </div>
        </>
    )

    const loginForm = (
        <>
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
        </>
    )
    

    function switchLightMode(){
        setIsLightMode(!isLightMode);
    }

    function switchSignupMode(){
        setIsSignupMode(!isSignupMode);
    }

  return (
    <>
        <div className="entry-page">
            <div className="entry-page__panel entry-page__panel--left">
                <div className="entry-page__left-content">

                    <header className="entry-page__header">
                        <div className="entry-page__brand">
                            <img src={compass} alt="Plotboard logo" className="entry-page__logo" />
                            <h1 className="entry-page__brand-title">Plotboard</h1>
                        </div>
                        <button type="button" className="btn entry-page__theme-toggle" onClick={switchLightMode}><FontAwesomeIcon icon={faSun}/></button>
                    </header>

                    <section className="entry-page__benefits">
                        <p className="entry-page__benefits-lable">WHAT YOU GET</p>
                        <ul className="entry-page__benefits-list">
                            {benefitsList}
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
                            {isSignupMode? "Already got an account?": "No account?"}
                            <button type="button" className="text-btn" onClick={switchSignupMode}>{isSignupMode?"Login": "sign up for free"}</button>
                        </p>
                    </div>

                    <div className="entry-page__oauth">
                        <button type="button" className="btn secondary-btn wide-btn entry-page__google-btn">Continue with Google</button>
                    </div>

                    <div className="entry-page__divider">
                        <span className="entry-page__divider-text">----------OR----------</span>
                    </div>

                    <form action="" className="entry-page__form">
                        {isSignupMode? signUpForm: loginForm}
                        <button type="submit" className="btn primary-btn wide-btn entry-page__submit-btn">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default EntryPage