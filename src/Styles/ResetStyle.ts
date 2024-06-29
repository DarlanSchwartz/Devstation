import { createGlobalStyle } from "styled-components";
/**
 * Global style component that resets the default styles of the browser.
 * @see https://styled-components.com/docs/api#createglobalstyle
 */
const ResetStyle = createGlobalStyle`
html, body, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font: inherit;
		vertical-align: baseline;
	}
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
    body,html{
		height: 100%;
        min-height: 100% !important;
        background-color: ${({ theme }) => theme.background};
    }

    #root{
        min-height: 100%;
		max-height: fit-content;
		/* --toastify-color-success: green !important; */
    }

    input{
        &:focus{
            outline: none;
        }
    }

	.swal2-image{
		object-fit: cover;
	}

    button{
        cursor: pointer;
        user-select: none;
        &:disabled{
            cursor: not-allowed;
        }
    }

    * {
        font-family: sans-serif;
        transition: all 200ms;
        box-sizing: border-box;
		&::-webkit-scrollbar {
			width: 10px;
			background-color: ${({ theme }) => theme.background};
			opacity: 0.5;
		}
		&::-webkit-scrollbar-thumb {
			background-color:${({ theme }) => theme.white};
			border-radius: 1px;
		}
    }

	code{
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		background-color: ${({ theme }) => theme.gray};
		border-radius: 2px;
		padding: 5px;
		color: ${({ theme }) => theme.white};
		font-size: 13px;
	}

	@keyframes fadein {
		from{
			opacity: 0;
		}
		to{
			opacity: 1;
		}
  	}

	  @keyframes shake {
		0% { transform: translate(1px, 1px) rotate(0deg); }
		10% { transform: translate(-1px, -2px) rotate(-1deg); }
		20% { transform: translate(-3px, 0px) rotate(1deg); }
		30% { transform: translate(3px, 2px) rotate(0deg); }
		40% { transform: translate(1px, -1px) rotate(1deg); }
		50% { transform: translate(-1px, 2px) rotate(-1deg); }
		60% { transform: translate(-3px, 1px) rotate(0deg); }
		70% { transform: translate(3px, 1px) rotate(-1deg); }
		80% { transform: translate(-1px, -1px) rotate(1deg); }
		90% { transform: translate(1px, 2px) rotate(0deg); }
		100% { transform: translate(1px, -2px) rotate(-1deg); }
	}

	.white{
		color: ${({ theme }) => theme.white};
	}

	@keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .rotate {
        animation: rotate 5s linear infinite;
    }
`;

export default ResetStyle;