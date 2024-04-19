
export default function PageContainer({children}) {
    const Styles = {
        pageContainerStyle: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin:'0',
            width:'100%',
            top:'0',
            left:'0',
            paddingBottom:'150px',
        }
    }
    return(
        <div style={Styles.pageContainerStyle}>
            {children}
        </div>
    )
}