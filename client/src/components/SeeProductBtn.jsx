/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const SeeProductBtn = ({classes, dynamicPath}) => {
    return(
        <Link to={dynamicPath} className={`px-8 py-4 w-fit ${classes} text-sm font-semibold tracking-wider hover:brightness-125 hover:ease-in-out hover:delay-75`}>SEE PRODUCT</Link>
    )
}

export default SeeProductBtn