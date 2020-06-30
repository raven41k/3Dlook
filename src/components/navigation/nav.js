import React, {useState} from 'react';
import './nav.scss';

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="navigation">
      <ul className="navigation__category">
          <li><a className="navigation__category__link navigation__category__link--active" href="#">Все</a></li>
          <li><a className="navigation__category__link" href="#">Плащи</a></li>
          <li><a className="navigation__category__link" href="#">Кроссовки</a></li>
          <li><a className="navigation__category__link" href="#">Рубашки</a></li>
          <li><a className="navigation__category__link" href="#">Брюки</a></li>
      </ul>
      <ul className="navigation__filter">
          <li>
                <a onClick={() => setOpen(!isOpen)} className={`${isOpen ? "active" : ""}`}>Сортировать</a>
                {
                    isOpen ? (
                        <ul>
                            <li><a href="#">От дорогих к дешевым</a></li>
                            <li><a href="#">От дешевых к дорогим</a></li>
                            <li><a href="#">Популярные</a></li>
                            <li><a href="#">Новые</a></li>
                        </ul>
                    ) : null
                }
            </li>
      </ul>
    </nav>
  );
};

export default Nav;
