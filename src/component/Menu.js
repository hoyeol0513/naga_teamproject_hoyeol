import { Link } from 'react-router-dom';
import styles from '../css/Menu.module.css';
function Menu() {
  const locationName = [
    "서울",
    "경기도",
    "인천광역시",
    "대전광역시",
    "부산광역시",
    "울산광역시",
    "강원도"
  ];
  return (
    <div>
      <div className={styles.menuBox1}>
        <ul className={styles.menu1}>
          {locationName.map((place) => (
            <li className={styles.menuItem1} key={locationName.index} >
              <Link to="#" style={{
                textDecoration : 'none',
                color : 'black',
                }}>
                {place}
                </Link>
              <ul>
                {/* index 활용하기 */}
                <li className={styles.menu2}><Link to="#">2차메뉴아이템 1</Link></li>
                <li className={styles.menu2}><Link to="#">2차메뉴아이템 2</Link></li>
                <li className={styles.menu2}><Link to="#">2차메뉴아이템 3</Link></li>
              </ul>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default Menu;

         