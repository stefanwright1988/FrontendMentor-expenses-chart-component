import Chart from "./components/Chart";
import { StyledApp } from "./App.styled";
import { createGlobalStyle } from "styled-components";
import Balance from "./components/Balance";
import useAxios from "axios-hooks";

const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
      v2.0 | 20110126
      License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
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
      font-size: 18px;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
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
    body {
      background-color: ${(props) => props.theme.palette.cream};
      line-height: 1;
      color: black;
      font-family: 'DM Sans', sans-serif;
      min-height: 100vh;
      min-width: 100vw;
    };
    h1{font-size: clamp(1.75em,3vw,4em);padding:0.25em 0};
    h2{font-size: clamp(1.5em, 2vw,3em);padding:0.25em 0};
    h3{font-size: clamp(1em,0.75vw,1.5em);padding:0.25em 0};
    span{font-size: clamp(0.95em, 1vw,1em);padding:0.25em 0}

    .attribution { padding: 0.75em;font-size: 11px; text-align: center; }
    .attribution a { font-size: 11px; text-align: center; color: hsl(228, 45%, 44%); }
`;

function App() {
  const [{ data, loading, error }] = useAxios("/data.json");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Balance />
        <Chart data={data} />
        <div className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="https://www.stefan-wright.com">Stefan</a>.
        </div>
      </StyledApp>
    </>
  );
}

export default App;
