import React from 'react';
import Select from 'react-select';
// import { useMediaQuery } from 'react-responsive';


const Navbar = ({ userLang, setUserLang, userTheme, setUserTheme, fontSize, setFontSize, compile }) => {

    // const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
    // const isBigScreen = useMediaQuery({ minWidth: 1824 })
    // const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    // const isPortrait = useMediaQuery({ orientation: 'portrait' })
    // const isRetina = useMediaQuery({ minResolution: '2dppx' })

    const languages = [
        { value: "c", label: "C" },
        { value: "cpp", label: "C++" },
        { value: "python3", label: "Python" },
        { value: "java", label: "Java" },
    ];

    const themes = [
        { value: "vs-dark", label: "Dark" },
        { value: "light", label: "Light" },
    ];

    let fontColor;
    if (userTheme === "vs-dark") {
        fontColor = "white";
    }

    return (
        <div style={{
            padding: '10px 0'
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly"
            }}>
                <h1 style={{
                    color: 'grey',
                    fontFamily: "DM Serif Text",
                    fontWeight: 'bolder',
                    margin: 0
                }}>anvaya</h1>

                <Select options={languages} value={userLang} onChange={(e) => setUserLang(e.value)} placeholder={userLang} />
                <Select options={themes} value={userTheme} onChange={(e) => setUserTheme(e.value)} placeholder={userTheme} />

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "200px",
                    color: fontColor
                }}>
                    <label>Font Size</label>
                    <input type='range' min="18" max="30" value={fontSize} step="2" onChange={(e) => { setFontSize(e.target.value) }} style={{
                        cursor: "pointer"
                    }}/>
                </div>
                <button onClick={compile} style={{
                    width: "10rem",
                    height: "2.5rem",
                    borderRadius: "10px",
                    cursor: "pointer"
                }}>Run</button>
            </div>

        </div>
    )
}

export default Navbar;