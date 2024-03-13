/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const SeeProductBtn = ({classes}) => {
    return(
        <Link className={`px-8 py-4 w-fit ${classes} text-sm font-semibold tracking-wider`}>SEE PRODUCT</Link>
    )
}

export default SeeProductBtn