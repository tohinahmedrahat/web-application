const { useContext } = require("react")
const { authContex } = require("../AuthProvider/AuthProvider")

const useAuth = () => {
    return useContext(authContex)
}

export default useAuth;