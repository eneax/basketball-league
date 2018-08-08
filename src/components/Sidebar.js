import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import slug from 'slug';    // makes the item snake-case
import Loading from './Loading';

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

// Create a custom Link component 
function CustomLink ({ to, children }) {
  return (
    // we use Route because it has a location checker build-in (it gives us access to "match")
    <Route
      path={to.pathname}
      children={({ match }) => (
        <li style={{listStyleType: 'none', fontWeight: match ? 'bold' : 'normal'}}>
          <Link to={to}>{children}</Link>
        </li>
      )}
    />
  )
}

export default function Sidebar ({ title, list, loading, location, match }) {
  return loading === true
    ? <Loading />
    : <div>
        <h3 className='header'>{title}</h3>
        <ul className='sidebar-list'>
          {list.map((item) => (
            <CustomLink
              key={item}
              to={{
                pathname: `${match.url}/${slug(item)}`,
                search: location.search                       // query parameter
              }}>
                {item.toUpperCase()}
            </CustomLink>
          ))}
        </ul>
      </div>
}