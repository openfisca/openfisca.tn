import asset from 'next/asset'


const Footer = () => (
	<div>
		<footer>
			<ul>
				<li><a href="mailto:contact@openfisca.org?Subject=openfisca.org">Contact - الاتصال بنا</a></li>
				<li><a href="http://www.openfisca.org/doc">Documentation</a></li>
				<li><a id="github" href="https://github.com/openfisca/openfisca.tn"><img src={asset('/images/GitHub-Mark-Light-64px.png')} alt=""/>Contribuer à cette page</a></li>
				<li><a href="http://openfisca.org">openfisca.org</a></li>
			</ul>
		</footer>

        <style jsx>{`
            footer {
                font-family: "Helvetica Neue",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                background: #2b6a8d;
                color: #fff;
                padding: 0 1em;
            }

            ul {
                font-size: 1em;
                list-style-type: none;
                margin: 0.4em;
                min-height: 3em;
                display: flex;
                flex-direction: row;
                justify-content: space-around;

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

            a {
                color: #ffffff;
                border: 1px solid transparent;
                border-radius: 4px;
                display: inline-block;
                padding: 6px 12px;
                font-weight: 300;
                line-height: 1.5;
                text-align: center;
                white-space: nowrap;
                vertical-align: middle;
                text-decoration: none;	
            }


            @media (max-width: 720px) {
                ul {
                    padding: 0;
                    flex-direction: column;
                    align-items: center;
                }
            }
		`}</style>
    </div>
)
    
export default Footer
    