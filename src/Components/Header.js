import './Header.css';

const Header = () => {
    return (
    <header>
        <div class="inner">
            <p class="logo"><a class="over" href="#">CountDown</a></p>
            <ul class="navi">
            <li><a href="/movie/">オススメ映画</a></li>
            <li><a href="/music/">オススメ音楽</a></li>
            </ul>
        </div>
    <button class="sp-navi-toggle"><span class="bar"></span><span class="bar"></span><span class="bar"></span><span class="menu">MENU</span><span class="close">CLOSE</span></button>
    </header>
    );
}
export default Header;