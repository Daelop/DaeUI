import UseBreakpoints from "../../style/UseBreakpoints" 
import colorPalette from "../../../references/Color-Palette";

const Styles = {

    cardHeaderStyle: {
        borderBottom: `2px solid ${colorPalette.primary}`,
        padding: '10px',
        textAlign: 'center',
        backgroundColor: colorPalette.accent,
        color: colorPalette.primary,
        textDecoration: 'underline',
        fontSize: '1.2rem',
    },
    cardBodyStyle: {
        padding: '10px',
        backgroundColor: colorPalette.secondary,
        color: colorPalette.primary,
    },
    cardFooterStyle: {
        borderTop: `2px solid ${colorPalette.primary}`,
        padding: '10px',
        textAlign: 'center',
        backgroundColor: colorPalette.secondary,
        color: colorPalette.primary,
        height: 'max-content',
    },
    cardImageStyle: {
        width: '80%',
        height: 'auto',
    }

}

export function Card({children}) {
    const {breakpoint} = UseBreakpoints();
    const Styles = {
        cardStyle: {
            border: `2px solid ${colorPalette.secondary}`,
            borderRadius: '5px',
            margin: '20px',
            padding: '10px',
            width: breakpoint === 'sm'? '150px': '300px',
            height: 'auto'
        },}

    return(
        <div style={Styles.cardStyle}>
            {children}
        </div>
    )
}

export function CardHeader({children}) {

    return(
        <div style={Styles.cardHeaderStyle}>
            <h3>{children}</h3>
        </div>
    )
}

export function CardBody({children}) {
    
        return(
            <div style={Styles.cardBodyStyle}>
                <p>
                 {children}   
                </p>
            </div>
        )
    }
export function CardFooter({children}) {
    
        return(
            <div style={Styles.cardFooterStyle}>
                {children}
            </div>
        )
    }
export function CardImage({src, alt}) {
        
            return(
                <div style={Styles.cardImageStyle}>
                    <img src={src} alt={alt} />
                </div>
            )
}
