import dp1 from "./dp.jpg"

export default function Head() {
    return (
        <header>
        <img src = {dp1} alt = "broken" />
        <h2>Alex smith</h2>
        <span className="role">Full stack developer</span>
        <p className="mail">alex.smith@rediff.com</p>
        </header>
    )
}