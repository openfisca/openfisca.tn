import asset from 'next/asset'

import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"


const Home = () => (
    <div id="content">
        <div id="index-body">
            <h2>Des outils à votre disposition  🇹🇳  لكم مجموعة من الأدوات</h2>
            <ul className="flex-container">
                <li className="flex-item">
                    <h3>Legislation Explorer</h3>
                    <p>Ce site propose toutes les données et calculs disponibles dans OpenFisca Tunisia avec un moteur de recherche.</p>
                    <a className="cta" href="https://legislation.openfisca.tn">Explorer - البحث</a>
                </li>
                <li className="flex-item">
                    <h3>Documentation</h3>
                    <p>Entièrement en anglais, elle explique comment modéliser un ajout à la législation ou une réforme. </p>
                    <a className="cta" href="http://openfisca.org/doc">Découvrir - الوثائق</a>
                </li>
                <li className="flex-item">
                    <h3><img src={asset('/images/GitHub-Mark-Light-64px.png')} alt=""/> Code source</h3>
                    <p>L'ensemble du code d'OpenFisca-Tunisia peut être lu, forké et cloné depuis la plateforme GitHub.</p>
                    <a className="cta" href="https://github.com/openfisca/openfisca-tunisia">Contribuer - المساهمة</a>
                </li> 
                <li className="flex-item">
                    <h3>Demo</h3>
                    <p>Sans installation, un notebook jupyter permet d'interagir avec le modèle en code python.</p>
                    <a className="cta" href="https://mybinder.org/v2/gh/openfisca/openfisca-tunisia/master?filepath=notebooks%2Fdemo.ipynb">Essayer - الإكتشاف</a>
                </li>
            </ul>
        </div>
        <style jsx>{` 
            #content {
                font-size: 120%;
                font-family: "Helvetica Neue",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

                padding: 0 3em 3em 3em;
                min-height:100vh;
	            display:flex;
	            flex-direction:column;
            }

            #index-body {
                flex-grow:1;
            }

            h2 {
                margin-top: 2em;
                margin-bottom: 1em;
                font-weight: normal;
                color: #1e3242;
                text-align: center;
            }

            img {
				max-width: 1em;
				margin-right: 5px;
            }
            
            .flex-container {
                display: flex;
                justify-content: center;
                margin: auto;
                padding: 1em;
                display: flex;
                flex-wrap: wrap;
            }

            .flex-item {
                background-color: #9a9a9a24;
                display: flex;
                flex-flow: column;
                justify-content: space-between;
                align-items: center;
                border: 1px solid transparent;
                margin: 1em;
                max-width: 20%;

                min-width: 27%;
                padding: 1em 2em 2em 2em;
                border-radius: 50px;
                color: #1e3242;
            }

            .cta {
                margin-top: 1em;
				margin-bottom: 3em;
				background-color: rgb(43, 106, 141);

				color: #ffffff;
				border: 1px solid transparent;
				border-radius: 4px;
				display: inline-block;
				padding: 6px 12px;
				margin-bottom: 0;
				font-size: 1em;
				font-weight: 400;
				line-height: 1.5;
				text-align: center;
				text-decoration: none;
				white-space: nowrap;
				vertical-align: middle;
            }

            .arabic {
                direction: rtl;
            }

            @media (max-width: 720px) {
                .flex-item {
                    min-width: 80%;
                    border-radius: 4px;
                }
            }
        `}</style>
    </div>
)

export default () => (
  <div>
    <Header />
    <Hero />
    <Home />
    <Footer />
  </div>
)

