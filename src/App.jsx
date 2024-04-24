import { useState } from "react"

import ArticleList from "./componentes/ArticleList/ArticleList"
import Form from "./componentes/Form/Form"
import Header from "./componentes/Header/Header"


const App = () => {
    const [user, setUser] = useState ()
    const hasUser = Boolean(user)
    return (
        <div className="h-screen">
            <Header user={user} />
            {hasUser && <ArticleList />}
            {hasUser || <Form onSubmit={setUser} />}
        </div>
    )
}

export default App