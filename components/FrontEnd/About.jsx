import Image from "next/image";
import Link from "next/link";

export default function About({
                                  header,
                                  bodyText,
                                  photoURL,
                                  buttonOne,
                                  buttonTwo,
                                  buttonOneURL,
                                  buttonTwoURL,
                                  backgroundColor,
                                  fontColor,
                                  buttonBackgroundColor,
                                  buttonBorderColor,
                                  buttonTextColor,
                                  idRelativeLinking
                              }) {
    const buttons = [
        {text: buttonOne, url: buttonOneURL},
        {text: buttonTwo, url: buttonTwoURL},
    ]
    return (
        <div className="grid lg:grid-cols-3" className={`${backgroundColor}`} id={`${idRelativeLinking}`}>
            <div className="col-span-2" style={{color: fontColor}}>
                <div>
                    <h1>{header}</h1>
                    <div>
                        {bodyText}
                    </div>
                </div>
                <div className="flex gap-6 justify-evenly items-center">
                    {buttons.map((button, index) => (
                        <a href={`${button.url}`} key={index}>
                            <button
                                className={`${buttonBackgroundColor} ${buttonBorderColor} ${buttonTextColor}`}>{button.text}</button>
                        </a>
                    ))}
                </div>
            </div>
            <div style={{backgroundImage: `url(${photoURL})`}}>

            </div>
        </div>
    )
}