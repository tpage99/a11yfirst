import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'react-emotion';
import { ExternalLink } from 'react-feather';
import '../styles.css';
import config from '../../../config';

const forcedNavOrder = config.sidebar.forcedNavOrder;

// eslint-disable-next-line no-unused-vars
const ListItem = styled(({ className, active, level, ...props }) => {
  return (
    <li className={className}>
      <a href={props.to} {...props} />
    </li>
  );
})``;

const Sidebar = styled('aside')``;

const Divider = styled(props => (
  <li {...props}>
    <hr />
  </li>
))``;

const TagList = ({ tags }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx(
          filter: {
            fields: { slug: { regex: "/^/resources/?/" } }
            frontmatter: { tags: { in: ["tools"] } }
          }
        ) {
          edges {
            node {
              fields {
                id
              }
              frontmatter {
                title
                url
              }
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      return (
        <div>
          {allMdx.edges.map(tagItem => (
            <p>{tagItem.node.frontmatter.title}</p>
          ))}
        </div>
      );
    }}
  />
);

export default TagList;
