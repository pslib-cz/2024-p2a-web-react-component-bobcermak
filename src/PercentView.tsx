import { FC } from "react"

type PercentProps = {
    value: number,
    max: number,
    makeColor: (percentNum: number) => string
}
const PercentView: FC<PercentProps> = ({value, max, makeColor}) => {
    const progressBar: number = (value / max) * 100
    return (
        <>
            <div className="result" style={{width: "100px", border: `2px solid ${makeColor(progressBar)}`, textAlign: "center", margin: "2rem auto"}}>
                <p style={{color: makeColor(progressBar)}}>{progressBar}%</p>
                <div className="bar" style={{width: `${progressBar}%`, height: "4px", backgroundColor: `${makeColor(progressBar)}`}}></div>
            </div>
        </>
    )
}
export default PercentView