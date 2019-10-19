import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import GitHubButton from 'react-github-btn'
import './styles.css';
import config from '../../config.js';

import Search from './search/index';
const help = require('./images/help.svg');
const isSearchEnabled = config.header.search && config.header.search.enabled ? true : false;

let searchIndices = [];
if(isSearchEnabled && config.header.search.indexName) {
  searchIndices.push(
    { name: `${config.header.search.indexName}`, title: `Results`, hitComp: `PageHit` },
  );
}

import Sidebar from "./sidebar";

const Header = ({location}) => (
  <StaticQuery
    query={
      graphql`
        query headerTitleQuery {
          site {
            siteMetadata {
              headerTitle
              githubUrl
              helpUrl
              tweetText
              logo {
                link
                image
              }
              headerLinks {
                link
                text
              }
            }
          }
        }
        `}
    render={(data) => {
      const twitter = require('./images/twitter.svg');
      const {
        site: {
          siteMetadata: {
            githubUrl,
            helpUrl,
            tweetText,
            logo,
            headerLinks,
          }
        }
      } = data;

      return (
        <div className={'navBarWrapper'}>
          <nav className={'navbar navbar-default navBarDefault'}>
            <div className={'navbar-header navBarHeader'}>
              <div className={"headerTitle"}>A11y First</div>
              <button type="button" className={'navbar-toggle collapsed navBarToggle'} data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className={'sr-only'}>Toggle navigation</span>
                <span className={'icon-bar'}></span>
                <span className={'icon-bar'}></span>
                <span className={'icon-bar'}></span>
              </button>
            </div>
            {isSearchEnabled ? (
              <div className={'searchWrapper hidden-xs navBarUL'}>
                <Search collapse indices={searchIndices} />
              </div>
              ): null}
            <div id="navbar" className={'navbar-collapse collapse navBarCollapse'}>
              <div className={'visible-xs'}>
                <Sidebar location={location} />
                <hr/>
                {isSearchEnabled ? (
                  <div className={'searchWrapper navBarUL'}>
                    <Search collapse indices={searchIndices} />
                  </div>
                  ): null}
              </div>
              <ul className={'nav navbar-nav navBarUL navBarNav navbar-right navBarULRight'}>
                {headerLinks.map((link, key) => {
                  if(link.link !== '' && link.text !== '') {
                    return(
                      <li key={key}>
                        <a href={link.link} target="_blank" dangerouslySetInnerHTML={{__html: link.text}} />
                      </li>
                    );
                  }
                })}
                {helpUrl !== '' ?
                  (<li><a href={helpUrl}><img src={help} alt={'Help icon'}/></a></li>) : null
                }
                {(tweetText !== '' || githubUrl !== '') ?
                  (<li className="divider hidden-xs"></li>): null
                }
                {tweetText !== '' ?
                  (<li>
                    <a href={'https://twitter.com/intent/tweet?&text=' + tweetText} target="_blank">
                      <img className={'shareIcon'} src={twitter} alt={'Twitter'} />
                    </a>
                   </li>) : null
                }
                {githubUrl !== '' ?
                  (<li className={'githubBtn'}>
                    <GitHubButton href={githubUrl} data-show-count="true" aria-label="Star on GitHub">Star</GitHubButton>
                  </li>) : null}
              </ul>
            </div>
          </nav>
        </div>
      );
    }}
  />
);

export default Header;
