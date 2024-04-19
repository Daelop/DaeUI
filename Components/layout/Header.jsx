import CheckHover from "../style/CheckHover"
import UseBreakpoints from "../style/UseBreakpoints"
import colorPalette from "../../references/Color-Palette";


export function Header({children}) {
    const {breakpoint} = UseBreakpoints();
    const Styles = {
    headerStyle: {
        borderBottom: `2px solid ${colorPalette.primary}`,
        display: 'flex',
        justifyContent: 'space-between',
        height: breakpoint === 'sm'? '60px': '110px',
        top: '0',
        position: 'sticky',
        backgroundColor: '#F7F7F2c0',
        margin: '0',
    },}
    return(
        <header style={Styles.headerStyle}>
            {children}
        </header>
    )
}
export function HeaderNav({children}) {
    const Styles = {
        navStyle: {
            display: 'flex',
            justifyContent: 'center',
            marginLeft:'5%',
            alignItems: 'center',
        }
    }
    return(
        <nav style={Styles.navStyle}>
            {children}
        </nav>
    )
}
export function HeaderNavItem({children, href}) {
   const {breakpoint} = UseBreakpoints();
   const {hover, handleMouseEnter, handleMouseLeave} = CheckHover();
    const Styles = {
        navItemStyle: {
            display: 'flex',
            alignItems: 'center',
            margin: breakpoint === 'sm'? '0 5px' : '0 10px',
            padding: '5px 20px 5px 5px',
            height: '60%',
            scale: breakpoint === 'sm'? 1: 1.5,
            borderRight: '1px solid #F7F7F2a0',
        },
        navItemLinkStyle: {
                fontWeight: 'bold',
                fontSize: breakpoint === 'sm'? '1em': '1.5em',
                color: colorPalette.primary,
                cursor: 'pointer',
                textDecoration: hover? 'underline': 'none',
                
        }
    }
    return(
        <div style={Styles.navItemStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a style={Styles.navItemLinkStyle} href={href}>{children}</a>
        </div>
    )

}

export function HeaderLogo({src, alt}) {
    const {breakpoint} = UseBreakpoints();
    const Styles = {
        logoStyle: {
            width: breakpoint === 'sm'? '50px': '100px',
            height: 'auto',
        },
        divStyle:{
            margin: breakpoint === 'sm'? '5px 5%' :'10px 5%'
        }
    }
    
    return(
        <div style={Styles.divStyle}>
            <img style={Styles.logoStyle} src={src} alt={alt} />
        </div>
    )
}