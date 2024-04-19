import UseBreakpoints from "../style/UseBreakpoints";

export default function BodyText({children}) {
    const {breakpoint} = UseBreakpoints();
    const Styles = {
        bodyTextStyle: {
            fontSize: '1.5em',
            margin: '40px',
            padding: '0',
            width: breakpoint === 'sm'? '80%': '60%',
            textAlign: 'center',
        }
    }
    return(
        <p style={Styles.bodyTextStyle}>
            {children}
        </p>
    )
}