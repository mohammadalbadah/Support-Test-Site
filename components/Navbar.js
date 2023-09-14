import Link from 'next/link';
import { useState } from "react"


const Navbar = () => {
let tagDeployValue;

  try {
    tagDeployValue = localStorage.getItem("tagDeployMethod") || "0";
    localStorage.setItem("tagDeployMethod", tagDeployValue);
  } catch (error) {}

  const [tagDeployMethod] = useState(tagDeployValue);

  const saveToLocalStorage = e => {
    e.preventDefault()
    var value;
    let deployText;

    switch (tagDeployMethod){
      case "0": value = "1"
      deployText = "Adobe Launch"
      break;
      case "1": value = "0"
      deployText = "GTM"
      break;
      default: value = "0"
      break;
    }
    localStorage.setItem("tagDeployMethod", value);
    alert(`Switching Tag Deployment Mode to ${deployText}`)
    window.location.reload();
  }
    return (
        <nav>
            <div className="logo">
                <a onClick={saveToLocalStorage}><h1>Support Site</h1></a>
            </div>
            <Link href="/">Home</Link>
            <Link href={{ pathname: "/products", query: "arsenal" }}>Arsenal</Link>
            <Link href={{ pathname: "/products", query: "barcelona" }}>Barcelona</Link>
            <Link href={{ pathname: "/products", query: "realmadrid" }}>Real Madrid</Link>
        </nav>
    );
}

export default Navbar;