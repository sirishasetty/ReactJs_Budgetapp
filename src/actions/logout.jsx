//  react router dom imported
import { redirect } from "react-router-dom";

// library for delete/update/create/ popup 
import { toast } from "react-toastify";

// helpers 
import { deleteItem } from "../helpers";

export async function logoutAction() {
  // delete the user
  deleteItem({
    key: "userName"
  })
  deleteItem({
    key: "budgets"
  })
  deleteItem({
    key: "expenses"
  })
  toast.success("You’ve deleted your account!")
  // return redirect
  return redirect("/home")
}