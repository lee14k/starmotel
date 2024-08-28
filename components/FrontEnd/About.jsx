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
                                  idRelativeLinking,
                                  headerColor,
                                  bodyTextColor
                              }) {
    const buttons = [
        {text: buttonOne, url: buttonOneURL},
        {text: buttonTwo, url: buttonTwoURL},
    ]
    return (
        <div className={`${backgroundColor} grid lg:grid-cols-3 h-[100rem] lg:h-[70rem]`} id={`${idRelativeLinking}`}>
            <div className="lg:col-span-2" style={{color: fontColor}}>
                <div className="mx-24">
                    <h1 className={`${headerColor} text-6xl font-bold`}>{header}</h1>
                    <div className={`${bodyTextColor}`}>
                        {bodyText}
                    </div>
                </div>
                <div className="flex gap-6 justify-evenly items-center">
                    {buttons.map((button, index) => (
                        <a href={`${button.url}`} key={index}>
                            <button
                                className={`${buttonBackgroundColor} ${buttonBorderColor} ${buttonTextColor} py-8 px-4 text-3xl font-bold`}>{button.text}</button>
                        </a>
                    ))}
                </div>
            </div>
            <div className="lg:h-full bg-cover bg-center h-[24rem] " style={{backgroundImage: `url(${photoURL})`}}>
            </div>
        </div>
    )
}