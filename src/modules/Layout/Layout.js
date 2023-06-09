import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";

export default function LayoutComponent(props) {
    return (
        <div id="Layout">
            <HeaderComponent />
            <main>
                { props.children }
            </main>
            <FooterComponent />
        </div>
    );
};