import asset from 'next/asset'


const Header = (props) => (
    <header>
        <ul>
            <li><a className="menu-item" href='https://github.com/openfisca/openfisca-tunisia'><img src={asset('/images/GitHub-Mark-Light-64px.png')} alt=""/>Code source</a></li>
            <li><a className="menu-item" href="http://openfisca.org/doc/">Documentation</a></li>
		</ul>
        
		<meta name="viewport" content="width=device-width, initial-scale=1"/>

        <style jsx>{`
            header {
                font-family: "Helvetica Neue",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                color: #fff;
                
                display: flex;
                flex-direction: row-reverse;
                align-items: flex-end;
                justify-content: space-between;

                background: rgba(43, 106, 141, 0.7);
				border-radius: 8px 8px 0 0;
            }

            ul {
                font-size: 1em;
                list-style-type: none;
                margin: 0.4em;
                min-height: 3em;
                display: flex;
                align-items : center;
            }

            li + li {
                margin-left: 0.5em;
            }

            li {
                display: inline;
                list-style: none;
                margin: 1em;

            }

            li img {
				max-width: 1em;
				margin-right: 5px;
			}

            .menu-item {
				color: #ffffff;
				border: 1px solid #ffffff;
				border-radius: 4px;
				display: inline-block;
				padding: 0.25em 1em;
				font-weight: 600;
				line-height: 1.5;
				text-align: center;
				white-space: nowrap;
				vertical-align: middle;
				text-decoration: none;	
			}

            @media (max-width: 720px) {
				header{
					flex-direction: column;
				}
				ul {
                    padding: 0;
                    flex-direction: column;
                    align-items: center;
                }
            }
        `}</style>
	</header>
)

export default Header
