import colorPalette from "../../references/Color-Palette";

export default function GlobalTheme({children}){
    return(
        <div style={{
            backgroundColor: colorPalette.primary,
            color: colorPalette.secondary,
            fontFamily: 'Roboto, sans-serif',
            fontSize: '1.2rem',
            fontWeight: '400',
            lineHeight: '1.5',
            letterSpacing: '0.00938em',
            margin: '0',
            padding: '0',
        }}>
            {children}
        </div>
    )
}