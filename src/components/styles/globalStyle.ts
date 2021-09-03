import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const global = createGlobalStyle`
    ${reset};
	html {
        overflow-x: hidden;
        overflow-y: auto;
        display:block;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        font-size: 62.5%;
        box-sizing: border-box;
        * {
            box-sizing: inherit;
        }
    }
	body {
        max-width: 89rem;
        margin: 0 auto;
        /* background-color: #141414; */
        a{
            text-decoration: none;
            color: inherit;
        }
        
        /*******************************************************************
        font
        ********************************************************************/
		font-family: Roboto, AppleSDGothicNeo-Regular, NotoSansKR, 'Noto+Sans', 'Malgun Gothic', '맑은 고딕', sans-serif;
        font-size: 1.8rem;
        line-height: 1.5;
        letter-spacing: -0.08rem;
        * {
            font-family: inherit;
            line-height: inherit;
            letter-spacing: inherit;
        }
        @font-face {
            font-family: 'NotoSansKR';
            src: url(https://ferrari219.github.io/graham-ts/fonts/NotoSansCJKkr-DemiLight.woff2) format('woff2'), url(https://ferrari219.github.io/graham-ts/fonts/NotoSansCJKkr-DemiLight.woff) format('woff'),
                url(https://ferrari219.github.io/graham-ts/fonts/NotoSansCJKkr-DemiLight.otf) format('opentype');
            font-weight: 400;
        }
        @font-face {
            font-family: 'NotoSansKR';
            src: url(https://ferrari219.github.io/graham-ts/fonts/NotoSansCJKkr-Medium.woff2) format('woff2'), url(https://ferrari219.github.io/graham-ts/fonts/NotoSansCJKkr-Medium.woff) format('woff'),
                url(https://ferrari219.github.io/graham-ts/fonts/NotoSansCJKkr-Medium.otf) format('opentype');
            font-weight: 600;
        }
        @font-face {
            font-family: 'NotoSansKR';
            src: url(https://ferrari219.github.io/graham-ts/fonts/NotoSansCJKkr-Bold.woff2) format('woff2'), url(https://ferrari219.github.io/graham-ts/fonts/NotoSansCJKkr-Bold.woff) format('woff'),
                url(https://ferrari219.github.io/graham-ts/fonts/NotoSansCJKkr-Bold.otf) format('opentype');
            font-weight: 700;
        }
        @font-face {
            font-family: 'Roboto';
            src: url(https://ferrari219.github.io/graham-ts/fonts/Roboto-Regular.woff2) format('woff2'), url(https://ferrari219.github.io/graham-ts/fonts/Roboto-Regular.woff) format('woff'),
                url(https://ferrari219.github.io/graham-ts/fonts/Roboto-Regular.eot) format('embedded-opentype');
            font-weight: 400;
        }
        @font-face {
            font-family: 'Roboto';
            src: url(https://ferrari219.github.io/graham-ts/fonts/Roboto-Bold.woff2) format('woff2'), url(https://ferrari219.github.io/graham-ts/fonts/Roboto-Bold.woff) format('woff'),
                url(https://ferrari219.github.io/graham-ts/fonts/Roboto-Bold.eot) format('embedded-opentype');
            font-weight: 600;
        }
    }    
`;

export default global;

/* inherit Width, height */
export const Inherit = css`
	width: inherit;
	height: inherit;
`;

/* Custom module */
export const SrOnly = css`
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
`;