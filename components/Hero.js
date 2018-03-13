const Hero = () => (
  <div className='hero'>
    <div className='content'>
      <div id='logo-large'>
        <img src='http://openfisca.org/img/logo-openfisca.svg' />
      </div>
      <div id='pitch'>
			<h1 className='arabic'>الجباية المفتوحة - تونس</h1>
      <h1>OpenFisca - Tunisie </h1>
        <p>Entièrement libre et gratuit, modulable et réutilisable, OpenFisca-Tunisia modélise le système socio-fiscal tunisien en code informatique.</p>
				<p>Son moteur de microsimulation aide à comprendre les lois, analyser leurs changements et simuler des situations.</p>
			</div>
    </div>

    <style jsx>{`
			.hero {
				font-family: "Helvetica Neue",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
				color: #fff;

				background: rgba(43, 106, 141, 0.7);
				padding: 0 0 1.5em 0;
				border-radius: 0 0 8px 8px;
			}

			.h1 {
				text-align: center;
			}

			.content{
				margin: 0px 6em;
				display: flex;
			}

			#logo-large {
				float: left;
				margin-right: 6em;
				margin-bottom: 2em;
			}

			#logo-large img {
				width: 20em;
				margin-top: 5em
			}

			#pitch {
				margin:1em;
				font-size: 120%;
			}

			.arabic {
				direction: rtl;
			}

      @media (max-width:1100px) {
        .content{
          width:80%
          margin: 0 auto;
          flex-direction: column;
          align-items: center;
				}
				
        #logo-large {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 0em;
          margin-bottom: 1em;
				}
				
        #logo-large img{
          width: 70%;
				}
				
        #pitch {
          margin:1em;
          font-size: 1em;
				}
			}
    `}</style>
  </div>
  )

export default Hero
