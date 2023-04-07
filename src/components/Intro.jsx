import { Form } from "react-router-dom"

// library
import { UserPlusIcon } from "@heroicons/react/24/solid";

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Your Money💸</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom. Start your journey today👇.
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name😉?" aria-label="Your Name" autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src="https://as2.ftcdn.net/v2/jpg/03/44/15/53/1000_F_344155307_Bodyxd8gsUv8hNcz7O8rn8qpsWghBvUC.jpg" alt="Person with money" width={600} />
    </div>
  )
}
export default Intro