import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ authenticate, setAuthenticate }) => {
    const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M Home", "Sale", "지속가능성",];
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);

    const goToLogin = () => {
        navigate('/login')
    }

    const handleLogout = () => {
        setAuthenticate(false);
        navigate('/');
    }

    const goToHome = () => {
        navigate('/');
    }

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    const search = (event) => {
        if (event.key === "Enter") {
            //입력한 검색어를 읽어와서
            let keyword = event.target.value
            console.log("keyword", keyword)
            // url을 바꿔준다.
            navigate(`/?q=${keyword}`);
        }
    }

    return (
        <div>
            <div>
                {authenticate ? (
                    <div className="login-button" onClick={handleLogout}>
                        <FontAwesomeIcon icon={faUser} />
                        <div>로그아웃</div>
                    </div>
                ) : (
                    <div className="login-button" onClick={goToLogin}>
                        <FontAwesomeIcon icon={faUser} />
                        <div>로그인</div>
                    </div>
                )}
            </div>
            <div className="nav-section">
                <img width={100}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1064px-H%26M-Logo.svg.png"
                    onClick={goToHome}
                    style={{ cursor: 'pointer' }}
                />
            </div>

            {/* 모바일 메뉴 토글 버튼 */}
            <div className="mobile-menu-button" onClick={toggleMenu}>
                <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
            </div>

            <div className={`menu-area ${showMenu ? 'show' : ''}`}>
                <ul className="menu-list">
                    {menuList.map((menu, index) => (
                        <li key={index}>{menu}</li>
                    ))}
                </ul>

                <div className="search-section">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" onKeyPress={(event) => search(event)} />
                </div>
            </div>
        </div>
    )
}

export default Navbar