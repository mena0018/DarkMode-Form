import "./Home.scss"


export default function Home() {

  return (
    <div className="main">
      <p className="sign">Sign in</p>

      <form>
        <input className="username" type="text" placeholder="Username" />
        <input className="password" type="password" placeholder="Password" />
        <a href="/" className="submit"> Sign in</a>
        <p className="forgot">
          <a href="/">Forgot Password?</a>
        </p>            
      </form>

    </div>
  )
}
