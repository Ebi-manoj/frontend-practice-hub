import { Link } from 'react-router-dom';

export const MyRoutes = () => {
  return (
    <div>
      <h1 id="app-heading">Hello Guyz</h1>
      <div id="my-routes">
        <ul id="main-ul">
          <li>
            <Link to={'/accordion'}>
              <p className="routes">Accordian</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
